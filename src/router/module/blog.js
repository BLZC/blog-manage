/**
 * 博客系统
 */
let blog = [
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
  }
];
export { blog };
