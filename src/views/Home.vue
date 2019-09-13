<template>
  <div class="home">
    <el-container>
      <Side></Side>
      <el-container>
        <el-header>

          <Head></Head>
        </el-header>
        <Tabs></Tabs>
        <el-main>
          <el-collapse-transition>
            <router-view />
          </el-collapse-transition>
        </el-main>
        <el-footer>
          <Foot></Foot>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Head from './layout/header'
import Side from './layout/side'
import Foot from './layout/footer'
import Tabs from './layout/tabs'
export default {
  name: 'home',
  data () {
    return {

    };
  },
  components: {
    Head,
    Side,
    Foot,
    Tabs

  },
  methods: {

  }
};
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  background-image: url('../../public/images/main.jpg');
  .el-container {
    height: 100%;
    .el-container {
      .el-header,
      .el-footer {
        padding-left: 0 !important;
        background-color: transparent;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
      .el-footer {
        background-color: #f2f6fc;
        height: 40px !important;
        line-height: 40px;
      }
      .tabs {
        width: 100%;
        height: 35px;
        background-color: transparent;
      }
      .el-main {
        background-color: #fff;
        color: #333;
        text-align: center;
        padding: 15px 20px 5px;
      }
    }
  }
}
</style>
