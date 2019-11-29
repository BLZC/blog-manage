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
  </div>
</template>
<script>
export default {
  name: 'music',
  data () {
    return {
    };
  },
  computed: {
    musicList () {
      return this.$store.state.music.musicList;
    }
  },
  methods: {
    Play (data) {
      this.$store.commit('setCurrentMusic', data);
      this.$cookies.set('currentMusic', data);
    }
  }
};
</script>
<style lang="scss" scoped>
  .music {
    color: #fff;
    .music-list {
      height: calc(100vh - 250px);
      .scopeTitle {
        cursor: pointer;
        color: #007fff;
      }
    }
  }
</style>
