<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/nav-bar.vue'
  import FooterBar from './components/footer-bar.vue'
</script>

<template>
  <nav-bar />
  <main
    class="prose prose-slate flex flex-col items-center w-full max-w-none p-5 mt-16"
  >
    <RouterView />
  </main>
  <footer-bar />
</template>
