export default {
  state: {
    multipleSelection: [] /* 所选数据 */
  },
  getters: {},
  mutations: {
    //table中选择框状态改变
    handlemultipleSelection(state, value) {
      state.multipleSelection = value
    }
  },
  actions: {}
}
