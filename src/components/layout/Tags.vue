<!-- Tags组件 -->
<template>
  <div class="tags lzc-flex"
       id="tags"
       ref="tags">
    <div class="tab-item lzc-flex"
         ref="tab-item"
         id="tab-item"
         v-for="(item, index) in tags"
         :key="index"
         :class="{activeClass: selectTag.name === item.name}"
         @click="switchTab(item)">
      <div class="text">{{item.title}}</div>
      <div class="icon"> <i class="el-icon-close"
           @click.stop="closeTab(item)"></i></div>
    </div>
    <div class="close-button">
      <el-dropdown trigger="click"
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
    return {};
  },
  computed: {
    /* 所有已经打开的标签 */
    tags () {
      return this.$store.state.home.tags;
    },
    /* 当前选中的标签 */
    selectTag () {
      return this.$store.state.home.selectTag;
    },
    /* 是否可以继续打开标签 */
    canAdd () {
      return this.$store.state.home.canAdd;
    }
  },
  watch: {
    /**
     * 监听路由变化
     * TODO: 注意直接在地址栏改变路由的情况无法监听
     */
    $route (newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  mounted () {
    this.Init();
  },
  methods: {
    // 计算tags宽度
    Init () {
      let len = this.$refs.tags.scrollWidth;
      this.$store.commit('hasWidth', len);
      this.$store.commit('restoreTags');
      let route = this.$route;
      this.setTags(route);
    },
    // 设置标签
    setTags (route) {
      let newItem = {
        title: route.meta.title,
        path: route.fullPath,
        name: route.name
      };
      // 该页面标签是否已经存在 ？ 跳转到该标签 ：新增并跳转
      const isExist = this.tags.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.canAdd) {
          this.$store.commit('addTags', newItem);
          this.$store.commit('selectTag', newItem);
        } else {
          this.$LZCMessage('你打开的标签太多了，请关闭一些不用的标签后再尝试打开', 'warning');
        }
      } else {
        this.$store.commit('selectTag', newItem);
      }
    },
    // 关闭标签
    closeTab (value) {
      this.$store.commit('closeTab', value);
      let len = this.tags.length;
      if (len) {
        let item = this.tags[len - 1];
        this.switchTab(item);
        this.$setls('currentTag', JSON.stringify(item));
      }
    },
    // 切换标签
    switchTab (value) {
      this.$router.push(value.path);
    },
    // 下拉菜单点击事件处理
    handleCommand (command) {
      if (command === 'other') {
        this.closeOther();
      } else {
        this.closeAll();
      }
    },
    // 关闭其他标签
    closeOther () {
      this.$store.commit('closeOther');
    },
    // 关闭全部标签
    closeAll () {
      this.$store.commit('closeAll');
      let len = this.tags.length;
      if (len) {
        let item = this.tags[len - 1];
        this.switchTab(item);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.tags {
  .close-button {
    position: fixed;
    right: 20px;
    width: 100px;
    overflow: hidden;
    padding: 0 10px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background: #bbffff;
  }
  .tab-item {
    justify-content: center;
    margin-right: 2px;
    position: relative;
    width: 100px;
    height: 35px;
    cursor: pointer;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    .el-icon-close {
      display: none;
    }
  }
  .activeClass,
  .tab-item:hover {
    background: #f0f0f0;
    color: #000;
    .text {
      width: 70%;
      text-align: right;
    }
    .icon {
      width: 30%;
      .el-icon-close {
        display: inline-block;
        font-size: 16px;
        font-weight: 650 !important;
      }
      .el-icon-close:hover {
        background: #ddd;
        padding: 2px;
        border-radius: 50%;
      }
    }
  }
}
</style>
