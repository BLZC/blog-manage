import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

//tabs中的数据管理
import home from './modules/home'
//table中数据管理
import table from './modules/table'
export default new vuex.Store({
  modules: {
    home,
    table
  }
})
