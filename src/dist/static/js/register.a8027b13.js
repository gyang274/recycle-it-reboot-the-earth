(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("apps-registration")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","fill-height":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"primary--text text-center",domProps:{textContent:e._s(e.title)}})]),e.signup?[n("v-flex",{attrs:{xs4:"","offset-xs4":""}},[n("br"),n("h3",{staticClass:"primary--text text-center"},[e._v("Direct to sign in view in a second.")])])]:[n("v-flex",{attrs:{xs4:"","offset-xs4":""}},[n("v-text-field",{attrs:{name:"username",label:"Enter Your Username","single-line":"","prepend-icon":"school"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUserSignUp(t)}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("v-flex",{attrs:{xs4:"","offset-xs4":""}},[n("v-text-field",{attrs:{name:"password",label:"Enter Your Password","single-line":"","prepend-icon":"whatshot",type:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUserSignUp(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-flex",{attrs:{xs4:"","offset-xs4":""}},[n("v-text-field",{attrs:{name:"passwordConfirmed",label:"Enter Your Password Again","single-line":"","prepend-icon":"whatshot",type:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUserSignUp(t)}},model:{value:e.passwordConfirmed,callback:function(t){e.passwordConfirmed=t},expression:"passwordConfirmed"}})],1),n("v-flex",{attrs:{xs4:"","offset-xs4":""}},[n("v-btn",{staticClass:"primary white--text",attrs:{block:"",loading:e.loading,disabled:e.loading},nativeOn:{click:function(t){return e.getUserSignUp(t)}}},[n("v-icon",{attrs:{dark:"",large:""},domProps:{innerHTML:e._s("fingerprint")}}),e._v("\n              Sign Up\n          ")],1)],1)],n("v-flex",{attrs:{xs4:"","offset-xs4":""}},[n("apps-messager",{attrs:{message:e.message}})],1)],2)],1)],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("96cf"),n("3b8d")),c=n("bd86"),l=n("2f62"),p=n("3e9c");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d={name:"apps-registration",components:{appsMessager:p["a"]},data:function(){return{title:"Welcome!",signup:!1,username:"",password:"",passwordConfirmed:"",loading:!1,message:{content:"",status:"success",outlined:!0}}},computed:f({},Object(l["c"])({user:"user"})),methods:f({},Object(l["b"])({setUser:"setUser",registration:"registration"}),{getUserSignUp:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.loading=!0,this.registration({name:this.username,password:this.password,passwordConfirmed:this.passwordConfirmed}).then(function(e){return t.username="",t.password="",t.passwordConfirmed="",t.loading=!1,e}).then(function(e){t.title="Welcome Join "+e.rows[0].name+"!",t.signup=!0,setTimeout(function(){t.$router.push({name:"home"})},3e3)}).catch(function(e){t.loading=!1,t.message={content:"Sign up fail: "+e.detail,status:"error",outlined:!0}});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},g=d,m=n("2877"),w=n("6544"),x=n.n(w),v=n("8336"),h=n("a523"),y=n("0e8f"),b=n("132d"),O=n("a722"),k=n("8654"),C=Object(m["a"])(g,a,o,!1,null,"21dec89a",null),j=C.exports;x()(C,{VBtn:v["a"],VContainer:h["a"],VFlex:y["a"],VIcon:b["a"],VLayout:O["a"],VTextField:k["a"]});var U={name:"apps-register",components:{appsRegistration:j}},P=U,_=n("a75b"),E=Object(m["a"])(P,r,s,!1,null,null,null);t["default"]=E.exports;x()(E,{VContent:_["a"]})}}]);
//# sourceMappingURL=register.a8027b13.js.map