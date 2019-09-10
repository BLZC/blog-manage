/**
 * 博客系统
 */
let blog = [
  {
    path: '/userManage',
    name: 'userManage',
    component: () => import('../../views/blog/usermanage/usermanage.vue')
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    component: () => import('../../views/blog/articleManage/articleManage.vue')
  }
]
export { blog }
