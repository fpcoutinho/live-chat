<template>
  <header class="navbar bg-base-100 fixed top-0 p-0 xl:px-20 w-full overflow-hidden z-10">
    <div class="flex-1">
      <span class="btn btn-ghost text-xl">Fux.ico</span>
    </div>
    <!-- v-if="props.user" no div abaixo -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><span>Hello, user</span></li>
        <li><button type="button" @click="signout">Logout</button></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'

const router = useRouter()

const { logout, error } = useLogout()

const signout = async () => {
  await logout()
  if (!error.value) {
    router.push({ name: 'Welcome' })
  }
}

const props = defineProps({
  user: Object
})
</script>
