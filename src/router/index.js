import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
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
      beforeEnter: requireNoAuth
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
