<template>
  <div>
    <h1 class="display-5 text-center font-weight-thin">SKILLS</h1>
    <v-container>
      <v-layout row wrap justify-space-between v-for="(skill,index) in skills"
                  :key="index">

        <v-flex xs3 class="mt-1">{{skill.name}}</v-flex>
        <v-flex xs9>
          <v-progress-linear :color="skill.color" height="5" :value="skill.current_percentage"></v-progress-linear>
        </v-flex>
        <!-- </div>-->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            skills:[
                {
                    name:"VUE",
                    target_percentage:90,
                    current_percentage:0,
                    color:"green"
                },
                {
                    name:"EXPRESS (NODE.JS)",
                    target_percentage:91,
                    current_percentage:0,
                    color:"red"
                },
                {
                    name:"ES6-JAVASCRIPT",
                    target_percentage:89,
                    current_percentage:0,
                    color:"pink"
                },
                {
                    name:"HTML5",
                    target_percentage:96,
                    current_percentage:0,
                    color:"orange"
                },
                {
                    name:"CSS",
                    target_percentage:87,
                    current_percentage:0,
                    color:"cyan"
                },
                {
                    name:"MONGODB",
                    target_percentage:87,
                    current_percentage:0,
                    color:"light-green"
                },
                {
                    name:"SQL",
                    target_percentage:87,
                    current_percentage:0,
                    color:"blue"
                },
                {
                    name:"C# (.NET)",
                    target_percentage:85,
                    current_percentage:0,
                    color:"purple"
                },
                {
                    name:"DESIGN PATTERNS",
                    target_percentage:83,
                    current_percentage:0,
                    color:"light-blue"
                },
                {
                    name:"GITHUB",
                    target_percentage:95,
                    current_percentage:0,
                    color:"grey"
                },
                {
                    name:"HEROKU",
                    target_percentage:78,
                    current_percentage:0,
                    color:"white"
                },
            ]

            
        }
    },
        computed:{
          /*  skill() {
                return this.skills[0];
            }*/
        },
        mounted(){
            setInterval(() => {
                for(let i=0;i<this.skills.length;i++){
                    if(this.skills[i].target_percentage > this.skills[i].current_percentage)
                    {
                        this.skills[i].current_percentage+=1;
                    }
                }
                
            }, 50);
        }

}
</script>

<style scoped>
</style>
