<template>
  <div class="side">
    <el-aside width="150px"
              :class="{hideClass: isCollapse }">
      <el-collapse-transition>
        <el-menu default-active=1
                 class="el-menu-vertical-demo"
                 background-color="transparent"
                 text-color="#fff"
                 :collapse="isCollapse"
                 router
                 active-text-color="#ffd04b">
          <div class="sildLogo">
            {{text}}
          </div>
          <template v-for="item in lists">
            <template v-if="item.children">
              <el-submenu :index="item.id.toString()"
                          :key="item.id">
                <template slot="title">
                  <i :class="item.icon" />
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="vitem in item.children"
                                :key="vitem.id"
                                :index="item.id+'-'+vitem.id"
                                :route="{'path': vitem.path}"
                                @click="addTabs(vitem)">
                    <template slot="title">{{vitem.name}}</template>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.id.toString()"
                            :key="item.id"
                            :route="{'path': item.path}"
                            @click="addTabs(item)">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-collapse-transition>
    </el-aside>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        {
          id: 1,
          name: '门户首页',
          path: '/index',
          icon: 'iconfont iconshouye'
        },
        {
          id: 2,
          name: '商城系统',
          icon: 'iconfont iconshangcheng1',
          children: [
            {
              id: 3,
              name: '商品分类',
              path: '/classification',
              icon: ''
            },
            {
              id: 4,
              name: '商品列表',
              path: '/list',
              icon: ''
            },
            {
              id: 5,
              name: '商品属性',
              path: '/attribute',
              icon: ''
            }
          ]
        },
        {
          id: 6,
          name: '博客系统',
          icon: 'iconfont iconbokeblogger3',
          children: [
            {
              id: 7,
              name: '用户管理',
              path: '/userManage',
              icon: ''
            },
            {
              id: 8,
              name: '文章管理',
              path: '/articleManage',
              icon: ''
            },
            {
              id: 9,
              name: '评论管理',
              path: '/plManage',
              icon: ''
            }
          ]
        }
      ]
    }
  },
  mounted () {

  },
  computed: {
    //是否收缩左侧菜单
    isCollapse () {
      return this.$store.state.home.isCollapse
    },
    //logo文字
    text () {
      return this.$store.state.home.text
    }
  },
  methods: {
    //添加标签
    addTabs (item) {
      this.$store.commit('addTabs', item)
      this.$store.commit('selectTab', item)
    }
  }
}
</script>
<style lang="scss" >
.hideClass {
  width: 64px !important;
  overflow: hidden;
}
.el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.side {
  .el-aside {
    opacity: 1;
    color: #333;
    text-align: center;
    height: 100%;
    .sildLogo {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-weight: 700;
      color: #fff;
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
            background-color: rgba(0, 0, 0, 0.3) !important;
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
        background-color: rgba(0, 0, 0, 0.3) !important;
      }
    }
  }
}
</style>