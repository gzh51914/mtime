import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ArticleDetail from '@/views/ArticleDetail'
import News from '@/views/News'
import NewsDetail from '@/views/NewsDetail'
import Newslist from '@/views/news/Newslist'
import Review from '@/views/news/Review'
import Toplist from '@/views/news/Toplist'
import Trailer from '@/views/news/Trailer'

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
    path: '/movie/:id',
    component: ()=> import('@/views/Movie')
  },
  {
    path: '/theater',
    component: () => import('@/views/Theater')
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        path: '/news/newslist',
        component: Newslist
      },
      {
        path: '/news/review',
        component: Review
      },
      {
        path: '/news/toplist',
        component: Toplist
      },
      {
        path: '/news/trailer',
        component: Trailer
      },
    ],
    redirect: '/news/newslist'
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
    name: 'newsdetail',
    path: '/newsdetail/:id',
    component: NewsDetail,
    props: true
  },
  {
    path: '',
    redirect: '/home'
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
  },
  {
    path: '/citylist',
    component: ()=> import('@/views/Citylist')
  },
]

const router = new VueRouter({
  // mode: 'history',
  // 改为hash模式预防单页面刷新白屏报错 Uncaught SyntaxError: Unexpected token < 
  base: process.env.BASE_URL,
  routes
})

export default router
