<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/nav-bar.vue'
import FooterBar from './components/footer-bar.vue'
import getUser from './composables/getUser'

const { user } = getUser()
</script>

<template>
  <nav-bar :user="user" />
  <main class="prose prose-slate flex flex-col items-center w-full max-w-none p-5 mt-16">
    <RouterView />
  </main>
  <footer-bar />
</template>
