import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import home from './modules/home.js' //引入某个store对象

export default new vuex.Store({
  modules: {
    home
  }
})
