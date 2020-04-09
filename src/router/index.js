import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/theater',
    component: () => import('@/views/Theater')
  },
  {
    path: '/news',
    component: () => import('@/views/News')
  },
  {
    path: '/member',
    component: () => import('@/views/Member')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
