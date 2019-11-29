import { getLocalStorage } from './localStorageConfig';
export const tagConfig = {
  tags: getLocalStorage('currentTag') ? [JSON.parse(getLocalStorage('currentTag'))] : [],
  selectTag: getLocalStorage('currentTag') ? JSON.parse(getLocalStorage('currentTag')) : ''
};

export const musicConfig = {
  title: 'Just For You',
  artist: '李嘉格 / 李唯枫',
  src: 'http://58.216.6.152/amobile.music.tc.qq.com/C400004XIwzE3L4FSI.m4a?guid=3475111600&vkey=F5FA0000CCFF78A71AA46F3459C4890F9F76E6B50250342E2B5414FD45EE3DADA3546BD340AE7B606D6AB742294EE70E4E08907FABDA1AB8&uin=4824&fromtag=66',
  pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000FYS0A27KAlb.jpg?max_age=2592000'
};
