<template>
  <div class="chat">
    <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="chat-content">
      <template v-for="(item, index) in messageList" >
        <el-card v-if="item.type === 'mine'" class="box-card"  :key="index" shadow="never" :body-style="bodyStyleMine">
          <div class="text item">
            {{item.msg }} &nbsp;&nbsp;&nbsp;&nbsp;
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          </div>
        </el-card>
        <el-card v-else class="box-card"  :key="index" shadow="never" :body-style="bodyStyle">
          <div class="text item">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            &nbsp;&nbsp;&nbsp;&nbsp;{{item.msg }}------{{item.userName}}
          </div>
        </el-card>
      </template>
    </div>
    </el-scrollbar>
    <el-row class="chat-input">
      <el-col :span="23">
        <el-input v-model="message" @keyup.enter.native="send"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" @click="send">发送</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      bodyStyle: {
        textAlign: 'left',
        padding: '10px'
      },
      bodyStyleMine: {
        textAlign: 'right',
        padding: '10px'
      },
      messageList: []
    };
  },
  mounted () {
    // 发送信息给服务端
    // this.$socket.emit('login', {
    //   userName: 'lzc'
    // });
    // 接收服务端的信息
    this.sockets.subscribe('sendMsg', (data) => {
      // console.log(data)
      this.messageList.push(data);
    });
  },
  methods: {
    send () {
      // 发送信息给服务端
      this.$socket.emit('send', {
        userName: this.$getls('user'),
        message: this.message
      });
      let _data = { msg: this.message, type: 'mine' };
      this.messageList.push(_data);
      this.message = '';
    }
  }
};
</script>
<style lang="scss">
  .chat {
    margin: 0 20px;
    .chat-content {
      height: calc(100vh - 250px);
      .el-card {
        border: none;
        &:last-child {
          .el-card__body {
            padding-bottom: 30px !important;
          }
        }
      }
    }
    .chat-input {
      margin-top: 20px;
    }
  }
</style>
