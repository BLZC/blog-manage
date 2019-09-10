<template>
  <div class="header">
    <el-row>
      <el-col :span="3"
              class="img-col">
        <el-tooltip class="item"
                    effect="dark"
                    :content="tipText"
                    placement="right">
          <i class="icon"
             :class="vicon"
             @click="changeSide"></i>
        </el-tooltip>
      </el-col>
      <el-col :span="2"
              :offset="17"
              class="message">
        <el-badge :value="12"
                  style="cursor:pointer"
                  class="item">
          <i class="iconfont iconxiaoxi hicon"></i>
        </el-badge>
      </el-col>
      <el-col :span="2"
              class="information">
        <el-dropdown size="small"
                     style="cursor:pointer"
                     placement="bottom">
          <span class="el-dropdown-link">
            <i class="iconfont iconxiugaitouxiang hicon"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看个人信息</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    vicon () {
      return this.$store.state.home.icon;
    },
    tipText () {
      return this.$store.state.home.tipText;
    }
  },
  mounted () {

  },
  methods: {
    changeSide () {
      this.$store.commit('switchShow')
    }
  }
}
</script>
<style lang="scss" scope>
.hicon {
  color: #fff;
  font-size: 18px;
}
.header {
  .img-col {
    text-align: left;
    padding-left: 5px;
    cursor: pointer;
    .icon {
      font-size: 20px;
      color: #fff;
    }
  }
  .el-badge__content.is-fixed {
    top: 14px !important;
  }
}
</style>