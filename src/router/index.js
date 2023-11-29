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
      path: '/chatroom',
      name: 'Chatroom',
      component: () => import('../views/chatroom-view.vue'),
    },
  ],
})

export default router
