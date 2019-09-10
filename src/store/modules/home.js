export default {
  state: {
    show: true,
    isCollapse: false,
    icon: 'iconfont iconshouqi',
    text: 'Api管理系统',
    tipText: '收缩菜单',
    tabs: [],
    selectTab: {}
  },
  getters: {},
  mutations: {
    //是否收缩左侧菜单
    switchShow(state) {
      state.show = state.show ? false : true
      if (state.show) {
        state.isCollapse = false
        state.icon = 'iconfont iconshouqi'
        state.text = 'Api管理系统'
        state.tipText = '收缩菜单'
      } else {
        state.isCollapse = true
        state.icon = 'iconfont iconzhankai1'
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
