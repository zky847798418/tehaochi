<template>
  <div class="myLogin">
    <v-header :title="title" :back="back"></v-header>
    <div class="myLogin-top">
      <div class="myLogin-input">
        <mt-field label="账号" placeholder="手机/用户名/邮箱" v-model="access"></mt-field>
        <mt-field label="设置密码" placeholder="请输入密码" type="password" ></mt-field>
        <mt-field label="确认密码" placeholder="请输入密码" type="password" ></mt-field>
        <div class="myLogin-input-rule">
          <p></p>
        </div>
      </div>
      <div class="myLogin-btn">
        <mt-button type="primary" @click="login">注册</mt-button>
      </div>
      <div class="myLogin-other">
        <span>已有账号？请</span>
        <router-link to="/myLogin">直接登录</router-link>
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
    name: 'myRegist',
    components: {
      'v-header': header
    },
    data () {
      return {
        access:"",
        title:'TeHaoChi',
        back: true
      }
    },
    methods: {
      login(){
        if (this.access) {
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
