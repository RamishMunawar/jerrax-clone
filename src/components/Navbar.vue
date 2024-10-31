<template>
   <header class="flex justify-between items-center bg-white  shadow-md h-[80px] w-[100%] px-5 lg:px-24  z-10 fixed top-0 left-0">
<div class="text-3xl font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer">
    <RouterLink to="/home"><i class="bi bi-code"></i>Jerrax</RouterLink>

</div>
<nav class="flex gap-4 p-5 md:gap-10 flex-col md:flex-row px-6 md:static absolute  bg-white md:bg-transparent shadow-md md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full
duration-500" :class="[open ? 'top-0' : 'top-[-690%]']">
    <router-link to="/" class="text-slate-500 hover:text-slate-700  text-xl font-medium ">Home</router-link>
    <router-link to="/about" class="text-slate-500 hover:text-slate-700  text-xl font-medium">About</router-link>
    <router-link to="/services" class="text-slate-500 hover:text-slate-700  text-xl font-medium">Services</router-link>

</nav>
<div class="text-4xl text-black cursor-pointer md:hidden z-20" @click="menuOpen">

    <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>

</div>
   </header>
  
</template>
<script setup>

import { RouterLink } from 'vue-router';

import { ref } from 'vue';

const open = ref(false)

const menuOpen = () => {

    open.value = !open.value

}
</script>

<style scoped>
.router-link-active{
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity)) /* #2563eb */;
}
</style>