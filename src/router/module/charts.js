/**
 * 图标库模块的路由
 */
const Schart = () => import('../../views/charts/TheSchart');
let charts = [
  {
    path: '/schart',
    name: 'schart',
    meta: { title: 'schart图表' },
    component: Schart
  },
  {
    path: '/dataV',
    name: 'dataV',
    meta: { title: 'dataV' },
    component: () => import('../../views/charts/DataV')
  }
];
export default charts;
