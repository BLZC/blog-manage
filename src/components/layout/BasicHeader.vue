<template>
  <div class="header">
    <el-row>
      <el-col :span="3"
              class="img-col show-pointer">
        <el-tooltip effect="dark"
                    :content="tipText"
                    placement="right">
          <i class="hicon"
             :class="vicon"
             @click="changeSide"></i>
        </el-tooltip>
      </el-col>
      <el-col :span="5"
              :offset="16"
              class="message">
        <div class="top-icon">
          <el-dropdown size="mini" @command="handClick">
            <span class="el-dropdown-link">
                <aplayer ref="aplayer"
                        autoplay
                        mini
                        shuffle
                        :list="musicList"
                        :music="currentMusic"
                />
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item>黄金糕</el-dropdown-item> -->
              <el-dropdown-item command="m">
                <el-link type="primary">更多...</el-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="top-icon">
          <el-tooltip effect="dark"
                      :content="fullText"
                      placement="bottom">
            <i :class="fullClass"
               @click="handleFullScreen"></i>
          </el-tooltip>
        </div>
        <div class="top-icon">
          <el-badge :value="3"
                    class="show-pointer">
            <el-tooltip effect="dark"
                        content="点击查看详细信息"
                        placement="bottom">
              <i class="iconfont iconxiaoxi hicon"
                 @click="checkMsg"></i>
            </el-tooltip>
          </el-badge>
        </div>
        <el-dropdown size="small"
                     class="show-pointer"
                     trigger="click"
                     @command="handClick"
                     placement="bottom">
          <div class="el-dropdown-link lzc-flex top-icon">
            <el-avatar size="small"
                       src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
          </div>
          <el-dropdown-menu slot="dropdown"
                            class="dropdown-top">
            <el-dropdown-item command="a">查看个人信息</el-dropdown-item>
            <el-dropdown-item command="b">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer';
Aplayer.disableVersionBadge = true;
export default {
  data () {
    return {
      fullClass: 'iconfont hicon iconquanping' /* class */,
      fullText: '全屏' /* tip */,
      isfull: false /* 是否在全屏状态 */
    };
  },
  computed: {
    /* 菜单栏开关 */
    vicon () {
      return this.$store.state.home.icon;
    },
    /* 菜单栏标题 */
    tipText () {
      return this.$store.state.home.tipText;
    },
    musicList () {
      let _curMusic = {};
      if (this.$store.state.music.musicList) {
        _curMusic = this.$store.state.music.musicList;
      }
      return _curMusic;
    },
    currentMusic () {
      return this.$store.state.music.currentMusic;
    }
  },
  watch: {
    // 换歌后自动播放
    '$store.state.music.currentMusic': function () {
      this.$nextTick(() => {
        this.$refs.aplayer.play();
      });
    }
  },
  created () {
    this.getAllMusic();
  },
  components: {
    Aplayer
  },
  methods: {
    // 改变Side状态
    changeSide () {
      this.$store.commit('switchShow');
    },
    // getAllMusic
    getAllMusic () {
      this.$get('/music').then(res => {
        this.$store.commit('setAllMusic', res.data);
      }).then(() => {
        this.getCurrentMusic();
      });
    },
    getCurrentMusic () {
      this.$store.commit('setCurrentMusic');
    },
    // go 音乐鉴赏
    setMusic () {
      this.$router.push('/music');
    },
    // 下拉菜单点击事件
    handClick (command) {
      switch (command) {
        case 'a':
          // 查看个人信息
          this.toAbout();
          break;
        case 'b':
          // 登出
          this.logOut();
          break;
        case 'm':
          // 歌曲设置
          this.setMusic();
          break;
        default:
          break;
      }
    },
    // 查看具体信息
    checkMsg () {
      this.$router.push('/message');
    },
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement;
      if (this.isfull) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.isfull = !this.isfull;
      this.fullText = this.isfull ? '取消全屏' : '全屏';
      this.fullClass = this.isfull ? 'iconfont hicon iconcaozuo-quanping-shousuo' : 'iconfont hicon iconquanping';
    },
    // 个人信息
    toAbout () {
      this.$router.push('/about');
    },
    // 登出
    logOut () {
      this.$router.push('/login');
      this.$clearls();
      setTimeout(() => {
        this.$LZCMessage('您已登出', 'success');
      });
    }
  }
};
</script>
<style lang="scss">
@keyframes translateBox
{
0%   {transform: rotate(0deg)}
25%  {transform: rotate(90deg)}
50%  {transform: rotate(180deg)}
75%  {transform: rotate(270deg)}
100%  {transform: rotate(360deg)}
}
.header {
  .img-col {
    text-align: left;
    padding-left: 5px;
  }
  .top-icon {
    padding: 0 10px;
    height: 60px;
    .aplayer {
      width: 40px;
      height: 40px;
      margin-top: 10px;
      border-radius: 50%;
      overflow: hidden;
      background-color: transparent;
      .aplayer-body .aplayer-pic {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 5px;
        background-color: transparent;
        animation: translateBox 2s linear infinite;
        .aplayer-button  {
          display: none;
        }
      }
    }
  }
  .message {
    display: flex;
    justify-content: space-around;
  }
}
</style>
