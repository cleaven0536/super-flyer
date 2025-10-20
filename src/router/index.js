import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Board from '@/views/Board.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/',
    name: 'Board',
    component: () => import('../views/Board.vue'),
    meta: { requiresAuth: true }
  },
  // 添加默认重定向到登录页
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (to.meta.requiresGuest && isLoggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router