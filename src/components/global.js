// 组件全局注册
import Vue from 'vue';
// 组件名首字母大写
function changeStr (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const requireComponent = require.context('.', true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName);
  const componentName = changeStr(
    fileName.replace(/^\.\//, '').replace(/\.vue$/, '')
  );
  const lastNameArray = componentName.split('/');
  const lastName = lastNameArray[lastNameArray.length - 1];
  Vue.component(lastName, config.default || config);
});
