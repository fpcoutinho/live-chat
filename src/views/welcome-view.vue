<template>
  <h1 class="text-center">Welcome</h1>
  <div v-if="showLogin" class="form-card card bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <h1 class="card-title text-neutral text-2xl">Log in</h1>
      <log-in-form @login="enterChat" />
      <div class="card-actions w-full justify-around items-center">
        Don't have an account?
        <span class="btn btn-ghost" @click="showLogin = false">
          Sign up <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  </div>

  <div v-else class="form-card card bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <h1 class="card-title text-neutral text-2xl">Sign up</h1>
      <sign-up-form @signup="enterChat" />
      <div class="card-actions w-full justify-around items-center">
        Already signed up?
        <span class="btn btn-ghost" @click="showLogin = true">
          Log in <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import SignUpForm from '../components/sign-up-form.vue'
import LogInForm from '../components/log-in-form.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showLogin = ref(true)

const enterChat = () => {
  router.push({ name: 'Chatroom' })
}
</script>

<style>
.form-card {
  width: 30rem;
}
</style>
