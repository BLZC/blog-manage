export default {
  state: {
    show: true,
    isCollapse: false,
    icon: '/images/hide.png',
    text: 'Api管理系统',
    tipText: '收缩菜单',
    tabs: [
      {
        id: 1,
        name: '门户首页',
        path: '/index',
        icon: 'iconfont iconshouye'
      }
    ],
    selectTab: {
      id: 1,
      name: '门户首页',
      path: '/index',
      icon: 'iconfont iconshouye'
    }
  },
  getters: {},
  mutations: {
    //是否收缩左侧菜单
    switchShow(state) {
      state.show = state.show ? false : true
      if (state.show) {
        state.isCollapse = false
        state.icon = '/images/hide.png'
        state.text = 'Api管理系统'
        state.tipText = '收缩菜单'
      } else {
        state.isCollapse = true
        state.icon = '/images/show.png'
        state.text = 'Api'
        state.tipText = '展开菜单'
      }
    },
    //添加tab
    addTabs(state, value) {
      if (JSON.stringify(state.tabs).indexOf(JSON.stringify(value)) < 0) {
        state.tabs.push(value)
      } else {
        state.selectTab = value
      }
    },
    //删除tab
    closeTab(state, value) {
      if (state.tabs.indexOf(value) > -1) {
        state.tabs.splice(state.tabs.indexOf(value), 1)
      }
    },
    //修改选中的tab
    selectTab(state, value) {
      state.selectTab = value
    },
    //关闭其他标签
    closeOther(state) {
      state.tabs = []
      state.tabs.push(state.selectTab)
    },
    //关闭所有标签
    closeAll(state) {
      state.tabs = []
    }
  },
  actions: {}
}
