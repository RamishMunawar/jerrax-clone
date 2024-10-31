<template>
    <div class="container mx-auto px-5 xl:px-24 my-10">
        <div class="text_one">
            <h1 class="text-blue-700 text-4xl font-bold text-center">Our Services</h1>

        </div>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        <div v-for="data in servData" :key="data">
        <Card  :imgsrc="data.imgsrc" :title="data.title"/>

        </div>
    </div>
    </div>
    
    </template>                     
    
    <script setup>
    import servData from './ServData';
    import Card from './Card.vue';
    
    </script>
    
    <style scoped>
    .text_one{
        margin-top: 110px;
    }
    </style>