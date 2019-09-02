import Vue from 'vue'
import Router from 'vue-router'
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
        {
          path: '/classification',
          name: 'classification',
          component: () => import('../views/shop/classification.vue')
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('../views/shop/list.vue')
        },
        {
          path: '/attribute',
          name: 'attribute',
          component: () => import('../views/shop/attribute.vue')
        }
      ]
    }
  ]
})
