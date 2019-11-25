/**
 * 获取localStorage
 * @param {string} name
 */
export function getLocalStorage (name) {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name);
  }
}

/**
 * 设置localStorage
 * @param {string} name
 * @param {string} value
 */
export function setLocalStorage (name, value) {
  localStorage.setItem(name, value);
}

/**
 * 清除localStorage中的所有数据
 */
export function clearAllLocalStorage () {
  localStorage.clear();
}

/**
 * 删除localstorage
 * @param {string} name
 */
export function deleteLocalStorage (name) {
  localStorage.removeItem(name);
}
