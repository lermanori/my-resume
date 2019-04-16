<template>
  <v-container class="white--text wrapper-container">
    <app-header />
    <v-divider dark />
    <v-container>
      <v-layout row wrap>
        <v-flex md6 xs12>
          <app-skills />
          <h1 class="display-5 text-center font-weight-thin">EDUCATION</h1>
          <p>
            {{education_text}}
          </p>
          <h1 class="display-5 text-center font-weight-thin">Courses</h1>
          <ul>
            <li v-for="(course,index) in courses" :key="index">
              {{course.header}}
              <ul>
                <li v-for="(subcourse,index) in course.list" :key="index">
                  {{subcourse}}
                </li>
              </ul>
            </li>
          </ul>
        </v-flex>
        <v-flex md6 xs12 class="white--text">
          <h1 class="display-5 text-center font-weight-thin">EXPERIENCE</h1>
          <ul>
            <li v-for="(expirience,index) in expiriences" :key="index">
              <p>{{expirience.text}}</p>
              <a :href='expirience.url'><v-btn dark>{{expirience.url}}</v-btn></a>
            </li>
          </ul>
          <h1 class="display-5 text-center font-weight-thin">OWN-PROJECTS</h1>
          <ul>
            <li v-for="(project,index) in projects" :key="index">
              <h4 class="title font-weight-thin">{{project.header}}</h4>
              <p>{{project.text}}</p>
              <a :href='project.url'><v-btn class="text-no-wrap" dark>GOTO PROJECT</v-btn></a>
            </li>
          </ul>
        <h1 class="display-5 text-center font-weight-thin">ABOUT-ME</h1>
        <p>
          {{about_me_text}}
          </p>
        </v-flex>

      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import skills from './skills'
import header from './header'

export default {
  data(){
    return {
      education_text:"The Academic College of Tel Aviv-Yafo 10/2016 – present. \
                      Major: Computer Science B.Sc.",
                      //Programming Coursework: Algorithms, Data Structures, Design Patterns, Data-Bases, Object-oriented-programing. ",
      expiriences:[
        {url:"http://ume.co.il",text:"UME -FREELANCE WORK, IVE BEEN CALLED BY THE STARTUP COMPANY UME TO FINISH,ADD NEW FEATURES AND DEPLOY THEIR PUBLICITY SITE (JQUERY,BOOTSTRAP,HTML,CSS)."},
        {url:"http://www.michaelfkaufmann.com",text:"MICHAEL F. KAUFMANN - FREELANCE WORK, IVE BEEN REQUESTED TO CREATE A WEBSITE FOR THE AUTHOR MICHAEL F. KAUFMANN AND IVE CREATED A WORDPRESS THEME INTIGRATED WITH VUE, BOOTSTRAP-VUE AND WP-API,THE BACKEND FORM HANDALING AND MALING IS WRITTEN IN PHP."},
      ],
      projects:[
        { url:"https://github.com/lermanori/media-connection",header:"Cross Platform TODO application",text:"the app is built with quasar framework which is a platform on top of vue.js who lets you output a cordova app, the application is developed under mevn stack(mongo,express,vue,node) and uses vue router,vuex and axios as well as authentication to google from and taskmanager rest api at the backend,deployed to heroku,tested with mocha and postman"},
        { url:"https://github.com/lermanori/media-connection",header:"Vue-JS interactive-resume",text:"this website is built with vue,vuetify and is deployed to github pages" },
        {  url:"https://github.com/lermanori/design-patterns.FacebookApp",header:"C# - Facebook-App:",text:" An app that was made for design-patterns course. the app features are creating a desktop dashboard for your Facebook page, and can automate simple Facebook tasks like posting posts and images. 1. The app is implementing the gang of four design patterns. 2.  The app works with the Facebook Api. 3. The app is implementing a setting file that saves user data between uses. Utilizes: C#, Winforms, OOP, gang-of-four design patterns. "},
        { url:"https://github.com/lermanori/midburnGallery",header:"Vannila-JS - MIDBURN gallery",text:"1. The projects-frontend is designed by p5js library. 2. The project uses ES6-ES7 java-script, 3. All of the components of the gallery where build from scratch . 4. The project is deployed to Herouku. - The project is using node.js as a backend server environment. Utilizes: HTML, CSS, ES6-ES7js, node.js, git, Herouku, p5js. "},
        {  url: "https://github.com/lermanori/Tetris1.0.0.",header:"C++ - Tetris-Console-Game:",text:"An app that was made for C++ course, the app features are object oriented design of a Tetris game that is played in the console. -The app is using most of C++ features of object oriented programming. Utilizes: C++."}
      ],
      about_me_text:"DEVELOPER FROM TEL AVIV-ISRAEL.\nBOTH FLUENT IN ENGLISH AND HEBREW, LOOKING FOR A JOB AS A FULL-STACK DEVELOPER.\n IM INPENDENT, AUTODIDACT, EAGER TO LEARN ENGENIEER WHO LOVES TO CODE MORE THAN ANYTHING.\nLOOKING FOR A PLACE TO GROW.\n (P.S IM UPDATED WITH ALL THE LATEST TECH THAT REGARDS WEB AND I LOVE TO SURF).",
      courses:[
        {header:"PROGRAMING",
        list:[
          "C",
          "C++",
          "C# (.NET)",
          "ASSEMBLY",
          "OPERATING-SYSTEMS",
          "BASH",
          "SQL"
          ]
          },
        {
          header:"MATH",
            list:[
              "LINEAR ALGEBRA",
              "CALCULUS",
              ]},
              {
          header:"COMPUTER-SCIENCE COURSES",
            list:[
              "DATA STRUCTURES",
              "ALGORITHMS",
              "COMPUTABILTY",
              "COMPLEXITY"
              ]},
            

      ]
    }
  },
components:{
  'app-skills':skills,
  'app-header':header
}
};
</script>
<style scoped>
.wrapper-container{
    border-color: white;
    border-width: 10px;
    border-style: solid;
    background-color: black;
}

</style>

