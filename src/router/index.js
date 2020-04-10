import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ArticleDetail from '@/views/ArticleDetail'
import News from '@/views/News'
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
