(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6076d168"],{4677:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"markdown-body"},[a("README")],1),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入文字",size:"mini",clearable:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"mini"},on:{click:t.createImage}},[t._v("截图")]),a("div",{staticStyle:{height:"20px"}}),a("div",{ref:"image",staticClass:"image"},[t._v(" "+t._s(t.text)+" ")]),a("div",{staticStyle:{height:"20px"}}),t.dataUrl?a("img",{attrs:{src:t.dataUrl,alt:""}}):t._e()],1)},n=[],r=a("1da1"),l=(a("96cf"),a("e774")),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("html-to-image")]),a("ul",[a("li",[t._v("github: "),a("a",{attrs:{href:"https://github.com/bubkoo/html-to-image",target:"_blank"}},[t._v("https://github.com/bubkoo/html-to-image")])]),a("li",[t._v("npmjs: "),a("a",{attrs:{href:"https://www.npmjs.com/package/html-to-image",target:"_blank"}},[t._v("https://www.npmjs.com/package/html-to-image")])])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("npm i html-to-image -S\n")])]),a("p",[t._v("实现代码")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { toPng } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"html-to-image"')]),t._v(";\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" node = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"my-node"')]),t._v(");\n\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("async")]),t._v(" (")]),t._v(") =>")]),t._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" dataUrl = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(" toPng(node);\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// console.log(dataUrl);")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// data:image/png;base64,iVBORw0...")]),t._v("\n})();\n")])])])}],o=a("2877"),p={},m=Object(o["a"])(p,c,i,!1,null,null,null),v=m.exports,u={name:"index",props:{},components:{README:v},data:function(){return{text:"默认的文字",dataUrl:null}},computed:{},methods:{createImage:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])(t.$refs.image);case 2:t.dataUrl=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},created:function(){}},h=u,_=(a("9da5"),Object(o["a"])(h,s,n,!1,null,"8169bfe0",null));e["default"]=_.exports},"5a80":function(t,e,a){},"9da5":function(t,e,a){"use strict";a("5a80")}}]);
//# sourceMappingURL=chunk-6076d168.0fdfde28.js.map