(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9946cd2a"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=n[e]=[t,a]});t.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),o=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,r[1](s)}n[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/my-resume/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4229:function(e,t,r){},4599:function(e,t,r){"use strict";var a=r("6337"),n=r.n(a);n.a},"45fe":function(e,t,r){"use strict";var a=r("4229"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("bb71");r("da64"),r("15f5");a["a"].use(n["a"],{iconfont:"fa"});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[e._v("Ori")]),r("span",{staticClass:"font-weight-light"},[e._v(" Lerman")])]),r("v-spacer")],1),r("v-content",[r("router-view")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"white--text wrapper-container"},[r("app-header"),r("v-divider",{attrs:{dark:""}}),r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{md6:"",xs12:""}},[r("app-skills"),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("EDUCATION")]),r("p",[e._v("\n          "+e._s(e.education_text)+"\n        ")]),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("Courses")]),r("ul",e._l(e.courses,function(t,a){return r("li",{key:a},[e._v("\n            "+e._s(t.header)+"\n            "),r("ul",e._l(t.list,function(t,a){return r("li",{key:a},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])}),0)],1),r("v-flex",{staticClass:"white--text",attrs:{md6:"",xs12:""}},[r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("EXPERIENCE")]),r("ul",e._l(e.expiriences,function(t,a){return r("li",{key:a},[r("p",[e._v(e._s(t.text))]),r("a",{attrs:{href:t.url}},[r("v-btn",{attrs:{dark:""}},[e._v(e._s(t.url))])],1)])}),0),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("OWN-PROJECTS")]),r("ul",e._l(e.projects,function(t,a){return r("li",{key:a},[r("h4",{staticClass:"title font-weight-thin"},[e._v(e._s(t.header))]),r("p",[e._v(e._s(t.text))]),r("a",{attrs:{href:t.url}},[r("v-btn",{staticClass:"text-no-wrap",attrs:{dark:""}},[e._v("GOTO PROJECT")])],1)])}),0),r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("ABOUT-ME")]),r("p",[e._v("\n        "+e._s(e.about_me_text)+"\n        ")])])],1)],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("SKILLS")]),r("v-container",e._l(e.skills,function(t,a){return r("v-layout",{key:a,attrs:{row:"",wrap:"","justify-space-between":""}},[r("v-flex",{staticClass:"mt-1",attrs:{xs3:""}},[e._v(e._s(t.name))]),r("v-flex",{attrs:{xs9:""}},[r("v-progress-linear",{attrs:{color:t.color,height:"5",value:t.current_percentage}})],1)],1)}),1)],1)},u=[],p={data:function(){return{skills:[{name:"VUE",target_percentage:90,current_percentage:0,color:"green"},{name:"EXPRESS (NODE.JS)",target_percentage:91,current_percentage:0,color:"red"},{name:"ES6-JAVASCRIPT",target_percentage:89,current_percentage:0,color:"pink"},{name:"HTML5",target_percentage:96,current_percentage:0,color:"orange"},{name:"CSS",target_percentage:87,current_percentage:0,color:"cyan"},{name:"MONGODB",target_percentage:87,current_percentage:0,color:"light-green"},{name:"SQL",target_percentage:87,current_percentage:0,color:"blue"},{name:"C# (.NET)",target_percentage:85,current_percentage:0,color:"purple"},{name:"DESIGN PATTERNS",target_percentage:83,current_percentage:0,color:"light-blue"},{name:"GITHUB",target_percentage:95,current_percentage:0,color:"grey"},{name:"HEROKU",target_percentage:78,current_percentage:0,color:"white"}]}},computed:{},mounted:function(){var e=this;setInterval(function(){for(var t=0;t<e.skills.length;t++)e.skills[t].target_percentage>e.skills[t].current_percentage&&(e.skills[t].current_percentage+=1)},50)}},d=p,f=r("2877"),h=r("6544"),v=r.n(h),g=r("a523"),m=r("0e8f"),E=r("a722"),b=r("8e36"),T=Object(f["a"])(d,c,u,!1,null,"5c73f653",null),_=T.exports;v()(T,{VContainer:g["a"],VFlex:m["a"],VLayout:E["a"],VProgressLinear:b["a"]});var A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{"text-xs-center":"",wrap:"","justify-space-between":""}},[r("v-flex",{attrs:{"mb-4":""}},[r("transition",{attrs:{name:"simple-transition",mode:"out-in",appear:"true","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight",duration:400,delay:50}},[r("h1",{staticClass:"display-2 mb-3 resume-head"},[e._v("\n                Ori Lerman\n            ")])]),r("h1",{staticClass:"display-6 font-weight-light mb-3 resume-sub-head"},[e._v("\n            AutoDidact. Developer. Surfer.\n        ")])],1),r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n                        +972523221702\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("call")])],1)],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n                        lermanori\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("fab fa-github")])],1)],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n\n                        lermanori@gmail.com\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("email")])],1)],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[r("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n                        lermanori\n                        "),r("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("fab fa-linkedin")])],1)],1)],1)],1)],1)},x=[],O=(r("45fe"),r("8336")),C=r("132d"),S={},w=Object(f["a"])(S,A,x,!1,null,"4dbdec97",null),y=w.exports;v()(w,{VBtn:O["a"],VContainer:g["a"],VFlex:m["a"],VIcon:C["a"],VLayout:E["a"]});var k={data:function(){return{education_text:"The Academic College of Tel Aviv-Yafo 10/2016 – present.                       Major: Computer Science B.Sc.",expiriences:[{url:"http://ume.co.il",text:"UME -FREELANCE WORK, IVE BEEN CALLED BY THE STARTUP COMPANY UME TO FINISH,ADD NEW FEATURES AND DEPLOY THEIR PUBLICITY SITE (JQUERY,BOOTSTRAP,HTML,CSS)."},{url:"http://www.michaelfkaufmann.com",text:"MICHAEL F. KAUFMANN - FREELANCE WORK, IVE BEEN REQUESTED TO CREATE A WEBSITE FOR THE AUTHOR MICHAEL F. KAUFMANN AND IVE CREATED A WORDPRESS THEME INTIGRATED WITH VUE, BOOTSTRAP-VUE AND WP-API,THE BACKEND FORM HANDALING AND MALING IS WRITTEN IN PHP."}],projects:[{url:"https://github.com/lermanori/media-connection",header:"Cross Platform TODO application",text:"the app is built with quasar framework which is a platform on top of vue.js who lets you output a cordova app, the application is developed under mevn stack(mongo,express,vue,node) and uses vue router,vuex and axios as well as authentication to google from and taskmanager rest api at the backend,deployed to heroku,tested with mocha and postman"},{url:"https://github.com/lermanori/media-connection",header:"Vue-JS interactive-resume",text:"this website is built with vue,vuetify and is deployed to github pages"},{url:"https://github.com/lermanori/design-patterns.FacebookApp",header:"C# - Facebook-App:",text:" An app that was made for design-patterns course. the app features are creating a desktop dashboard for your Facebook page, and can automate simple Facebook tasks like posting posts and images. 1. The app is implementing the gang of four design patterns. 2.  The app works with the Facebook Api. 3. The app is implementing a setting file that saves user data between uses. Utilizes: C#, Winforms, OOP, gang-of-four design patterns. "},{url:"https://github.com/lermanori/midburnGallery",header:"Vannila-JS - MIDBURN gallery",text:"1. The projects-frontend is designed by p5js library. 2. The project uses ES6-ES7 java-script, 3. All of the components of the gallery where build from scratch . 4. The project is deployed to Herouku. - The project is using node.js as a backend server environment. Utilizes: HTML, CSS, ES6-ES7js, node.js, git, Herouku, p5js. "},{url:"https://github.com/lermanori/Tetris1.0.0.",header:"C++ - Tetris-Console-Game:",text:"An app that was made for C++ course, the app features are object oriented design of a Tetris game that is played in the console. -The app is using most of C++ features of object oriented programming. Utilizes: C++."}],about_me_text:"DEVELOPER FROM TEL AVIV-ISRAEL.\nBOTH FLUENT IN ENGLISH AND HEBREW, LOOKING FOR A JOB AS A FULL-STACK DEVELOPER.\n IM INPENDENT, AUTODIDACT, EAGER TO LEARN ENGENIEER WHO LOVES TO CODE MORE THAN ANYTHING.\nLOOKING FOR A PLACE TO GROW.\n (P.S IM UPDATED WITH ALL THE LATEST TECH THAT REGARDS WEB AND I LOVE TO SURF).",courses:[{header:"PROGRAMING",list:["C","C++","C# (.NET)","ASSEMBLY","OPERATING-SYSTEMS","BASH","SQL"]},{header:"MATH",list:["LINEAR ALGEBRA","CALCULUS"]},{header:"COMPUTER-SCIENCE COURSES",list:["DATA STRUCTURES","ALGORITHMS","COMPUTABILTY","COMPLEXITY"]}]}},components:{"app-skills":_,"app-header":y}},R=k,I=(r("4599"),r("ce7e")),N=Object(f["a"])(R,i,l,!1,null,"7be3a60e",null),L=N.exports;v()(N,{VBtn:O["a"],VContainer:g["a"],VDivider:I["a"],VFlex:m["a"],VLayout:E["a"]});var P={name:"App",components:{HelloWorld:L},data:function(){return{}}},D=P,H=(r("8f18"),r("7496")),j=r("549c"),V=r("9910"),M=r("71d9"),U=r("2a7f"),F=Object(f["a"])(D,o,s,!1,null,"eec9ae8a",null),B=F.exports;v()(F,{VApp:H["a"],VContent:j["a"],VSpacer:V["a"],VToolbar:M["a"],VToolbarTitle:U["a"]});var G=r("8c4f"),W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("HelloWorld")},Y=[],J={components:{HelloWorld:L}},K=J,$=Object(f["a"])(K,W,Y,!1,null,null,null),Q=$.exports;a["a"].use(G["a"]);var z=new G["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),X=r("2f62");a["a"].use(X["a"]);var q=new X["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:z,store:q,render:function(e){return e(B)}}).$mount("#app")},6337:function(e,t,r){},"8f18":function(e,t,r){"use strict";var a=r("90b9"),n=r.n(a);n.a},"90b9":function(e,t,r){}});
//# sourceMappingURL=app.d3b9f132.js.map