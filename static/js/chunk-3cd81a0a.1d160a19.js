(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cd81a0a"],{"033c":function(e,t,n){},2565:function(e,t,n){},"3e2e":function(e,t,n){},5789:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"配置文件",name:"config"}},[n("JsonEditor",{on:{change:e.handleConfigChange}})],1),n("el-tab-pane",{attrs:{label:"前端代码",name:"front-end",lazy:""}},[n("CodeTree",{attrs:{data:e.frontEndConfig,config:e.config,mode:"text/x-vue"}})],1),n("el-tab-pane",{attrs:{label:"后端代码",name:"back-end",lazy:""}},[n("CodeTree",{attrs:{data:e.backEndConfig,config:e.config,mode:"text/x-php"}})],1)],1)],1)},o=[],i=n("1da1"),r=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("AddFile",{on:{success:e.handleAddSuccess}}),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"mini",type:"primary"},on:{click:e.handleSaveClick}},[n("i",{staticClass:"el-icon-tickets"}),e._v(" 保 存 ")])],1),n("div",{staticClass:"code-tree-container",staticStyle:{"margin-top":"20px"}},[n("ContentsTree",{staticClass:"code-tree",attrs:{data:e.data,currentNodeKey:e.currentNodeKey,showDelete:""},on:{"update:currentNodeKey":function(t){e.currentNodeKey=t},"update:current-node-key":function(t){e.currentNodeKey=t},change:e.handleContentsChange,delete:e.handleContentsDelete}}),n("CodeEditor",{staticClass:"code-content",attrs:{height:"auto"},on:{"on-change":e.handleChange},model:{value:e.config,callback:function(t){e.config=t},expression:"config"}})],1)])}),c=[],l=n("8ea8"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.visible=!0}}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 新 建")]),n("el-dialog",{attrs:{title:"新建配置",visible:e.visible,width:"300px",center:""},on:{"update:visible":function(t){e.visible=t},close:e.handleClose}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"mini"}},[n("el-form-item",{attrs:{label:"文件名"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleAdd}},[e._v("确 定")])],1)],1)],1)},u=[],d=(n("b0c0"),n("d81d"),n("c740"),n("a434"),n("c952")),f=n("afe2");function h(e){return console.log(Object(d["pascal"])(e)),Object(d["pascal"])(e)}var m="/vue-element-admin-demo/templates",p=new f.Environment(new f.WebLoader(m)),g={name:"article",props:[{prop:"title",type:"string",label:"标题"}]};function v(){return JSON.parse(localStorage.getItem("schema2code.contents"))||[]}function b(e){return localStorage.setItem("schema2code.contents",JSON.stringify(e))}function C(e){var t=v(),n=t.map((function(e){e.value})),a=Math.max(n)+1;t.push({label:"".concat(e,".json"),value:a}),b(t);var o=JSON.parse(JSON.stringify(g));return o.name=e,N(a,JSON.stringify(o)),a}function y(e){var t=v(),n=t.findIndex((function(t){return t.value==e}));n>-1&&t.splice(n,1),b(t)}function k(e){var t=localStorage.getItem("schema2code-".concat(e))||"{}";return JSON.stringify(JSON.parse(t),null,4)}function N(e,t){return localStorage.setItem("schema2code-".concat(e),t)}var x={name:"AddFile",props:[],components:{},data:function(){return{visible:!1,form:{name:""}}},computed:{},methods:{getData:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},handleClose:function(){this.$refs.form.resetFields()},handleAdd:function(){var e=C(this.form.name);this.visible=!1,this.$emit("success",e)}},created:function(){this.getData()}},S=x,w=n("2877"),O=Object(w["a"])(S,s,u,!1,null,"a4d6b532",null),_=O.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tree",{attrs:{data:e.data,"node-key":"value","highlight-current":"","default-expand-all":"","expand-on-click-node":!1,props:e.defaultProps,"current-node-key":e.currentNodeKey_},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,o=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[e._v(e._s(a.label))]),e.showDelete?n("span",[n("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.$emit("delete",o)}}},[n("el-button",{attrs:{slot:"reference",type:"text",size:"mini"},slot:"reference"},[n("i",{staticClass:"el-icon-delete"})])],1)],1):e._e()])}}])})},j=[],K=(n("a9e3"),{name:"index",props:{data:{type:Array},currentNodeKey:{type:String|Number},showDelete:{type:Boolean}},components:{},data:function(){return{defaultProps:{children:"children",label:"label"}}},computed:{currentNodeKey_:{get:function(){return this.currentNodeKey},set:function(e){this.$emit("update:currentNodeKey",e)}}},methods:{getData:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},handleNodeClick:function(e){var t=null;console.log("handleNodeClick",e),t=e.value?e:e.children[0],this.currentNodeKey_=t.value,this.$emit("change",t)}},created:function(){this.data&&this.data.length>0&&this.handleNodeClick(this.data[0])}}),E=K,$=(n("b140"),Object(w["a"])(E,D,j,!1,null,"3763bfa0",null)),J=$.exports,R={name:"",props:{},components:{CodeEditor:l["CodeEditor"],AddFile:_,ContentsTree:J},data:function(){return{data:[],config:null,currentNodeKey:null,cmOptions:{tabSize:4,mode:"application/json",theme:"default",lineNumbers:!0,line:!0}}},computed:{},methods:{getData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("getData",e),t.currentNodeKey=e,t.config=k(e);case 3:case"end":return n.stop()}}),n)})))()},handleChange:function(e){this.$emit("change",e)},handleContentsChange:function(e){this.getData(e.value)},handleSaveClick:function(){N(this.currentNodeKey,this.config),this.$message.success("已保存")},handleAddSuccess:function(e){this.data=v(),this.getData(e)},handleContentsDelete:function(e){console.log(e),y(e.value),this.initData()},initData:function(){this.data=v(),this.data&&this.data.length>0?this.getData(this.data[0].value):this.getData()}},created:function(){this.initData()}},z=R,A=(n("d370"),Object(w["a"])(z,r,c,!1,null,"408141ad",null)),T=A.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("codemirror",{attrs:{value:e.value_,options:e.cmOptions}})},F=[],P=n("8f94"),W=(n("693d8"),n("44d5"),n("a7be"),{name:"Schema2Code",props:{value:{type:String},mode:{type:String,default:"text/x-vue"}},components:{codemirror:P["codemirror"]},data:function(){return{cmOptions:{tabSize:4,mode:this.mode,theme:"default",lineNumbers:!0,line:!0,lineWrapping:!0}}},computed:{value_:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}}},methods:{getData:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},created:function(){}}),B=W,L=(n("f457"),Object(w["a"])(B,I,F,!1,null,null,null)),M=L.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-tree-container"},[n("ContentsTree",{staticClass:"code-tree",attrs:{data:e.data,currentNodeKey:e.currentNodeKey},on:{"update:currentNodeKey":function(t){e.currentNodeKey=t},"update:current-node-key":function(t){e.currentNodeKey=t},change:e.handleContentsChange}}),n("div",{staticClass:"code-content"},[n("Schema2Code",{attrs:{value:e.code,mode:e.mode}})],1)],1)},G=[],H=n("5530"),Q={name:"index",props:{config:{type:String},data:{type:Array},mode:{type:String,default:"text/x-vue"}},components:{Schema2Code:M,ContentsTree:J},data:function(){return{code:"",checkedKeys:[],currentNodeKey:"",defaultProps:{children:"children",label:"label"}}},computed:{},methods:{getData:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},handleContentsChange:function(e){console.log(this.config);var t=null;t=e.value?e.value:e.children[0].value;var n=JSON.parse(this.config);this.code=p.render(t,{config:Object(H["a"])(Object(H["a"])({},n),{},{pascalName:h(n.name)})})}},created:function(){}},U=Q,V=(n("a7a6"),Object(w["a"])(U,q,G,!1,null,"5d795500",null)),X=V.exports,Y=[{label:"list.vue",children:[{label:"index.vue",value:"list.njk"},{label:"DataTable.vue",value:"DataTable.njk"}]},{label:"edit.vue",children:[{label:"edit.vue",value:"edit.njk"},{label:"dialog-edit.vue",value:"dialog-edit.njk"}]}],Z=[{label:"Controller.php",value:"Controller.php"},{label:"Service.php",value:"Service.php"}],ee={name:"index",props:[],components:{JsonEditor:T,Schema2Code:M,CodeTree:X},data:function(){return{frontEndConfig:Y,backEndConfig:Z,activeName:"config",code:"",config:""}},computed:{},methods:{getData:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},handleChange:function(e){this.code=e},handleConfigChange:function(e){this.config=e},handleClick:function(e,t){console.log(e,t)}},created:function(){this.getData()}},te=ee,ne=Object(w["a"])(te,a,o,!1,null,"0d97d9f5",null);t["default"]=ne.exports},a061:function(e,t,n){},a7a6:function(e,t,n){"use strict";n("2565")},b140:function(e,t,n){"use strict";n("a061")},d370:function(e,t,n){"use strict";n("3e2e")},f457:function(e,t,n){"use strict";n("033c")}}]);
//# sourceMappingURL=chunk-3cd81a0a.1d160a19.js.map