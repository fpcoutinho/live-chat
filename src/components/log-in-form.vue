<template>
  <form class="prose w-full flex flex-col gap-2" @submit.prevent="login">
    <div class="form-control w-full">
      <label class="label" for="email">
        <span class="label-text font-bold">E-mail</span>
      </label>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        class="input input-bordered w-full"
        v-model="email"
        required
      />
    </div>
    <div class="form-control w-full">
      <label class="label" for="password">
        <span class="label-text font-bold">Password</span>
      </label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        class="input input-bordered w-full"
        v-model="password"
        required
      />
    </div>
    <span class="label-text-alt text-error">
      {{ error }}
    </span>
    <div class="form-control w-full">
      <button class="btn btn-primary" type="submit">Log in</button>
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')
  const error = ref('')

  const login = () => {
    console.log('email: ', email.value)
    console.log('password: ', password.value)
    console.log('error: ', error)
  }
</script>
