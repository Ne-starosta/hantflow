import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  }, {
    path: '/vacancies',
    name: 'vacancies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vacants')
  }, {
    path: '/candidates',
    name: 'candidates',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users')
  }, {
    path: '/logs',
    name: 'logger',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logger')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
