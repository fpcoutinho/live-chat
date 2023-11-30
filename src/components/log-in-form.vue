<template>
  <form class="prose w-full flex flex-col gap-2" @submit.prevent="signin">
    <div class="form-control w-full">
      <label class="label" for="email">
        <span class="label-text font-bold">E-mail</span>
      </label>
      <input type="email" name="email" placeholder="E-mail" class="input input-bordered w-full" v-model="email"
        required />
    </div>
    <div class="form-control w-full">
      <label class="label" for="password">
        <span class="label-text font-bold">Password</span>
      </label>
      <input type="password" name="password" placeholder="Password" class="input input-bordered w-full" v-model="password"
        required />
    </div>
    <span class="label-text-alt text-error">
      {{ error }}
    </span>
    <div class="form-control w-full">
      <button class="btn btn-primary" type="submit">Log in</button>
    </div>
  </form>
  <dialog v-if="isPending" class="modal loading-modal" open>
    <span class="loading loading-spinner loading-lg text-primary"></span>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

const emit = defineEmits(['login'])

const email = ref('')
const password = ref('')
const { login, error, isPending } = useLogin()

const signin = async () => {
  await login(email.value, password.value)
  if (!error.value) {
    emit('login')
  }
}
</script>
