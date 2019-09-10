<template>
  <div class="tabs">
    <div class="tab_item"
         v-for="item in tabs"
         :key="item.id"
         :class="{Sclass: selectTab.name === item.name}"
         @click="switchTab(item)">
      <div class="tab_item_container">
        <div class="text">{{item.name}}</div>
        <div class="closeImg">
          <i class="el-icon-close"
             @click.stop="closeTab(item)"></i>
        </div>
      </div>
    </div>
    <div class="close_button">
      <el-dropdown trigger="hover"
                   @command="handleCommand">
        <span class="el-dropdown-link">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other"
                            @click="closeOther">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all"
                            @click="closeAll">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    tabs () {
      return this.$store.state.home.tabs
    },
    selectTab () {
      return this.$store.state.home.selectTab

    }
  },
  mounted () {
  },
  methods: {
    //关闭标签
    closeTab (value) {
      this.$store.commit('closeTab', value)
      let len = this.tabs.length
      if (len) {
        let item = this.tabs[len - 1]
        this.switchTab(item)
      }
    },
    //切换标签
    switchTab (value) {
      this.$store.commit('selectTab', value)
      this.$router.push(value.path)
    },
    //下拉菜单点击事件处理
    handleCommand (command) {
      if (command === 'other') {
        this.closeOther()
      }
      else {
        this.closeAll()
      }
    },
    //关闭其他标签
    closeOther () {
      this.$store.commit('closeOther')
    },
    //关闭全部标签
    closeAll () {
      this.$store.commit('closeAll')
    }
  }
}
</script>
<style lang="scss" scoped>
.Sclass {
  background-color: #fff !important;
  color: #000 !important;
  .el-icon-close {
    display: inline-block !important;
  }
}
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .close_button {
    position: fixed;
    right: 0;
    padding: 0 10px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background-color: #bbffff;
  }
  .tab_item {
    margin-right: 2px;
    position: relative;
    width: 100px;
    height: 35px;
    cursor: pointer;
    line-height: 35px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    .tab_item_container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .text {
        width: 70%;
        font-size: 14px;
      }
      .el-icon-close {
        display: none;
      }
    }
  }
  .tab_item:hover {
    background-color: #fff;
    color: #000;
    .el-icon-close {
      display: inline-block;
    }
    .el-icon-close:hover {
      background-color: #ddd;
      padding: 2px;
      border-radius: 50%;
    }
  }
}
</style>