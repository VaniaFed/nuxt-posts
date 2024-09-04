<template>
  <div class="container">
    <h1 class="text-5xl">Hi chat!</h1>
    <div class="text-slate-300 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aperiam vero numquam nobis architecto cumque vel repellendus ex optio aliquid mollitia ratione nam eius pariatur laudantium similique praesentium excepturi culpa.</div>
    <button class="btn btn-primary">Press me</button>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'title', content: 'This is my sample project.' },
    { name: 'description', content: 'This is my sample project.' },
    { name: 'keywords', content: 'Nuxt, Project, Practice'  },
  ],
  htmlAttrs: {
    'data-theme': 'pastel'
  },
})

</script>

<style lang="scss" scoped>
</style>