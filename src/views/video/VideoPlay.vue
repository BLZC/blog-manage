<template>
  <div class="player">
    <div class="text">视频播放采用的是vue的一个插件详情可以了解<span class="link"
            @click="winOpen">Vue-Video-Player</span></div>
    <video-player class="vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"
                  @ready="playerReadied"
                  @statechanged="playerStateChanged($event)">
    </video-player>
  </div>
</template>

<script>
/**
 * TODO: 自定义样式有时候不生效
 */
import { videoPlayer } from 'vue-video-player';
import 'video.js/dist/video-js.css';
export default {
  data () {
    return {
      // videojs options
      playerOptions: {
        height: '360',
        autoplay: false,
        muted: false /* 静音？ */,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      }
    };
  },
  components: {
    videoPlayer
  },
  mounted () {
    setTimeout(() => {
      this.player.muted(false);
    }, 5000);
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    winOpen () {
      window.open('https://surmon-china.github.io/vue-video-player/');
    },
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // seek to 10s
      player.currentTime(10);
      // console.log('example 01: the player is readied', player)
    }
  }
};
</script>
<style lang="scss">
.player {
  .text {
    text-align: left;
    font-size: 16px;
    .link {
      cursor: pointer;
      color: blue;
    }
  }
  .vjs-custom-skin {
    .video-js .vjs-big-play-button {
      width: 100px;
      height: 50px;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -50px;
      line-height: 50px;
    }
    .video-js .vjs-tech {
      padding: 10px;
    }
  }
}
</style>
