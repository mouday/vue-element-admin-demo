(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d3c7"],{f744:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"markdown-body"},[s("README")],1),s("div",{staticStyle:{"margin-bottom":"20px",width:"300px"}},[s("el-input",{attrs:{type:"text"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.message,expression:"message",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{type:"button"}},[e._v("指令复制")]),s("el-button",{attrs:{type:"button"},on:{click:e.doCopy}},[e._v("方法复制")])],1)},o=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("vue-clipboard2")]),s("ul",[s("li",[e._v("文档："),s("a",{attrs:{href:"https://www.npmjs.com/package/vue-clipboard2",target:"_blank"}},[e._v("https://www.npmjs.com/package/vue-clipboard2")])]),s("li",[e._v("github: "),s("a",{attrs:{href:"https://github.com/Inndy/vue-clipboard2",target:"_blank"}},[e._v("https://github.com/Inndy/vue-clipboard2")])])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("npm install --save vue-clipboard2\n")])])])}],c=s("2877"),i={},p=Object(c["a"])(i,r,n,!1,null,null,null),l=p.exports,u={name:"",props:[],components:{README:l},data:function(){return{message:"Copy These Text"}},computed:{},methods:{onCopy:function(e){this.$message.success("You just copied: "+e.text)},onError:function(e){this.$message.error("Failed to copy texts")},doCopy:function(){var e=this;this.$copyText(this.message).then((function(t){e.$message.success("You just copied: "+t.text)}),(function(t){e.$message.error("Failed to copy texts")}))}},created:function(){}},d=u,m=Object(c["a"])(d,a,o,!1,null,"0d8c846a",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22d3c7.e1a04639.js.map