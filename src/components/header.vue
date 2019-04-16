<template>
    <v-layout text-xs-center wrap justify-space-between>
        <v-flex mb-4>
            <transition name="simple-transition" mode="out-in" appear="true" enter-active-class="animated fadeInLeft"
                leave-active-class="animated fadeOutRight" :duration="400" :delay="50">
                <h1 class="display-2 mb-3 resume-head">
                    Ori Lerman
                </h1>
            </transition>
            <h1 class="display-6 font-weight-light mb-3 resume-sub-head">
                AutoDidact. Developer. Surfer.
            </h1>
        </v-flex>
            <v-container>
                <v-layout row wrap justify-space-around>
                    <v-flex d-flex xs12 sm6 lg3>
                        <v-btn round dark color="white" class="text-center black--text " text-color="black">
                            +972523221702
                            <v-icon large right dark>call</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 lg3>
                        <v-btn round dark color="white" class="text-center black--text " text-color="black">
                            lermanori
                            <v-icon large right dark>fab fa-github</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 lg3>
                        <v-btn round dark color="white" class="text-center black--text " text-color="black">

                            lermanori@gmail.com
                            <v-icon large right dark>email</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 lg3>
                        <v-btn round dark color="white" class="text-center black--text " text-color="black">
                            lermanori
                            <v-icon large right dark>fab fa-linkedin</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
    </v-layout>
</template>
<style scoped>
    
.resume-head{
  animation-name: fadeInTop;
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
  animation-direction: normal;
}
.resume-sub-head{
  animation-name: fadeInLeft;
  animation-delay: 800ms;
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
  animation-direction: normal;
  opacity: 0;

}
@keyframes fadeInTop {
  from {
    opacity: 0;
    transform: translateY(-400px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(1000px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-400px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(1000px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

