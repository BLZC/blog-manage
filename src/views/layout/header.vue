<template>
  <div class="header">
    <el-row>
      <el-col :span="3"
              class="img-col">
        <el-tooltip class="item"
                    effect="dark"
                    :content="tipText"
                    placement="right">
          <img class="icon"
               :src="vicon"
               @click="changeSide" />
        </el-tooltip>
      </el-col>
      <el-col :span="2"
              :offset="17"
              class="message">
        <el-badge :value="12"
                  class="item">
          <i class="iconfont iconxiaoxi"></i>
        </el-badge>
      </el-col>
      <el-col :span="2"
              class="information">
        <el-dropdown size="small"
                     placement="bottom">
          <span class="el-dropdown-link">
            <i class="iconfont iconxiugaitouxiang"></i>
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
.header {
  .img-col {
    text-align: left;
    padding-left: 5px;
    .icon {
      height: 20px;
      width: 20px;
      text-align: left;
    }
  }
  .el-badge__content.is-fixed {
    top: 14px !important;
  }
}
</style>