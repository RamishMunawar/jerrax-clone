<template>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10">
     
        <div class="w-full flex flex-col items-center md:items-start"> 
           <h1 class="text-2xl md:text-4xl text-slate-700 my-1">{{name}}</h1>
           <strong class="text-blue-700 text-5xl lg:text-6xl font-bold">Jerrax Team</strong>
           <p class="text-2xl md:text-4xl text-slate-700">We are the team of talented developers</p>
           <router-link :to="visit" class="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-full text-white text-xl font-medium mt-3">{{ btnName }}</router-link>
        </div>
        <div class="home">
            <img :src="imgsrc" alt="" class="w-[100%] h-[100%] mt-5">

        </div>
      </div>
  


</template>

<script  setup>


import { RouterLink } from 'vue-router';
    
import { defineProps } from 'vue';

const props= defineProps(['name' , 'imgsrc' , 'visit' , 'btnName'])


</script>

<style scoped>
.home{
    animation: up-down 1s alternate infinite;
}
@keyframes up-down {
    0%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(-10px);
    }

}

</style>