import Vue from 'vue';
import vuex from 'vuex';

//  tags中的数据管理
import home from './modules/home';
//  table中数据管理
import table from './modules/table';
Vue.use(vuex);
export default new vuex.Store({
  modules: {
    home,
    table
  }
});
