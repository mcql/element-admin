webpackJsonp([1],{Ct85:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("KQ6f"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App"},o,!1,function(e){n("OQ1F")},null,null).exports,i=n("KGCO"),s={mounted:function(){var e=document.getElementById("mycanvas"),t=e.getContext("2d"),n=window.innerWidth,a=window.innerHeight;e.width=n,e.height=a;for(var o=100,r=[],i=0;i<o;i++)r.push({x:Math.random()*n,y:Math.random()*a,r:10*Math.random()+1});setInterval(function(){t.clearRect(0,0,n,a),t.fillStyle="white",t.beginPath();for(var e=0;e<o;e++){var i=r[e];t.moveTo(i.x,i.y),t.arc(i.x,i.y,i.r,0,2*Math.PI,!1)}t.fill(),function(){for(var e=0;e<o;e++){var t=r[e];t.y+=2*Math.random()+1,t.y>a&&(t.y=0),t.x+=2*Math.random()+1,t.x>n&&(t.x=0)}}(),t.closePath()},50)},data:function(){return{username:"",userpwd:"",statea:!0}},methods:{login:function(){var e=this;this.statea=!1,"ming"==this.username&&"123123"==this.userpwd?this.$router.push({path:"/index"}):this.$alert("用户名或密码错误","Warning",{confirmButtonText:"关闭",callback:function(t){e.statea=!0}})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("canvas",{attrs:{id:"mycanvas"}},[e._v("您的浏览器不支持canvas画布")]),e._v(" "),n("div",{staticClass:"login_two_part"},[n("div",{class:e.statea?"login_form":"login_forma addonload"},[n("h1",[e._v("Login")]),e._v(" "),n("div",{staticClass:"login_info"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userpwd,expression:"userpwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.userpwd},on:{input:function(t){t.target.composing||(e.userpwd=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"login_btn",on:{click:e.login}},[e._v("登录")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.statea,expression:"!statea"}],staticClass:"loading"},[n("i",{staticClass:"el-icon-loading"}),e._v(" "),n("p",[e._v("正在登录")])])])])},staticRenderFns:[]};var c=n("C7Lr")(s,l,!1,function(e){n("Ct85")},"data-v-0d2b6752",null).exports,u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"content"},[n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",[e._v("Element")])]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-1",route:"/index"}},[e._v("导航栏介绍")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],1),e._v(" "),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),e._v(" "),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[e._v("选项4")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],2)],2),e._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航二")])]),e._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航三")])])],1)],1),e._v(" "),n("el-col",{attrs:{span:20}},[n("router-view")],1)],1)},staticRenderFns:[]};var d=n("C7Lr")({},u,!1,function(e){n("pOd6")},null,null).exports,m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h5",[this._v("Test-Table")]),this._v(" "),t("el-table",{staticStyle:{width:"95%",margin:"0 auto"},attrs:{data:this.tableData,border:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"参数",align:"center"}}),this._v(" "),t("el-table-column",{attrs:{prop:"introduct",label:"说明",align:"center"}}),this._v(" "),t("el-table-column",{attrs:{prop:"type",label:"类型",align:"center"}}),this._v(" "),t("el-table-column",{attrs:{prop:"choose",label:"可选值",align:"center"}}),this._v(" "),t("el-table-column",{attrs:{prop:"recommend",label:"默认值",align:"center"}})],1)],1)},staticRenderFns:[]};var v=n("C7Lr")({data:function(){return{tableData:[{name:"mode",introduct:"模式",type:"string",choose:"horizontal / vertical",recommend:"vertical"},{name:"collapse",introduct:"是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）",type:"boolean",choose:"—",recommend:"false"},{name:"background-color",introduct:"菜单的背景色（仅支持 hex 格式）",type:"string",choose:"—",recommend:"#ffffff"},{name:"text-color",introduct:"菜单的文字颜色（仅支持 hex 格式）",type:"string",choose:"—",recommend:"#303133"},{name:"active-text-color",introduct:"当前激活菜单的文字颜色（仅支持 hex 格式）",type:"string",choose:"—",recommend:"#409EFF"},{name:"default-active",introduct:"当前激活菜单的 index",type:"string",choose:"—",recommend:"—"},{name:"default-openeds",introduct:"当前打开的 sub-menu 的 index 的数组",type:"Array",choose:"—",recommend:"—"},{name:"unique-opened",introduct:"是否只保持一个子菜单的展开",type:"boolean",choose:"—",recommend:"false"},{name:"menu-trigger",introduct:"子菜单打开的触发方式(只在 mode 为 horizontal 时有效)",type:"string",choose:"hover / click",recommend:"hover"},{name:"router",introduct:"是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转",type:"boolean",choose:"—",recommend:"false"},{name:"collapse-transition",introduct:"是否开启折叠动画",type:"boolean",choose:"—",recommend:"true"}],tableData1:[{name:"open",introduct:"展开指定的 sub-menu",choose:"index: 需要打开的 sub-menu 的 index"},{name:"close",introduct:"收起指定的 sub-menu",choose:"index: 需要收起的 sub-menu 的 index"}]}}},m,!1,function(e){n("q/CE")},"data-v-02c26d9c",null).exports;a.default.use(i.a);var p=new i.a({routes:[{path:"/",name:"Login",component:c},{path:"/index",name:"Index",component:d,children:[{path:"/",name:"Nav",component:v}]}]}),h=n("R2wu"),f=n.n(h);n("XEXE"),n("erWL");a.default.use(f.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:p,components:{App:r},template:"<App/>"})},OQ1F:function(e,t){},XEXE:function(e,t){},erWL:function(e,t){},pOd6:function(e,t){},"q/CE":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a1fe1d48da3c0486866b.js.map