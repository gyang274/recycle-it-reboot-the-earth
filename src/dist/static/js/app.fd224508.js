(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return c.p+"static/js/"+({manager:"manager",readme:"readme",recycler:"recycler",register:"register"}[e]||e)+"."+{manager:"1bbd6af5",readme:"4f19320e",recycler:"89f5f7c0",register:"cb1b58ae"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={manager:1,recycler:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="static/css/"+({manager:"manager",readme:"readme",recycler:"recycler",register:"register"}[e]||e)+"."+{manager:"147d3390",readme:"31d6cfe0",recycler:"d68b582b",register:"31d6cfe0"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}s[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"17eb":function(e,t,r){e.exports=r.p+"static/img/ocean.991362f3.jpg"},"32e3":function(e,t,r){"use strict";var n=r("a1bf"),a=r.n(n);a.a},"3e9c":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-flex",{attrs:{xs12:""}},[r("v-alert",{attrs:{dismissible:"",icon:e.message.icon,type:e.message.status,outlined:e.message.outlined},model:{value:e.showMessage,callback:function(t){e.showMessage=t},expression:"showMessage"}},[e._v("\n    "+e._s(e.message.content)+"\n  ")])],1)},a=[],s={name:"Messager",props:{message:{type:Object,default:function(){return{icon:"",content:"",status:"success",outlined:!1}}},showMessageStatusSuccess:{type:Boolean,default:!0}},data:function(){return{}},computed:{showMessage:{get:function(){return""!==this.message.content&&(this.showMessageStatusSuccess||"success"!==this.message.status)},set:function(e){}}},created:function(){}},o=s,i=r("2877"),c=r("6544"),u=r.n(c),l=r("0798"),p=r("0e8f"),f=Object(i["a"])(o,n,a,!1,null,"ba6efdce",null);t["a"]=f.exports;u()(f,{VAlert:l["a"],VFlex:p["a"]})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{light:""}},[r("apps-header"),r("router-view"),r("apps-footer")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{"max-height":"64px"}},[r("span",{staticClass:"black--text",staticStyle:{"font-family":"Vampiro One","font-size":"1.414rem"},domProps:{textContent:e._s(e.title)}}),r("v-spacer"),e.signin?[r("v-flex",{attrs:{xs1:""}},[r("router-link",{attrs:{to:"/recycler"}},[r("v-chip",[r("v-icon",{staticClass:"grey--text"},[e._v("mdi-recycle")])],1),r("strong",{staticClass:"black--text"},[e._v(" Recycler")])],1)],1),r("v-flex",{attrs:{xs1:""}},[r("router-link",{attrs:{to:"/manager"}},[r("v-chip",[r("v-icon",{staticClass:"grey--text"},[e._v("mdi-school")])],1),r("strong",{staticClass:"black--text"},[e._v(" Manager")])],1)],1),r("v-flex",{attrs:{xs1:""}},[r("v-btn",{attrs:{text:""},nativeOn:{click:function(t){return e.signOut(t)}}},[r("v-chip",[r("v-icon",{staticClass:"grey--text"},[e._v("mdi-fire")])],1),r("strong",{staticClass:"black--text"},[e._v(" Sign Out")])],1)],1)]:[r("v-flex",{attrs:{xs1:""}},[r("router-link",{attrs:{to:"/"}},[r("v-chip",[r("v-icon",{staticClass:"grey--text"},[e._v("mdi-school")])],1),r("strong",{staticClass:"black--text"},[e._v(" Home")])],1)],1),r("v-flex",{attrs:{xs1:""}},[r("router-link",{attrs:{to:"/register"}},[r("v-chip",[r("v-icon",{staticClass:"grey--text"},[e._v("mdi-fire")])],1),r("strong",{staticClass:"black--text"},[e._v(" Register")])],1)],1)],r("v-flex",{attrs:{xs1:""}},[r("router-link",{attrs:{to:"/readme"}},[r("v-chip",[r("v-icon",{staticClass:"grey--text"},[e._v("mdi-fingerprint")])],1),r("strong",{staticClass:"black--text"},[e._v(" Readme")])],1)],1)],2)},i=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),u=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var f={name:"apps-header",data:function(){return{title:"Recycle Rally!"}},computed:p({},Object(u["c"])({user:"user"}),{signin:function(){return""!==this.user.name}}),methods:p({},Object(u["b"])({signOut:"signOut"}))},m=f,d=(r("32e3"),r("2877")),g=r("6544"),h=r.n(g),v=r("40dc"),b=r("8336"),w=r("cc20"),y=r("0e8f"),x=r("132d"),O=r("2fa4"),j=Object(d["a"])(m,o,i,!1,null,"73d3345f",null),k=j.exports;h()(j,{VAppBar:v["a"],VBtn:b["a"],VChip:w["a"],VFlex:y["a"],VIcon:x["a"],VSpacer:O["a"]});var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{fixed:""}},[r("span",[e._v("\n    © 2019 Guang Yang\n    ")])])},P=[],R={name:"apps-footer"},S=R,C=r("553a"),E=Object(d["a"])(S,_,P,!1,null,"321d9c4f",null),U=E.exports;h()(E,{VFooter:C["a"]});var I={name:"app",components:{appsHeader:k,appsFooter:U},data:function(){return{}}},F=I,D=r("7496"),V=Object(d["a"])(F,a,s,!1,null,null,null),L=V.exports;h()(V,{VApp:D["a"]});var A=r("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",{style:"\n    background-image: url("+r("17eb")+");\n    background-size: cover; \n  "},[n("apps-authentication")],1)},T=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":"","fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("h2",{staticClass:"primary--text text-center",domProps:{textContent:e._s(e.title)}})]),e.signin?[r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("br"),r("h3",{staticClass:"primary--text text-center"},[e._v("Direct to manager view in a second.")])])]:[r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("v-text-field",{attrs:{name:"username",label:"Enter Your Username","single-line":"","prepend-icon":"mdi-school"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUserSignIn(t)}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("v-text-field",{attrs:{name:"password",label:"Enter Your Password","single-line":"","prepend-icon":"mdi-fire",type:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUserSignIn(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("v-btn",{staticClass:"primary white--text",attrs:{block:"",loading:e.loading,disabled:e.loading},nativeOn:{click:function(t){return e.getUserSignIn(t)}}},[r("v-icon",{attrs:{dark:"",large:""},domProps:{innerHTML:e._s("mdi-fingerprint")}}),e._v("\n              Sign In\n          ")],1)],1)],r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("apps-messager",{attrs:{message:e.message}})],1)],2)],1)],1)},$=[],B=(r("96cf"),r("3b8d")),J=r("3e9c");function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Y={name:"apps-authentication",components:{appsMessager:J["a"]},data:function(){return{title:"Welcome!",signin:!1,username:"",password:"",loading:!1,message:{content:"",status:"success",outlined:!0}}},computed:W({},Object(u["c"])({user:"user"})),methods:W({},Object(u["b"])({setUser:"setUser",authenticate:"authenticate",updateProperty:"updateProperty"}),{getUserSignIn:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.loading=!0,this.authenticate({name:this.username,password:this.password}).then(function(e){return t.username="",t.password="",t.loading=!1,t.setUser(e)}).then(function(e){t.title="Welcome Back "+t.user.name+"!",t.signin=!0,t.updateProperty({name:t.user.name,last_login:(new Date).toJSON()}),setTimeout(function(){t.$router.push({name:"manager"})},3e3)}).catch(function(e){t.loading=!1,t.message={content:"Sign in fail: "+e,status:"error",outlined:!0}});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},q=Y,z=r("a523"),G=r("a722"),K=r("8654"),Q=Object(d["a"])(q,N,$,!1,null,"531c42f5",null),X=Q.exports;h()(Q,{VBtn:b["a"],VContainer:z["a"],VFlex:y["a"],VIcon:x["a"],VLayout:G["a"],VTextField:K["a"]});var Z={name:"apps-home",components:{appsAuthentication:X}},ee=Z,te=r("a75b"),re=Object(d["a"])(ee,M,T,!1,null,null,null),ne=re.exports;h()(re,{VContent:te["a"]}),n["a"].use(A["a"]);var ae=new A["a"]({routes:[{path:"/",name:"home",component:ne},{path:"/recycler",name:"recycler",component:function(){return r.e("recycler").then(r.bind(null,"f87c"))}},{path:"/manager",name:"manager",component:function(){return r.e("manager").then(r.bind(null,"1692"))}},{path:"/register",name:"register",component:function(){return r.e("register").then(r.bind(null,"73cf"))}},{path:"/readme",name:"readme",component:function(){return r.e("readme").then(r.bind(null,"ffd4"))}}]}),se=r("0e44"),oe=(r("4917"),r("bc3a")),ie=r.n(oe),ce={state:function(){var e="https://cors-anywhere.herokuapp.com/";return{cors_engine:e}},getters:{cors_engine:function(e,t){return e.cors_engine}},mutations:{},actions:{getImageb64FromImageURL:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){ie.a.get(r,{responseType:"blob"}).then(function(t){var r=new FileReader;r.readAsDataURL(t.data),r.onloadend=function(){e(r.result)}}).catch(function(e){t(new Error("getImageb64FromImageURL (imageURL) fail!"+e))})}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setImageURLWithCORS:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("setImageURLWithCORS (imageURL)",r),e.abrupt("return",new Promise(function(e,n){null!==r.match(/\.(jpeg|jpg|png)$/)?e(t.state.cors_engine+r):null!==r.match()?e(t.state.cors_engine+r):n(new Error("setImageURL (imageURL) fail!"))}));case 2:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),getImageb64FromImageFile:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){try{var n=new FileReader;n.readAsDataURL(r),n.onloadend=function(){e(n.result)}}catch(a){t(new Error("getImageb64FromImageFile (file) fail!"+a))}}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),setImageFileFromDisk:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){r?e(r):t(new Error("setImageFileFromDisk (event) fail!"))}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}},ue=r("768b"),le=(r("ffc1"),{state:function(){var e={name:"",image:"",coins:-1,score:-1,title:"",stats:[0,0,0],achievements:[],last_login:"",created_on:""};return{userDefault:e,user:JSON.parse(JSON.stringify(e))}},getters:{user:function(e,t){return e.user}},mutations:{setUser:function(e,t){e.user=t},setUserAttr:function(e,t){for(var r=0,n=Object.entries(t);r<n.length;r++){var a=Object(ue["a"])(n[r],2),s=a[0],o=a[1];e.user[s]=o}}},actions:{setUser:function(e,t){e.commit("setUser",t)},setUserAttr:function(e,t){e.commit("setUserAttr",t)},signOut:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.commit("setUser",JSON.parse(JSON.stringify(t.state.userDefault))),ae.push({name:"home"});case 2:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),authenticate:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){ie.a.post("/api/v1/users/authenticate",{name:r.name,password:r.password}).then(function(t){e(t.data)}).catch(function(e){t(e.response.data)})}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),registration:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){r.password.length<8?t("password must have at least 8 characters!"):r.password!==r.passwordConfirmed?t("password must match!"):ie.a.post("/api/v1/users/registration",{name:r.name,password:r.password}).then(function(t){e(t.data)}).catch(function(e){t(e.response.data)})}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),updatePassword:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){r.password.length<8?t("password must have at least 8 characters!"):r.password!==r.passwordConfirmed?t("password must match!"):ie.a.post("/api/v1/users/updatePassword",{name:r.name,password:r.password}).then(function(t){e(t.data)}).catch(function(e){t(e.response.data)})}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),updateProperty:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){ie.a.post("/api/v1/users/updateProperty",r).then(function(t){e(t.data)}).catch(function(e){t(e.response.data)})}));case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}});n["a"].use(u["a"]);var pe=new u["a"].Store({modules:{impr:ce,user:le},state:function(){},plugins:[Object(se["a"])({paths:["user.user"],storage:window.sessionStorage})],getters:{},mutations:{},actions:{}}),fe=r("f309");n["a"].use(fe["a"]);var me=new fe["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#7c4dff",secondary:"#ff6e40",accent:"#651fff",error:"#ff3d00",info:"#2196f3",success:"#4caf50",warning:"#ffc107"}}},icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:ae,store:pe,vuetify:me,render:function(e){return e(L)}}).$mount("#app")},a1bf:function(e,t,r){}});
//# sourceMappingURL=app.fd224508.js.map