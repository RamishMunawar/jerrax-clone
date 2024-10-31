<template>
<div class="bg-white shadow-lg sm:skew-y-6">
  <img :src="imgsrc" :alt="title" class="w-full object-cover h-[200px]">

<div class="text p-9">
<h2 class="text-slate-950 py-1 font-medium text-lg">{{ title }}</h2>
<p class="text-slate-700 py-1 font-medium text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, qui repellat! Eum enim repudiandae eos inventore ducimus debitis, eveniet porro iste ipsam consequatur,
</p>
<button  class="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-full text-white text-sm font-medium mt-3">Go Somewhere</button>
</div>
</div>
</template>

<script setup>

 const props = defineProps(['imgsrc' , 'title'])
</script>


<style scoped>

</style>