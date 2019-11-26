<template>
  <div class="login">
    <div class="box">
      <div class="title">
        IT之家管理系统
      </div>
      <div class="account">
        <el-input placeholder="请输入账号"
                  @keyup.enter.native="jumpNext"
                  v-model="account"></el-input>
      </div>
      <div class="password">
        <el-input type="password"
                  ref="inputPassword"
                  placeholder="请输入密码"
                  @keyup.enter.native="Login"
                  v-model="password"></el-input>
      </div>
      <div>
        <el-button class="btn"
                   :loading="loading"
                   @click="Login">登 录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      account: 'test',
      password: '123456',
      loading: false
    };
  },
  methods: {
    //  密码框获取焦点
    jumpNext () {
      this.$refs.inputPassword.focus();
    },
    //  登录
    Login () {
      if (!this.account) {
        this.$LZCMessage('账号不能为空', 'error');
      } else if (!this.password) {
        this.$LZCMessage('密码不能为空', 'error');
      } else {
        this.loading = true;
        this.$post('/login', { account: this.account, password: this.password }).then(res => {
          if (res.code) {
            this.loading = false;
            this.$LZCMessage(res.message, 'success');
            let initItem = {
              name: 'index',
              title: '门户首页',
              path: '/index'
            };
            //  缓存用户信息和标签初始化信息
            this.$setls('user', this.account);
            this.$store.commit('initTags', initItem);
            this.$setls('currentTag', JSON.stringify(initItem));
            this.$setls('tags', JSON.stringify(initItem));
            setTimeout(() => {
              this.$router.push('/index');
            }, 1000);
          } else {
            this.loading = false;
            this.$LZCMessage(res.message, 'error');
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background-image: url('http://img95.699pic.com/photo/50046/0585.jpg_wh300.jpg');
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  .box {
    position: absolute;
    width: 350px;
    top: calc(50% - 125px);
    left: calc(50% - 175px);
    background: #fafafa;
    box-shadow: 0 5px 3px 1px #333;
    border-radius: 10px;
    padding: 20px 20px;
    .title {
      font: {
        size: 20px;
        weight: 550;
      }
    }
    .account {
      margin: 20px 0 20px;
    }
    .btn {
      width: 100%;
      font-size: 16px;
      margin-top: 20px;
      background: blue;
      font-weight: 550;
      color: #fff;
    }
  }
}
</style>
