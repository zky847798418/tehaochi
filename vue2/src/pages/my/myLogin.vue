<template>
  <div class="myLogin">
    <v-header :title="title" :back="back"></v-header>
    <div class="myLogin-top">
      <div class="myLogin-input">
        <mt-field label="账号" placeholder="手机/用户名/邮箱" v-model="account"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <div class="myLogin-input-rule">
          <p>{{checkInfo}}</p>
        </div>
      </div>
      <div class="myLogin-btn">
        <mt-button type="primary" @click.native="login">登录</mt-button>
      </div>
      <div class="myLogin-other">
        <router-link to="/myForget">忘记密码？</router-link>
        <router-link to="/myRegist" style="float: right">立即注册</router-link>
      </div>
    </div>
    <div class="login-out-social-login">
      <h4><span>社交账号登录</span></h4>
      <div class="login-out-social-login-icon">
        <a  class="mint-iconfont icon-qq"></a>
        <a  class="mint-iconfont icon-weixin"></a>
        <a  class="mint-iconfont icon-weibo"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'
export default {
  name: 'myLogin',
  components: {
    'v-header': header
  },
  data () {
    return {
      account: '',
      password: '',
      checkInfo: '',
      title:'TeHaoChi',
      back: true,
      go: '/my'
    }
  },
  methods: {
    login(){
      if (this.account === 'admin' &&this.password === '123456') {
        localStorage.token = 'true'
        this.$store.commit('LOGIN_TOKEN', Boolean(localStorage.token))
        this.$router.replace({
          path: this.go
        })
      } else{
        this.checkInfo = '账号或密码错误'
      }
    }
  },
  create () {
  },
  mounted () {
    if (this.$route.query.redirect) {
      this.go = this.$route.query.redirect
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
