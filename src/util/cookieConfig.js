// 获取cookie
export function getCookie (name) {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  let arr = document.cookie.match(reg);
  if (arr[2]) {
    return (arr[2]);
  } else { return null; }
}

// 设置cookie
export function setCookie (c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString());
}

// 删除cookie
export function deleteCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString(); }
}
