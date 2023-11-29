import { createRouter, createWebHistory } from 'vue-router'
import {projectAuth} from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

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
      beforeEnter: requireAuth
    },
  ],
})

export default router
