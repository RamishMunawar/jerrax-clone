            <script setup>
               import aboutData from '../components/aboutData';
               import Card from '../components/Card.vue';
                import TwoinOne from '@/components/TwoinOne.vue';
                import home from  '../assets/img/responsive-web.png'
            </script>
<template>
<div>

    <TwoinOne  :name="'welcome To About Page'" :imgsrc="home" visit="/services" :btnName="'Services'"/>

</div>
<div class="container mx-auto px-5 xl:px-24 my-10">
        <div class="text">
            <h1 class="text-blue-700 text-4xl font-bold text-center">About Services</h1>

        </div>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        <div v-for="data in aboutData" :key="data">
        <Card  :imgsrc="data.imgsrc" :title="data.title"/>

        </div>
    </div>
    </div>
</template>


<style scoped>

</style>