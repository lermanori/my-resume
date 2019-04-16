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
            </li>
          </ul>
          <h1 class="display-5 text-center font-weight-thin">OWN-PROJECTS</h1>
          <ul>
            <li v-for="(project,index) in projects" :key="index">
              <h4 class="title font-weight-thin">{{project.header}}</h4>
              <p>{{project.text}}</p>
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
        {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      ],
      projects:[
        {header:"oris project",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {header:"oris project",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {header:"oris project",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
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

