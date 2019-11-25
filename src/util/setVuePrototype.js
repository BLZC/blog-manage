import Vue from 'vue';
import { get, post, del, put } from '../request/http';
import { getCookie, setCookie, deleteCookie } from './cookieConfig';
import { getLocalStorage, setLocalStorage, deleteLocalStorage, clearAllLocalStorage } from './localStorageConfig';
import { LZCMessage } from '../common';

Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$delete = del;
Vue.prototype.$put = put;
Vue.prototype.$LZCMessage = LZCMessage;
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$setCookie = setCookie;
Vue.prototype.$deleteCookie = deleteCookie;
Vue.prototype.$getls = getLocalStorage;
Vue.prototype.$setls = setLocalStorage;
Vue.prototype.$deletels = deleteLocalStorage;
Vue.prototype.$clearls = clearAllLocalStorage;

export default Vue;
