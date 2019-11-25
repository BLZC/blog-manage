<template>
  <div class="home">
    <el-container class="outcontainer">
      <sidebar></sidebar>
      <el-container>
        <el-header>
          <basic-header></basic-header>
        </el-header>
        <tags></tags>
        <el-main>
          <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-collapse-transition>
              <el-card class="box-card">
                <keep-alive :include="Tags">
                  <router-view />
                </keep-alive>
              </el-card>
            </el-collapse-transition>
          </el-scrollbar>
        </el-main>
        <el-footer>
          <basic-footer></basic-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    Tags () {
      return this.$store.state.home.taglist;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background: {
    image: url('http://img95.699pic.com/photo/40009/2587.jpg_wh300.jpg');
    size: 100% 100%;
  }
  .outcontainer {
    height: 100%;
    margin-right: 20px;
    .el-container {
      .el-header,
      .el-footer {
        background: transparent;
        line-height: 60px;
      }
      .el-footer {
        color: #fff;
        height: 40px !important;
        line-height: 40px;
      }
      .tags {
        width: 100%;
        height: 35px;
        background: transparent;
      }
      .el-main {
        background: #f0f0f0;
        padding: 15px 20px 5px;
      }
    }
  }
}
</style>
