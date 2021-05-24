"use strict";

const path = require("path");
const defaultSettings = require("./src/settings.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const name = defaultSettings.title; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528; // dev port

const publicPath =
  process.env.NODE_ENV === "development" ? "/" : "/vue-element-admin-demo";

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: publicPath,
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: true,
  devServer: {
    port: port,
    open: true,
    host: 'localhost',
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js")
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: defaultSettings.title,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial"
      }
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete("prefetch");

    // markdown
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      // .options(markdown);
      .options({
        raw: true,
        // do not automatically extract script and style tags
        // see: https://github.com/QingWei-Li/vue-markdown-loader/issues/27
        preventExtract: true,
        preset: "default",
        breaks: true,
        linkify: true, // 自动识别连接
        // highlight: function (str, lang) {
        //   if (lang && hljs.getLanguage(lang)) {
        //     try {
        //       return `<pre class="hljs" onclick="javascript:()=>{console.log('click')}"><code>` +
        //              hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
        //              '</code></pre>';
        //     } catch (__) {}
        //   }

        //   return '<pre class="hljs" v-copy><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        // },
        use: [
          /* markdown-it plugin */
          // require("markdown-it-xxx"),
          /* or */
          // a标签新窗口打开
          // ref:
          // https://github.com/QingWei-Li/vue-markdown-loader
          // https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
          // https://github.com/markdown-it/markdown-it-for-inline
          [
            require("markdown-it-for-inline"),
            "url_new_win",
            "link_open",
            function(tokens, idx) {
              var aIndex = tokens[idx].attrIndex("target");

              if (aIndex < 0) {
                tokens[idx].attrPush(["target", "_blank"]);
              } else {
                tokens[idx].attrs[aIndex][1] = "_blank";
              }
            }
          ]
        ]
      });

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", config => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  }
};
