import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/links',
    name: 'links',
    component: () => import(/* webpackChunkName: "weblinks" */ '../views/WebLinks.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '../components/TableDemo.vue')
  },
  {
    path: '/huangyuqiang',
    name: 'huangyuqiang',
    component: () => import(/* webpackChunkName: "huangyuqiang" */ '../views/HuangYuqiang.vue')
  },
  {
    path: '/java-resume',
    name: 'javaResume',
    component: () => import(/* webpackChunkName: "javaresume" */ '../views/JavaResume.vue')
  },
  {
    path: '/train-ticket',
    name: 'trainTicket',
    component: () => import(/* webpackChunkName: "trainticket" */ '../views/TrainTicket.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
