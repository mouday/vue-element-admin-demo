# MarkDown

github: [https://github.com/QingWei-Li/vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)

安装依赖

```bash
npm i vue-markdown-loader -D

# 样式
npm i github-markdown-css -D
npm i highlight.js -D

```

vue.config.js 中配置

```js
chainWebpack: config => {
  config.module
    .rule("md")
    .test(/\.md/)
    .use("vue-loader")
    .loader("vue-loader")
    .end()
    .use("vue-markdown-loader")
    .loader("vue-markdown-loader/lib/markdown-compiler")
    .options({
      raw: true,
      preventExtract: true 
    });
};
```

使用

```html
<template>
  <!-- class markdown-body 必须加，否则标签样式会出现问题 -->
  <div class="markdown-body">
    <about />
  </div>
</template>

<script>
  import about from "./about.md";
  // 代码高亮
  import "highlight.js/styles/github.css";
  // 其他元素使用 github 的样式
  import "github-markdown-css";

  export default {
    components: {
      about
    }
  };
</script>
```

> ref
> [在 vue 中显示 markdown（.md)文件](https://blog.csdn.net/weixin_43999753/article/details/109737926)
