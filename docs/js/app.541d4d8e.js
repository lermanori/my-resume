(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)i=c[u],a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"80586b8b"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),o=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/my-resume/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1b20":function(e,t,r){"use strict";var n=r("ec64"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bb71");r("da64"),r("15f5");n["a"].use(a["a"],{iconfont:"fa"});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[e._v("Ori")]),r("span",{staticClass:"font-weight-light"},[e._v(" Lerman")])]),r("v-spacer")],1),r("v-content",[r("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"white--text wrapper-container"},[r("app-header"),r("v-divider",{attrs:{dark:""}}),r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{md6:"",xs12:""}},[r("app-skills"),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("EDUCATION")]),r("p",[e._v("\n          "+e._s(e.education_text)+"\n        ")]),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("Courses")]),r("ul",e._l(e.courses,function(t,n){return r("li",{key:n},[e._v("\n            "+e._s(t.header)+"\n            "),r("ul",e._l(t.list,function(t,n){return r("li",{key:n},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])}),0)],1),r("v-flex",{staticClass:"white--text",attrs:{md6:"",xs12:""}},[r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("EXPERIENCE")]),r("ul",e._l(e.expiriences,function(t,n){return r("li",{key:n},[r("p",[e._v(e._s(t.text))])])}),0),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("OWN-PROJECTS")]),r("ul",e._l(e.projects,function(t,n){return r("li",{key:n},[r("h4",{staticClass:"title font-weight-thin"},[e._v(e._s(t.header))]),r("p",[e._v(e._s(t.text))])])}),0),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("ABOUT-ME")]),r("p",[e._v("\n        "+e._s(e.about_me_text)+"\n        ")])])],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("SKILLS")]),r("v-container",e._l(e.skills,function(t,n){return r("v-layout",{key:n,attrs:{row:"",wrap:"","justify-space-between":""}},[r("v-flex",{staticClass:"mt-1",attrs:{xs3:""}},[e._v(e._s(t.name))]),r("v-flex",{attrs:{xs9:""}},[r("v-progress-linear",{attrs:{color:t.color,height:"5",value:t.current_percentage}})],1)],1)}),1)],1)},u=[],p={data:function(){return{skills:[{name:"VUE",target_percentage:90,current_percentage:0,color:"green"},{name:"EXPRESS (NODE.JS)",target_percentage:91,current_percentage:0,color:"red"},{name:"ES6-JAVASCRIPT",target_percentage:89,current_percentage:0,color:"pink"},{name:"HTML5",target_percentage:96,current_percentage:0,color:"orange"},{name:"CSS",target_percentage:87,current_percentage:0,color:"cyan"},{name:"MONGODB",target_percentage:87,current_percentage:0,color:"light-green"},{name:"SQL",target_percentage:87,current_percentage:0,color:"blue"},{name:"C# (.NET)",target_percentage:85,current_percentage:0,color:"purple"},{name:"DESIGN PATTERNS",target_percentage:83,current_percentage:0,color:"light-blue"},{name:"GITHUB",target_percentage:95,current_percentage:0,color:"grey"},{name:"HEROKU",target_percentage:78,current_percentage:0,color:"white"}]}},computed:{},mounted:function(){var e=this;setInterval(function(){for(var t=0;t<e.skills.length;t++)e.skills[t].target_percentage>e.skills[t].current_percentage&&(e.skills[t].current_percentage+=1)},50)}},f=p,d=r("2877"),v=r("6544"),g=r.n(v),m=r("a523"),h=r("0e8f"),_=r("a722"),x=r("8e36"),b=Object(d["a"])(f,l,u,!1,null,"5c73f653",null),E=b.exports;g()(b,{VContainer:m["a"],VFlex:h["a"],VLayout:_["a"],VProgressLinear:x["a"]});var O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{"text-xs-center":"",wrap:"","justify-space-between":""}},[r("v-flex",{attrs:{"mb-4":""}},[r("transition",{attrs:{name:"simple-transition",mode:"out-in",appear:"true","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight",duration:400,delay:50}},[r("h1",{staticClass:"display-2 mb-3 resume-head"},[e._v("\n                Ori Lerman\n            ")])]),r("h1",{staticClass:"display-6 font-weight-light mb-3 resume-sub-head"},[e._v("\n            AutoDidact. Developer. Surfer.\n        ")])],1),r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n                        +972523221702\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("call")])],1)],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n                        lermanori\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("fab fa-github")])],1)],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n\n                        lermanori@gmail.com\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("email")])],1)],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n                        lermanori\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("fab fa-linkedin")])],1)],1)],1)],1)],1)},T=[],C=(r("7e6a"),r("8336")),y=r("132d"),S={},A=Object(d["a"])(S,O,T,!1,null,"2eb3720f",null),L=A.exports;g()(A,{VBtn:C["a"],VContainer:m["a"],VFlex:h["a"],VIcon:y["a"],VLayout:_["a"]});var w={data:function(){return{education_text:"The Academic College of Tel Aviv-Yafo 10/2016 – present.                       Major: Computer Science B.Sc.",expiriences:[{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],projects:[{header:"oris project",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{header:"oris project",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{header:"oris project",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],about_me_text:"DEVELOPER FROM TEL AVIV-ISRAEL.\nBOTH FLUENT IN ENGLISH AND HEBREW, LOOKING FOR A JOB AS A FULL-STACK DEVELOPER.\n IM INPENDENT, AUTODIDACT, EAGER TO LEARN ENGENIEER WHO LOVES TO CODE MORE THAN ANYTHING.\nLOOKING FOR A PLACE TO GROW.\n (P.S IM UPDATED WITH ALL THE LATEST TECH THAT REGARDS WEB AND I LOVE TO SURF).",courses:[{header:"PROGRAMING",list:["C","C++","C# (.NET)","ASSEMBLY","OPERATING-SYSTEMS","BASH","SQL"]},{header:"MATH",list:["LINEAR ALGEBRA","CALCULUS"]},{header:"COMPUTER-SCIENCE COURSES",list:["DATA STRUCTURES","ALGORITHMS","COMPUTABILTY","COMPLEXITY"]}]}},components:{"app-skills":E,"app-header":L}},k=w,R=(r("1b20"),r("ce7e")),I=Object(d["a"])(k,c,s,!1,null,"0b5c50ca",null),N=I.exports;g()(I,{VContainer:m["a"],VDivider:R["a"],VFlex:h["a"],VLayout:_["a"]});var V={name:"App",components:{HelloWorld:N},data:function(){return{}}},P=V,j=(r("8f18"),r("7496")),M=r("549c"),D=r("9910"),H=r("71d9"),U=r("2a7f"),G=Object(d["a"])(P,o,i,!1,null,"eec9ae8a",null),B=G.exports;g()(G,{VApp:j["a"],VContent:M["a"],VSpacer:D["a"],VToolbar:H["a"],VToolbarTitle:U["a"]});var F=r("8c4f"),W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("HelloWorld")},J=[],Y={components:{HelloWorld:N}},$=Y,K=Object(d["a"])($,W,J,!1,null,null,null),X=K.exports;n["a"].use(F["a"]);var Q=new F["a"]({routes:[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),q=r("2f62");n["a"].use(q["a"]);var z=new q["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:Q,store:z,render:function(e){return e(B)}}).$mount("#app")},"7e6a":function(e,t,r){"use strict";var n=r("e1d6"),a=r.n(n);a.a},"8f18":function(e,t,r){"use strict";var n=r("90b9"),a=r.n(n);a.a},"90b9":function(e,t,r){},e1d6:function(e,t,r){},ec64:function(e,t,r){}});
//# sourceMappingURL=app.541d4d8e.js.map