(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aac9143"],{b5b9:function(t,e,r){},dfba:function(t,e,r){"use strict";r("b5b9")},e3de:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[t._m(0),r("div",{staticClass:"image-list"},[r("div",{staticClass:"source-image"},[r("vueCropper",{ref:"cropper",attrs:{img:t.sourceImage,canScale:!0,autoCrop:!0,fixed:!0,centerBox:!0}})],1),r("div",{staticClass:"target-image"},[r("img",{attrs:{src:t.targetUrl,alt:""}})])]),r("div",[r("el-button",{on:{click:function(e){return e.preventDefault(),t.startCrop(e)}}},[t._v("截图")])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-bottom":"20px"}},[t._v(" 使用 "),r("a",{staticClass:"link",attrs:{href:"https://github.com/xyxiao001/vue-cropper",target:"_blank"}},[t._v("vue-cropper")]),t._v(" 进行图片裁剪 ")])}],c=r("7e79"),o=r("8909"),s={name:"",props:[],components:{VueCropper:c["VueCropper"]},data:function(){return{sourceImage:"https://fengyuanchen.github.io/cropperjs/images/picture.jpg",targetUrl:null}},computed:{},methods:{startCrop:function(){var t=this;this.$refs.cropper.getCropBlob((function(e){console.log(e),t.targetUrl=o["a"].getObjectURL(e)}))}},created:function(){}},i=s,p=(r("dfba"),r("2877")),u=Object(p["a"])(i,a,n,!1,null,"3eb2172f",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0aac9143.637c0ef8.js.map