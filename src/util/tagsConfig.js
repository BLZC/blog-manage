import { getLocalStorage } from './localStorageConfig';
export default {
  tags: getLocalStorage('currentTag') ? [JSON.parse(getLocalStorage('currentTag'))] : [],
  selectTag: getLocalStorage('currentTag') ? JSON.parse(getLocalStorage('currentTag')) : ''
};
