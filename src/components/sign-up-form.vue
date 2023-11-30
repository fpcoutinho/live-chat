<template>
  <form class="prose w-full flex flex-col gap-2" @submit.prevent="register">
    <div class="form-control w-full">
      <label class="label" for="first_name">
        <span class="label-text font-bold">Name</span>
      </label>
      <input type="text" name="first_name" placeholder="Display name" class="input input-bordered w-full"
        v-model="displayName" required />
    </div>
    <div class="form-control w-full">
      <label class="label" for="email">
        <span class="label-text font-bold">E-mail</span>
      </label>
      <input type="email" name="email" placeholder="E-mail" class="input input-bordered w-full" v-model="email"
        required />
    </div>
    <div class="flex flex-row gap-4">
      <div class="form-control w-full">
        <label class="label" for="password">
          <span class="label-text font-bold">Password</span>
        </label>
        <input type="password" name="password" placeholder="Password" class="input input-bordered w-full"
          v-model="password" required />
      </div>
      <div class="form-control w-full">
        <label class="label" for="password2">
          <span class="label-text font-bold">Confirm Password</span>
        </label>
        <input type="password" name="password2" placeholder="Confirm password" class="input input-bordered w-full"
          v-model="password2" required />
      </div>
    </div>
    <span class="label-text-alt text-error">
      <span v-if="passwordError">{{ passwordError }}</span>
      <span v-if="error">{{ error }}</span>
    </span>
    <div class="form-control w-full">
      <button class="btn btn-primary" type="submit" :disabled="passwordError">
        Sign up
      </button>
    </div>
  </form>
  <dialog v-if="isPending" class="modal loading-modal" open>
    <span class="loading loading-spinner loading-lg text-primary"></span>
  </dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import useSignup from '../composables/useSignup'

const emit = defineEmits(['signup'])

const { signup, error, isPending } = useSignup()

const displayName = ref('')
const email = ref('')
const password = ref('')
const password2 = ref('')
const passwordError = computed(() => {
  if (password.value !== password2.value) return 'Passwords do not match!'
})

const register = async () => {
  await signup(email.value, password.value, displayName.value)
  if (!error.value) {
    emit('signup')
  }
}
</script>
