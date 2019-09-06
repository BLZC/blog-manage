/**
 * 商城模块的路由
 */
let shop = [
  {
    path: '/classification',
    name: 'classification',
    component: () => import('../../views/shop/classification.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../../views/shop/list.vue')
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: () => import('../../views/shop/attribute.vue')
  }
]
export default shop
