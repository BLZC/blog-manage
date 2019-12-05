import Vue from './util/setVuePrototype';
import App from './App.vue';
import router from './router';
import store from './store';
import 'babel-polyfill';
import ElementUI from 'element-ui';
import VueSocketIO from 'vue-socket.io';
// 全局注册组件
import './components/global';
// Vue富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// 国际化
// import locale from 'element-ui/lib/locale/lang/en';

import 'element-ui/lib/theme-chalk/index.css';

// 复制
import VueClipboard from 'vue-clipboard2';
// 去掉开发环境的控制台提示
Vue.config.productionTip = false;
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.use(ElementUI);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://49.235.8.149:9090'
}));
Vue.use(VueQuillEditor /* { default global options } */);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
