(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae7b5ee4"],{8909:function(t,e,a){"use strict";function i(t){return new Promise((e,a)=>{let i=new FileReader;i.readAsDataURL(t),i.onload=t=>{e(t.target.result)}})}function n(t){let e=t.split(","),a=e[0].match(/:(.*?);/)[1],i=atob(e[1]),n=i.length,r=new Uint8Array(n);while(n--)r[n]=i.charCodeAt(n);return new Blob([r],{type:a})}function r(t){var e=null;return void 0!=window.createObjectURL?e=window.createObjectURL(t):void 0!=window.URL?e=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e}function o(t,e){t.addEventListener("paste",(function(t){var a=t.clipboardData,i=window.navigator.userAgent;if(t.clipboardData&&t.clipboardData.items&&!(a.items&&2===a.items.length&&"string"===a.items[0].kind&&"file"===a.items[1].kind&&a.types&&2===a.types.length&&"text/plain"===a.types[0]&&"Files"===a.types[1]&&i.match(/Macintosh/i)&&Number(i.match(/Chrome\/(\d{2})/i)[1])<49))for(var n=0;n<a.items.length;n++){var r=a.items[n];if("file"==r.kind){var o=r.getAsFile();if(0===o.size)return;e(o)}}}),!1)}e["a"]={fileToBase64:i,base64ToBlob:n,getObjectURL:r,pasteImageFromClipboard:o}},af11:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),a("el-input",{staticStyle:{width:"200px","margin-bottom":"20px"},attrs:{id:"text-input",placeholder:"从剪切板粘贴图片"}}),a("div",{staticClass:"target-image"},[a("img",{attrs:{src:t.imageUrl,alt:""}})])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"20px"}},[t._v(" 使用paste事件监听，从剪切板粘贴图片 "),a("a",{staticClass:"link",attrs:{href:"https://github.com/mouday/more-utils.js",target:"_blank"}},[t._v("more-utils")])])}],r=a("8909"),o={name:"",props:[],components:{},data:function(){return{imageUrl:""}},computed:{},methods:{handleImageChange:function(t){console.log(t),this.imageUrl=r["a"].getObjectURL(t)}},created:function(){},mounted:function(){r["a"].pasteImageFromClipboard(document.getElementById("text-input"),this.handleImageChange)}},s=o,c=a("2877"),l=Object(c["a"])(s,i,n,!1,null,"403cae8c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-ae7b5ee4.d5577fc2.js.map