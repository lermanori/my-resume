(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ea9fde3f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,r){a=n[e]=[t,r]});t.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),o=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,a[1](s)}n[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/my-resume/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0112":function(e,t,a){"use strict";var r=a("8769"),n=a.n(r);n.a},"37ea":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64"),a("15f5");r["a"].use(n["a"],{iconfont:"fa"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Ori")]),a("span",{staticClass:"font-weight-light"},[e._v(" Lerman")])]),a("v-spacer")],1),a("v-content",[a("router-view")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"white--text wrapper-container"},[a("app-header"),a("v-divider",{attrs:{dark:""}}),a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{md5:"",xs12:""}},[a("app-skills"),a("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("EDUCATION")]),a("p",[a("pre",[e._v(e._s(e.education_text))])]),a("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("Courses")]),a("ul",e._l(e.courses,function(t,r){return a("li",{key:r},[e._v("\n            "+e._s(t.header)+"\n            "),a("ul",e._l(t.list,function(t,r){return a("li",{key:r},[e._v(e._s(t))])}),0)])}),0),a("h1",{staticClass:"display-5 text-center font-weight-thin mt-4"},[e._v("ABOUT-ME")]),a("p",[e._v(e._s(e.about_me_text))])],1),a("v-flex",{staticClass:"white--text",attrs:{md5:"",xs12:""}},[a("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("EXPERIENCE")]),a("ul",e._l(e.expiriences,function(t,r){return a("li",{key:r},[a("div",{},[a("h4",{staticClass:"title font-weight-thin"},[e._v(e._s(t.header))]),a("p",[e._v(e._s(t.text))]),a("a",{attrs:{href:t.url}},[a("v-btn",{attrs:{dark:""}},[e._v("GOTO WEBSITE")])],1)])])}),0),a("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("OWN-PROJECTS")]),a("ul",e._l(e.projects,function(t,r){return a("li",{key:r},[a("div",{},[a("h4",{staticClass:"title font-weight-thin"},[e._v(e._s(t.header))]),a("p",[e._v(e._s(t.text))]),a("a",{attrs:{href:t.url}},[a("v-btn",{staticClass:"text-no-wrap",attrs:{dark:""}},[e._v("GOTO PROJECT")])],1)])])}),0)])],1)],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"display-5 text-center font-weight-thin"},[e._v("SKILLS")]),a("v-container",e._l(e.skills,function(t,r){return a("v-layout",{key:r,attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{staticClass:"mt-1",attrs:{xs3:""}},[e._v(e._s(t.name))]),a("v-flex",{attrs:{xs9:""}},[a("v-progress-linear",{attrs:{color:t.color,height:"5",value:t.current_percentage}})],1)],1)}),1)],1)},u=[],p={data:function(){return{skills:[{name:"VUE",target_percentage:90,current_percentage:0,color:"green"},{name:"EXPRESS (NODE.JS)",target_percentage:91,current_percentage:0,color:"red"},{name:"ES6-JAVASCRIPT",target_percentage:89,current_percentage:0,color:"pink"},{name:"HTML5",target_percentage:96,current_percentage:0,color:"orange"},{name:"CSS",target_percentage:87,current_percentage:0,color:"cyan"},{name:"MONGODB",target_percentage:87,current_percentage:0,color:"light-green"},{name:"SQL",target_percentage:87,current_percentage:0,color:"blue"},{name:"C# (.NET)",target_percentage:85,current_percentage:0,color:"purple"},{name:"DESIGN PATTERNS",target_percentage:83,current_percentage:0,color:"light-blue"},{name:"GITHUB",target_percentage:95,current_percentage:0,color:"grey"},{name:"HEROKU",target_percentage:78,current_percentage:0,color:"white"},{name:"HASKELL",target_percentage:60,current_percentage:0,color:"#E1BEE7"}]}},computed:{},mounted:function(){var e=this;setInterval(function(){for(var t=0;t<e.skills.length;t++)e.skills[t].target_percentage>e.skills[t].current_percentage&&(e.skills[t].current_percentage+=1)},50)}},d=p,h=a("2877"),f=a("6544"),v=a.n(f),g=a("a523"),m=a("0e8f"),b=a("a722"),_=a("8e36"),x=Object(h["a"])(d,c,u,!1,null,"34875100",null),w=x.exports;v()(x,{VContainer:g["a"],VFlex:m["a"],VLayout:b["a"],VProgressLinear:_["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"text-xs-center":"",wrap:"","justify-space-between":""}},[a("v-flex",[a("transition",{attrs:{name:"simple-transition",mode:"out-in",appear:"true","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight",duration:400,delay:50}},[a("h1",{staticClass:"display-2 mb-3 text-center resume-head"},[e._v("\n        Ori Lerman\n      ")])]),a("h1",{staticClass:"display-6 font-weight-light mb-3 resume-sub-head"},[e._v("\n      AutoDidact. Developer. Surfer.\n    ")]),a("a",{attrs:{id:"pdf",href:"https://drive.google.com/open?id=113wOzpeq9Dn5BABi89071QAEaamNAGtV"}},[a("v-btn",{attrs:{dark:"",fab:""}},[a("v-icon",[e._v("picture_as_pdf")])],1)],1)],1),a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[a("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n          +972523221702\n          "),a("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("call")])],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[a("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n          lermanori\n          "),a("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("fab fa-github")])],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[a("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n          lermanori@gmail.com\n          "),a("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("email")])],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",lg3:""}},[a("v-btn",{staticClass:"text-center black--text ",attrs:{disabled:"",round:"",dark:"",color:"white","text-color":"black"}},[e._v("\n          lermanori\n          "),a("v-icon",{attrs:{large:"",right:"",dark:""}},[e._v("fab fa-linkedin")])],1)],1)],1)],1)],1)},k=[],C=(a("0112"),a("8336")),E=a("132d"),S={},T=Object(h["a"])(S,y,k,!1,null,"39543506",null),O=T.exports;v()(T,{VBtn:C["a"],VContainer:g["a"],VFlex:m["a"],VIcon:E["a"],VLayout:b["a"]});var A={data:function(){return{education_text:"The Academic College of Tel Aviv-Yafo 10/2016 – present.\nMajor: Computer Science B.Sc.",expiriences:[{url:"http://ume.co.il",header:"UME -FREELANCE WORK",text:"\nIve been called by the startup\nCompany ume to finish,\nAdd new features and deploy their publicity site (jquery,bootstrap,html,css).\n"},{url:"http://www.michaelfkaufmann.com",header:"MICHAEL F. KAUFMANN - FREELANCE WORK",text:" \nIve been requested to create a website for the author michael f. Kaufmann\nAnd ive created a wordpress theme intigrated with vue, bootstrap-vue and wp-api.\nThe backend form handaling and maling is written in php."}],projects:[{url:"https://github.com/lermanori/media-connection",header:"Cross Platform TODO application",text:"the app is built with quasar framework which is a platform on top of vue.js who lets you output a cordova app, the application is developed under mevn stack(mongo,express,vue,node) and uses vue router,vuex and axios as well as authentication to google from and taskmanager rest api at the backend,deployed to heroku,tested with mocha and postman"},{url:"https://github.com/lermanori/media-connection",header:"Vue-JS interactive-resume",text:"this website is built with vue,vuetify and is deployed to github pages, pdf version is built with puppeter"},{url:"https://github.com/lermanori/design-patterns.FacebookApp",header:"C# - Facebook-App:",text:" An app that was made for design-patterns course. the app features are creating a desktop dashboard for your Facebook page, and can automate simple Facebook tasks like posting posts and images. 1. The app is implementing the gang of four design patterns. 2.  The app works with the Facebook Api. 3. The app is implementing a setting file that saves user data between uses. Utilizes: C#, Winforms, OOP, gang-of-four design patterns. "},{url:"https://github.com/lermanori/midburnGallery",header:"Vannila-JS - MIDBURN gallery",text:"1. The projects-frontend is designed by p5js library. 2. The project uses ES6-ES7 java-script, 3. All of the components of the gallery where build from scratch . 4. The project is deployed to Herouku. - The project is using node.js as a backend server environment. Utilizes: HTML, CSS, ES6-ES7js, node.js, git, Herouku, p5js. "},{url:"https://github.com/lermanori/Tetris1.0.0",header:"C++ - Tetris-Console-Game:",text:"An app that was made for C++ course, the app features are object oriented design of a Tetris game that is played in the console. -The app is using most of C++ features of object oriented programming. Utilizes: C++."}],about_me_text:"Developer from tel aviv-israel. Both fluent in english and hebrew, looking for a job as a full-stack developer. Im inpendent, autodidact, eager to learn engenieer who loves to code more than anything. Looking for a place to grow. (p.S im updated with all the latest tech that regards web and I love to surf)",courses:[{header:"PROGRAMING",list:["C","C++","C# (.NET)","ASSEMBLY","OPERATING-SYSTEMS","BASH","SQL","HASKELL"]},{header:"MATH",list:["LINEAR ALGEBRA","CALCULUS"]},{header:"COMPUTER-SCIENCE COURSES",list:["DATA STRUCTURES","ALGORITHMS","COMPUTABILTY","COMPLEXITY"]}]}},components:{"app-skills":w,"app-header":O}},j=A,L=(a("5c5b"),a("ce7e")),V=Object(h["a"])(j,i,l,!1,null,"d2514214",null),I=V.exports;v()(V,{VBtn:C["a"],VContainer:g["a"],VDivider:L["a"],VFlex:m["a"],VLayout:b["a"]});var R={name:"App",components:{HelloWorld:I},data:function(){return{}}},P=R,M=(a("e4e5"),a("7496")),N=a("549c"),U=a("9910"),B=a("71d9"),H=a("2a7f"),G=Object(h["a"])(P,o,s,!1,null,"1febeb4f",null),D=G.exports;v()(G,{VApp:M["a"],VContent:N["a"],VSpacer:U["a"],VToolbar:B["a"],VToolbarTitle:H["a"]});var F=a("8c4f"),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("HelloWorld")},K=[],W={components:{HelloWorld:I}},$=W,q=Object(h["a"])($,J,K,!1,null,null,null),Y=q.exports;r["a"].use(F["a"]);var z=new F["a"]({routes:[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),Q=a("2f62");r["a"].use(Q["a"]);var X=new Q["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:z,store:X,render:function(e){return e(D)}}).$mount("#app")},"5c5b":function(e,t,a){"use strict";var r=a("37ea"),n=a.n(r);n.a},8769:function(e,t,a){},cb3e:function(e,t,a){},e4e5:function(e,t,a){"use strict";var r=a("cb3e"),n=a.n(r);n.a}});
//# sourceMappingURL=app.d346fcc9.js.map