<template>
  <div class="myschart lzc-flex">
    <el-card shadow="hover">
      <schart class="wrapper"
              canvasId="Schart1"
              type="pie"
              :data="data"
              :options="options1"></schart>
    </el-card>
    <el-card shadow="hover">
      <schart class="wrapper"
              canvasId="Schart2"
              type="bar"
              :data="data"
              :options="options2"></schart>
    </el-card>
    <el-card shadow="hover">
      <schart class="wrapper"
              canvasId="Schart3"
              type="line"
              :data="data"
              :options="options3"></schart>
    </el-card>
    <el-card shadow="hover">
      <schart class="wrapper"
              canvasId="Schart4"
              type="ring"
              :data="data"
              :options="options4"></schart>
    </el-card>
  </div>
</template>
<script>
import Schart from 'vue-schart';
export default {
  name: 'myschart',
  data () {
    return {
      data: [
        { name: '2014', value: 123 },
        { name: '2015', value: 456 },
        { name: '2016', value: 789 },
        { name: '2017', value: 456 },
        { name: '2018', value: 123 },
        { name: '2019', value: 156 }
      ],
      options1: {
        title: '饼图'
      },
      options2: {
        title: '柱状图'
      },
      options3: {
        title: '线性图'
      },
      options4: {
        title: '环状图'
      }
    };
  },
  components: {
    Schart
  }
};
</script>
<style lang="scss" scoped>
.myschart {
  justify-content: space-around;
  .el-card {
    margin-top: 20px;
    .wrapper {
      width: 500px;
      height: 300px;
      .Schart1,
      .Schart2,
      .Schart3,
      .Schart4 {
        height: 80%;
        display: inline-block;
        margin: 10px;
      }
    }
  }
}
</style>
