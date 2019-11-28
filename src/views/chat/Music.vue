<template>
  <div class="music">
    <div class="music-list">
      <el-table
        :data="musicList"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="歌曲">
          <template slot-scope="scope">
            <span class="scopeTitle" @click="Play(scope.row)">{{scope.row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="artist"
          label="歌手"
          width="180">
        </el-table-column>
        <el-table-column
          prop="time"
          label="时长"
          width="180">
        </el-table-column>
      </el-table>
    </div>
    <aplayer autoplay
            :music="currentMusic"
    />
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer';
export default {
  name: 'music',
  data () {
    return {
      currentMusic: {},
      musicList: [
        {
          id: 1,
          title: '原来我是第三者',
          time: '3.48',
          artist: '威仔 / 格子兮',
          src: 'http://58.216.6.147/amobile.music.tc.qq.com/C400000IdTgQ3BXU0C.m4a?guid=3475111600&vkey=CFEB09A42EDBCE9285B475FF19BACBBD58E644840678F2D64C39D0E8D7B8E3CCDB18B700391A020F893B69EEAE1C06161C2B8035887E3166&uin=4824&fromtag=66',
          pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004LZt0o4RQc3S.jpg?max_age=2592000'
        },
        {
          id: 2,
          title: '骚年',
          time: '3.47',
          artist: '吉佑社',
          pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vTUep3Y8pEX.jpg?max_age=2592000',
          src: 'http://58.216.6.142/amobile.music.tc.qq.com/C400002nttjJ1ifsFs.m4a?guid=3475111600&vkey=1057461D7E83F623BD78F3712BCFCF5F4CE09B5F6C1BB562236C12709A2FC5DFD1E327EBD539D8F1522898B437C6C9A746EEF287C1B8BB9E&uin=4824&fromtag=66'
        }
      ]
    };
  },
  components: {
    Aplayer
  },
  created () {
    this.currentMusic = this.musicList[0];
  },
  methods:{
    Play (data) {
      this.currentMusic = data;
    }
  }
};
</script>
<style lang="scss" scoped>
  .music {
    // background-color: rgba(64, 96, 160, 0.8);
    color: #fff;
    .music-list {
      // width: 75%;
      height: calc(100vh - 250px);
      .scopeTitle {
        cursor: pointer;
        color: #007fff;
      }
    }
  }
</style>
