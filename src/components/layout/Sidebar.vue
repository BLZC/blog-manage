<template>
  <div class="side">
    <el-aside width="150px"
              :class="{hideClass: isCollapse }">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-collapse-transition>
          <el-menu default-active=1
                   unique-opened
                   class="el-menu-vertical-demo"
                   background-color="transparent"
                   text-color="#fff"
                   :collapse="isCollapse"
                   router
                   active-text-color="#ffd04b">
            <div class="sildLogo"
                 @click="linkTo">
              {{text}}
            </div>
            <template v-for="item in lists">
              <template v-if="item.children">
                <el-submenu :index="item.path"
                            :key="item.id">
                  <template slot="title">
                    <i :class="item.icon" />
                    <span>{{item.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item v-for="vitem in item.children"
                                  :key="vitem.id"
                                  :index="vitem.path">
                      <template slot="title">{{vitem.title}}</template>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.path"
                              :key="item.id">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-collapse-transition>
      </el-scrollbar>
    </el-aside>
  </div>
</template>
<script>
export default {
  data () {
    function * createId () {
      let id = 0;
      while (true) {
        yield ++id;
      }
    }
    const creID = createId();
    return {
      lists: [
        {
          id: creID.next().value,
          title: '信息管理',
          path: '1',
          icon: 'iconfont iconkerenxinxiguanli',
          children: [
            {
              id: creID.next().value,
              title: '个人信息',
              path: '/about',
              name: 'about',
              icon: ''
            },
            {
              id: creID.next().value,
              title: '消息列表',
              path: '/message',
              name: 'message',
              icon: ''
            }
          ]
        },
        {
          id: creID.next().value,
          title: '图表库',
          path: '2',
          icon: 'iconfont icontubiao',
          children: [
            {
              id: creID.next().value,
              title: 'schart图表',
              path: '/schart',
              name: 'schart',
              icon: ''
            },
            {
              id: creID.next().value,
              title: 'dataV',
              path: '/dataV',
              name: 'dataV',
              icon: ''
            }
          ]
        },
        {
          id: creID.next().value,
          title: '博客系统',
          path: '4',
          icon: 'iconfont iconbokeblogger3',
          children: [
            {
              id: creID.next().value,
              title: '标签管理',
              path: '/menuManage',
              name: 'menuManage',
              icon: ''
            },
            {
              id: creID.next().value,
              title: '用户管理',
              path: '/userManage',
              name: 'userManage',
              icon: ''
            },
            {
              id: creID.next().value,
              title: '文章管理',
              path: '/articleManage',
              name: 'articleManage',
              icon: ''
            },
            {
              id: creID.next().value,
              title: '资源管理',
              path: '/staticResource',
              name: 'staticResource',
              icon: ''
            }
          ]
        },
        {
          id: creID.next().value,
          title: '在线聊天',
          path: '5',
          icon: 'iconfont iconliaotian',
          children: [
            {
              id: creID.next().value,
              title: '在线聊天',
              path: '/chat',
              name: 'chat',
              icon: ''
            },
            {
              id: creID.next().value,
              title: '音乐鉴赏',
              path: '/music',
              name: 'music',
              icon: ''
            }
          ]
        },
        {
          id: creID.next().value,
          title: '视频插件',
          path: '6',
          icon: 'iconfont iconshipin',
          children: [
            {
              id: creID.next().value,
              title: '视频播放',
              path: '/videoPlay',
              name: 'videoPlay',
              icon: ''
            }
          ]
        },
        {
          id: creID.next().value,
          title: '测试',
          path: '7',
          icon: 'iconfont iconceshidianwei',
          children: [
            {
              id: creID.next().value,
              title: '测试',
              path: '/test',
              name: 'test',
              icon: ''
            }
          ]
        },
        {
          id: creID.next().value,
          title: '系统配置',
          path: '8',
          icon: 'iconfont iconxitong',
          children: [
            {
              id: creID.next().value,
              title: '404',
              path: '/404',
              name: 'errpage',
              icon: ''
            }
          ]
        }
      ]
    };
  },
  computed: {
    // 是否收缩左侧菜单
    isCollapse () {
      return this.$store.state.home.isCollapse;
    },
    // logo文字
    text () {
      return this.$store.state.home.text;
    }
  },
  methods: {
    // 添加标签
    addTags (item) {
      let JS = JSON.stringify;
      if (JS(this.tags).indexOf(JS(item)) === -1) {
        if (this.canAdd) {
          this.$store.commit('addTags', item);
          this.$store.commit('selectTag', item);
          this.$router.push(item.path);
        } else {
          this.$LZCMessage('你打开的标签太多了，请关闭一些不用的标签后再尝试打开', 'warning');
        }
      } else {
        this.$store.commit('addTags', item);
        this.$store.commit('selectTag', item);
        this.$router.push(item.path);
      }
    },
    // 跳转首页
    linkTo () {
      this.$router.push('/index');
    }
  }
};
</script>
<style lang="scss" scoped>
.side {
  .el-aside {
    opacity: 1;
    color: #333;
    text-align: center;
    height: 100%;
    .sildLogo {
      cursor: pointer;
      font-size: 18px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-weight: 700;
      color: #fff;
      text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
        5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black;
    }
    .el-menu {
      height: 100%;
      text-align: left;
      padding-right: 1px;
      border-right: none !important;
      .el-submenu {
        font-weight: 550;
        .iconfont {
          margin-right: 10px;
        }
        .el-menu-item-group {
          .el-menu-item {
            padding-left: 55px !important;
            font-weight: 500;
          }
          .el-menu-item:hover {
            background: rgba(0, 0, 0, 0.3) !important;
          }
        }
      }
      .el-menu-item {
        min-width: 100px;
        font-weight: 550;
        .iconfont {
          margin-right: 10px;
        }
      }
      .el-menu-item:hover {
        background: rgba(0, 0, 0, 0.3) !important;
      }
    }
  }
}
</style>
