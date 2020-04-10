import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ArticleDetail from '@/views/ArticleDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
    // children: [
    //   {
    //     path: '/home/detail/:id',
    //     component: Detail,
    //     name: 'detail',
    //     props:true
    //   }
    // ]
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
  },
  {
    name: 'articledetail',
    path: '/articledetail/:id',
    component: ArticleDetail,
    props: true
  },
  {
    path: '',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
