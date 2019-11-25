<template>
  <div class="message">
    <Drawer :visable="visable"
            :data="propData"></Drawer>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane :label="'未读消息('+msg_no+')'"
                   name="msg_no">
        <div class="list"
             v-for="(item, index) in list"
             :key="index"
             @click="showDetail(item)">
          <el-row>
            <el-col :span="22"
                    class="title">
              {{item.title}}
            </el-col>
            <el-col :span="2"
                    class="time">
              {{item.time}}
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
        <el-button type="primary"
                   size="small">全部标为已读</el-button>
      </el-tab-pane>
      <el-tab-pane :label="'已读消息('+msg_yes+')'"
                   name="msg_yes">
        <div class="list"
             v-for="(item, index) in list"
             :key="index"
             @click="showDetail(item)">
          <el-row>
            <el-col :span="20"
                    class="title">
              {{item.title}}
            </el-col>
            <el-col :span="2"
                    class="time">
              {{item.time}}
            </el-col>
            <el-col :span="2"
                    class="delete">
              <el-button type="danger"
                         @click.stop="Delete"
                         size="mini">删除</el-button>
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
        <el-button type="danger"
                   size="small">删除全部</el-button>
      </el-tab-pane>
      <el-tab-pane :label="'回收站('+msg_done+')'"
                   name="msg_done">
        <div class="list"
             v-for="(item, index) in list"
             :key="index"
             @click="showDetail(item)">
          <el-row>
            <el-col :span="20"
                    class="title">
              {{item.title}}
            </el-col>
            <el-col :span="2"
                    class="time">
              {{item.time}}
            </el-col>
            <el-col :span="2"
                    class="delete">
              <el-button size="mini"
                         @click.stop="Reset">还原</el-button>
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
        <el-button type="danger"
                   size="small">清空回收站</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      visable: {
        show: false,
        title: '消息详情'
      },
      activeName: 'msg_no',
      msg_no: 10,
      msg_yes: 12,
      msg_done: 122,
      propData: {},
      list: [
        {
          id: 1,
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          content: 'exports 本身仅仅是一个普通的空对象，即 {}，它专门用来声明接口，本质上是通过它为模块闭包的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，所以可以用其他东西来代替',
          time: '2019-1-22'
        },
        {
          id: 2,
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          content: '',
          time: '2019-2-1'
        }
      ]
    };
  },
  components: {
    Drawer: () => import('../../components/Drawer')
  },
  methods: {
    // tab切换
    handleClick (tab, event) {
      console.log(tab, event);
    },
    // 显示消息详情
    showDetail (item) {
      this.visable.show = true;
      this.propData = item;
    },
    // 还原
    Reset () {
      console.log('还原');
    },
    // 删除
    Delete () {
      console.log('删除');
    }
  }

};
</script>
<style lang="scss" scoped>
.message {
  .el-divider--horizontal {
    margin: 0 !important;
  }
  .list {
    height: 50px;
    line-height: 50px;
    padding: 10px 0px;
    cursor: pointer;
    .title {
      text-align: left;
      color: #409eff;
      font-size: 13px;
    }
    .time {
      font-size: 12px;
      color: #999;
    }
  }
  .el-button {
    margin-top: 10px;
  }
}
</style>
