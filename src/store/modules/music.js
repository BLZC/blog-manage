import VueCookies from 'vue-cookies';
import { musicConfig } from '../../util/config';
export default {
  state: {
    currentMusic: {
      title: musicConfig.title,
      artist: musicConfig.artist,
      src: musicConfig.src,
      pic: musicConfig.pic
    } /* 当前播放的歌曲 */,
    musicList: [] // 歌曲列表
  },
  getters: {},
  mutations: {
    // table中选择框状态改变
    setAllMusic (state, value) {
      state.musicList = value;
    },
    setCurrentMusic (state, value) {
      if (value) {
        state.currentMusic = value;
      } else {
        let _currentMusic = VueCookies.get('currentMusic');
        if (_currentMusic) {
          state.currentMusic = _currentMusic;
        } else if (state.musicList.length > 0) {
          state.currentMusic = state.musicList[0];
        } else {
          state.currentMusic = {};
        }
      }
    }
  },
  actions: {}
};
