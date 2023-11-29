<template>
  <h1>Chatroom</h1>
  <div class="chat-window mt-4">
    <div class="chat-wrapper pr-2">
      <div class="chat chat-start">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">2 hours ago</time>
        </div>
        <div class="chat-bubble chat-bubble-primary">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">
          Seen
        </div>
      </div>
      <div class="chat chat-start">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">2 hour ago</time>
        </div>
        <div class="chat-bubble chat-bubble-primary">I loved you.</div>
        <div class="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble chat-bubble-neutral">I hate you!</div>
        <div class="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble chat-bubble-neutral">I hate you!</div>
        <div class="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble chat-bubble-neutral">I hate you!</div>
        <div class="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble chat-bubble-neutral">I hate you!</div>
        <div class="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble chat-bubble-neutral">I hate you!</div>
        <div class="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
    </div>
    <div class="chat-input w-full join mt-2">
      <textarea class="textarea textarea-bordered join-item w-full" rows="1" placeholder="Type here"></textarea>
      <button class="btn join-item rounded-r-full">Send</button>
    </div>
  </div>
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

<style>
.chat-window {
  width: 46rem;
  overflow: hidden;
}

.chat-wrapper {
  height: 33rem;
  overflow: auto;
}

.chat-input .textarea {
  resize: none;
}

.chat-input .textarea::-webkit-scrollbar {
  display: none;
}

.chat-input .textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
