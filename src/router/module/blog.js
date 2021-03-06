/**
 * 博客系统
 */
let blog = [
  {
    path: '/menuManage',
    name: 'menuManage',
    meta: { title: '标签管理' },
    component: () => import('../../views/blog/MenuManage/MenuManage')
  },
  {
    path: '/userManage',
    name: 'userManage',
    meta: { title: '用户管理' },
    component: () => import('../../views/blog/UserManage/UserManage')
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    meta: { title: '文章管理' },
    component: () => import('../../views/blog/ArticleManage/ArticleManage')
  },
  {
    path: '/edit',
    name: 'edit',
    meta: { title: '文章编辑' },
    component: () => import('../../views/blog/ArticleManage/Edit')
  },
  {
    path: '/staticResource',
    name: 'staticResource',
    meta: { title: '资源管理' },
    component: () => import('../../views/blog/StaticResource/Push')
  }
];
export { blog };
