import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/welcome-view.vue'),
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('../views/chat-view.vue'),
    },
  ],
})

export default router
