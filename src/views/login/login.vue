<template name="component-name">
  <div class="login">
    <div class="box">
      <div class="title">
        API管理系统
      </div>
      <div class="account">
        <el-input placeholder="请输入账号"
                  v-model="account"></el-input>
      </div>
      <div class="password">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="password"></el-input>
      </div>
      <div>
        <el-button class="btn"
                   :loading="loading"
                   @click="Login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      account: '',
      password: '',
      loading: false
    }
  },
  methods: {
    Login () {
      if (!this.account) {
        this.$message({
          message: '账号不能为空',
          type: 'error'
        })
      }
      else if (!this.password) {
        this.$message({
          message: '密码不能为空',
          type: 'error'
        })
      } else {
        this.loading = true
        this.$post('/login', { account: this.account, password: this.password }).then(res => {
          if (res.status) {
            this.loading = false
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            setTimeout(() => {
              localStorage.setItem('user', res.account)
              this.$router.push('/index')
            }, 1000)

          }
          else {
            this.loading = false
            this.$message({
              message: '登录失败，请确认您的账号密码是否正确',
              type: 'error'
            })
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  background-image: url('/images/bg.jpg');
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  .box {
    position: absolute;
    width: 350px;
    height: 250px;
    background-color: #fafafa;
    box-shadow: 5px 5px 3px 1px #333;
    top: 50%;
    left: 50%;
    margin-top: -125px;
    margin-left: -175px;
    padding: 20px 20px;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 550;
    }
    .account {
      margin: 20px 0 20px;
    }
    .btn {
      width: 100%;
      margin-top: 20px;
      background-color: blue;
      color: #fff;
    }
  }
}
</style>