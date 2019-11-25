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
  }
];
export default charts;
