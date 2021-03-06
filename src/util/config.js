import { getLocalStorage } from './localStorageConfig';
export const tagConfig = {
  tags: getLocalStorage('currentTag') ? [JSON.parse(getLocalStorage('currentTag'))] : [],
  selectTag: getLocalStorage('currentTag') ? JSON.parse(getLocalStorage('currentTag')) : ''
};

export const musicConfig = {
  title: 'Just For You',
  artist: '李嘉格 / 李唯枫',
  src: 'http://49.235.8.149:9001/music/mp3/jfy.mp3',
  pic: 'http://49.235.8.149:9001/music/image/jfy.jpg'
};
