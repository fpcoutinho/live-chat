<template>
  <h1>Chatroom</h1>
  <div class="chat-window p-2 mt-4">
    <span v-if="getError" class="text-error">{{ getError }}</span>
    <div v-if="documents" class="chat-wrapper pr-2">
      <div v-for="doc in documents" :key="doc.id">
        <div v-if="doc.userEmail === user.email" class="chat chat-end md:chat-xs">
          <div class="chat-header">
            {{ doc.name }}
            <time class="text-xs opacity-50">{{ formattedDate(doc.createdAt) }}</time>
          </div>
          <div class="chat-bubble chat-bubble-neutral">{{ doc.message }}</div>
          <div class="chat-footer opacity-50">
            Seen
          </div>
        </div>
        <div v-else class="chat chat-start md:chat-xs">
          <div class="chat-header">
            {{ doc.name }}
            <time class="text-xs opacity-50">{{ formattedDate(doc.createdAt) }}</time>
          </div>
          <div class="chat-bubble chat-bubble-primary">{{ doc.message }}</div>
          <div class="chat-footer opacity-50">
            Seen
          </div>
        </div>
      </div>
    </div>
    <form class="chat-input w-full join mt-2" @submit.prevent="sendMessage">
      <textarea class="textarea textarea-bordered join-item w-full" rows="1" placeholder="Type here" v-model="message"
        @keypress.enter.prevent="sendMessage"></textarea>
      <button class="btn join-item rounded-r-full" type="submit">Send</button>
      <span v-if="error" class="text-error">{{ error }}</span>
    </form>
  </div>
</template>

<script setup>
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import getCollection from '../composables/getCollection'
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { timestamp } from '../firebase/config'
import { formatDistanceToNow } from 'date-fns'

const router = useRouter()
const { user } = getUser()
const { addDoc, error } = useCollection('messages')
const { documents, getError } = getCollection('messages')

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'Welcome' })
  }
})

const formattedDate = (timestamp) => {
  return formatDistanceToNow(timestamp.toDate(), { addSuffix: true })
}

const message = ref('')

const sendMessage = async () => {
  const msg = {
    userEmail: user.value.email,
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  }

  await addDoc(msg)
  if (!error.value) {
    message.value = ''
  }
}
</script>

<style>
.chat-window {
  width: 46rem;
  overflow: hidden;
}

.chat-wrapper {
  height: 450px;
  overflow: auto;
}

.chat-input .textarea {
  resize: none;
}

.chat-input .textarea::-webkit-scrollbar,
.chat-wrapper::-webkit-scrollbar {
  display: none;
}

.chat-input .textarea,
.chat-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
