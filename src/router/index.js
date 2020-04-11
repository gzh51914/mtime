import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)




const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/home/hot',
    component: ()=> import('@/views/Hot')
  },
  {
    path: '/home/Coming',
    component: ()=> import('@/views/Coming')
  },
  {
    name: 'movie',
    path: '/movie/:id',
    component: ()=> import('@/views/Movie')
  },
  {
    path: '/theater',
    component: ()=> import('@/views/Theater')
  },
  {
    path: '/news',
    component: ()=> import('@/views/News')
  },
  {
    path: '/member',
    component: ()=> import('@/views/Member')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
