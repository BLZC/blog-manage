import VueCookies from 'vue-cookies';
// 获取cookie
export function getCookie (name) {
  return VueCookies.get(name);
}

// 设置cookie
export function setCookie (name, value) {
  VueCookies.set(name, value);
}

// 删除cookie
export function deleteCookie (name) {
  VueCookies.remove(name);
}
