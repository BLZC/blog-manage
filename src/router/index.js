import Vue from 'vue'
import Router from 'vue-router'
import shop from './module/shop'
import { blog } from './module/blog'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/home/index.vue')
        },
        //商城模块
        ...shop,
        ...blog
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login')
    }
  ]
})
