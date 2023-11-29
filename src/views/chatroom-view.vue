<template>
  <h1>Chatroom</h1>
</template>

<script setup>
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { user } = getUser()

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'Welcome' })
  }
})
</script>
