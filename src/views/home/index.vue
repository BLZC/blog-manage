<template>
  <div class="home-index">
    <Drawer :visable="visable"
            :data="propData"></Drawer>
    <Add-Todo :visable="addvisable"></Add-Todo>
    <div class="home-top lzc-flex">
      <div class="home-top-left">
        <el-card shadow="hover"
                 class="home-top-left-top"
                 @click.native="Linkto('/about')">
          <el-row>
            <el-col :span="10">
              <div class="avatar-block">
                <el-avatar shape="square"
                           :size="100"
                           fit="fill"
                           :src="url"></el-avatar>
              </div>
            </el-col>
            <el-col class="ds lzc-flex"
                    :span="14">
              <div class="ds1">Admin</div>
              <div class="ds2">超级管理员</div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <div class="db lzc-flex">
            <span>上次登录时间:</span>
            <span>2019/2/1 1:28</span>
          </div>
          <div class="db lzc-flex">
            <span>上次登录地点:</span>
            <span>苏州工业园区</span>
          </div>
        </el-card>
        <div class="home-top-left-bottom">
          <el-card shadow="hover">
          </el-card>
        </div>
      </div>
      <div class="home-top-right">
        <div class="home-top-right-top lzc-flex">
          <el-card shadow="hover"
                   v-for="item in topList"
                   :key="item.id">
            <div class="topList lzc-flex"
                 :class="item.className"
                 @click="Linkto(item.link, 1)">
              <div class="listLeft">
                <i :class="item.icon" />
              </div>
              <div class="listRight">
                <div class="content">{{item.content}}</div>
                <div class="mintitle">{{item.title}}</div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="home-top-right-bottom">
          <el-card class="box-card"
                   shadow="hover">
            <div slot="header"
                 class="clearfix">
              <span class="card-title">待办事项</span>
              <el-button style="float: right; padding: 3px 5px"
                         type="text">删除</el-button>
              <el-button style="float: right; padding: 3px 5px"
                         type="text"
                         @click="Addtodo">添加</el-button>
              <el-button style="float: right; padding: 3px 5px"
                         type="text"
                         @click="Selectall">{{checkalltext}}</el-button>
            </div>
            <el-checkbox-group v-model="checkTodo"
                               @change="handleCheckedTodoChange"
                               class="mycheckbox lzc-flex">
              <div class="checkItem"
                   v-for="item in Todolist"
                   :key="item.id">
                <el-checkbox :label="item.id">
                  <el-row>
                    <el-col :span="20">
                      <div @dblclick="Lookdetail(item)">{{item.title}}</div>
                    </el-col>
                    <el-col :span="4"
                            class="time">
                      {{item.time}}
                    </el-col>
                  </el-row>
                </el-checkbox>
              </div>
            </el-checkbox-group>
          </el-card>
        </div>
      </div>
    </div>
    <div class="home-botttom"></div>
  </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
  name: 'index',
  data () {
    return {
      visable: {
        show: false,
        title: '任务详情'
      },
      checkalltext: '全选',
      addvisable: {
        show: false,
        title: '新增任务'
      },
      propData: {},
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      topList: [
        {
          id: 1,
          icon: 'iconfont iconwode',
          className: 'iconfont1',
          title: '注册用户数量',
          link: '/userManage',
          content: 2412
        },
        {
          id: 2,
          icon: 'iconfont iconfangwen',
          className: 'iconfont2',
          title: '访问量',
          link: '/userManage',
          content: 192311
        },
        {
          id: 3,
          icon: 'iconfont iconxiaoxi1',
          className: 'iconfont3',
          title: '消息数量',
          link: '/message',
          content: 3
        }
      ],
      ischeckall: false,
      checkTodo: [],
      Todolist: [
        {
          id: 1,
          title: '今天完善首页',
          content: '',
          time: '2019/9/23 9:59'
        },
        {
          id: 2,
          title: '今天优化代码',
          content: '',
          time: '2019/9/23 9:59'
        },
        {
          id: 3,
          title: '今天学习react',
          content: '',
          time: '2019/9/23 9:59'
        }
      ]
    };
  },
  components: {
    Drawer: () => import('../../components/Drawer'),
    AddTodo: () => import('./AddTodo')
  },
  methods: {
    // 页面跳转
    Linkto (path) {
      this.$router.push(path);
    },
    // 复选框状态改变
    handleCheckedTodoChange () {
      console.log(1);
    },
    // Todo detail
    Lookdetail (data) {
      this.visable.show = true;
      this.propData = data;
    },
    // Add todo
    Addtodo () {
      this.addvisable.show = true;
    },
    // 全选
    Selectall () {
      if (this.ischeckall) {
        this.ischeckall = false;
        this.checkalltext = '全选';
        this.checkTodo = [];
      } else {
        this.ischeckall = true;
        this.checkalltext = '取消全选';
        this.Todolist.forEach(item => {
          this.checkTodo.push(item.id);
        });
      }
    }
  }
};
</script>
<style lang="scss">
.home-index {
  .home-top {
    justify-content: space-between;
    .home-top-left {
      width: 30%;
      .home-top-left-top {
        cursor: pointer;
        height: 240px;
        .avatar-block {
          width: 80px;
          height: 80px;
        }
        .ds {
          height: 100px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .ds1 {
            font-size: 24px;
            font-weight: 550;
          }
          .ds2 {
            font-size: 20px;
            color: #666;
          }
        }
        .db {
          justify-content: space-between;
          color: #999;
          line-height: 24px;
        }
      }
      .home-top-left-bottom {
        margin-top: 20px;
        .el-card {
          height: 180px;
          .myschart {
            justify-content: space-around;
            .el-card {
              margin-top: 20px;
            }
          }
        }
      }
    }
    .home-top-right {
      width: 68%;
      margin-left: 2%;
      .home-top-right-top {
        height: 110px;
        justify-content: space-between;
        .el-card {
          cursor: pointer;
          width: 30%;
          height: 110px;
          border: none;
          .el-card__body {
            padding: 0px !important;
            .topList {
              color: #fff;
              .listLeft {
                width: 45%;
                height: 110px;
                .iconfont {
                  font-size: 36px;
                  line-height: 110px;
                }
              }
              .listRight {
                width: 55%;
                text-align: left;
                .content {
                  font-size: 24px;
                  font-weight: 550;
                }
              }
            }
            .iconfont1 {
              background: #66cdaa;
            }
            .iconfont2 {
              background: #6495ed;
            }
            .iconfont3 {
              background: #ee6a50;
            }
          }
        }
      }
      .home-top-right-bottom {
        margin-top: 20px;
        .el-card {
          height: 310px;
          text-align: left;
          .card-title {
            font-size: 16px;
            font-weight: 550;
          }
          .el-card__body {
            .mycheckbox {
              height: 210px;
              flex-direction: column;
              align-items: flex-start;
              // overflow-y: scroll;
              .checkItem {
                height: 30px;
                line-height: 30px;
                width: 100%;
                .el-checkbox {
                  width: 100%;
                  .el-checkbox__label {
                    width: 100%;
                    color: #1e90ff;
                    .time {
                      color: #999;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
