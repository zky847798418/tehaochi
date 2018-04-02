<template>
  <div class="my">
    <v-header :title="title" :back="back"></v-header>
    <div class="myCell myCell-one">
      <mt-cell >
        <div  class="center-head" slot="title" @click="goLogin">
          <span class="customer-img"></span>
            <span class="center-head-info">
              <p class="center-head-name">{{info.userName}}</p>
              <p class="center-head-points">
                <i class="mint-iconfont icon-liwu"></i>
                {{info.experience}}
              </p>
            </span>
        </div>
      </mt-cell>
    </div>
    <div class="myCell myCell-tow" v-if="loginSure">
      <mt-cell class="border">
        <div slot="title" style="text-align: left">
          <i  class="mint-iconfont icon-icon-test1" style="font-size: 0.6rem"></i>
          <span style="vertical-align: text-top">我的订单</span>
        </div>
      </mt-cell>
      <mt-cell>
        <div slot="title" class="myCell-have">
          <router-link  to="/myHave">
            <i  class="mint-iconfont icon-order_icon"></i>
            <p>全部订单</p>
          </router-link>
          <router-link  to="/myHave">
            <i  class="mint-iconfont icon-icon-test"></i>
            <p>待付款</p>
          </router-link>
          <router-link  to="/myHave">
            <i  class="mint-iconfont icon-daishouhuo"></i>
            <p>待收货</p>
          </router-link>
          <router-link  to="/myHave">
            <i  class="mint-iconfont icon-wancheng"></i>
            <p>已完成</p>
          </router-link>
        </div>
      </mt-cell>
    </div>
    <div class="myCell myCell-five">
      <mt-cell to="/myInfo" class="border" is-link>
        <div slot="title">
          <i  class="mint-iconfont icon-geren2" style="font-size: 0.55rem"></i>
          <span style="vertical-align: text-top">个人资料</span>
        </div>
      </mt-cell>
      <mt-cell class="border" is-link>
        <div slot="title">
          <i  class="mint-iconfont icon-anquan" style="font-size: 0.55rem"></i>
          <span style="vertical-align: text-top">安全设置</span>
        </div>
      </mt-cell>
      <mt-cell to="/myaddress" class="border" is-link>
        <div slot="title">
          <i class="mint-iconfont icon-dizhi1" style="font-size: 0.55rem"></i>
          <span style="vertical-align: text-top">收货地址</span>
        </div>
      </mt-cell>
    </div>
    <div class="myCell myCell-three">
      <mt-cell  is-link>
        <div slot="title">
          <i  class="mint-iconfont icon-huiyuan" style="font-size: 0.55rem"></i>
          <span style="vertical-align: text-top">会员等级</span>
        </div>
      </mt-cell>
    </div>
    <div class="myCell myCell-four">
      <mt-cell class="border" is-link>
        <div slot="title">
          <i  class="mint-iconfont icon-youhuiquan" style="font-size: 0.55rem"></i>
          <span style="vertical-align: text-top">优惠券</span>
        </div>
      </mt-cell>
      <mt-cell  is-link>
        <div slot="title">
          <i  class="mint-iconfont icon-jifen" style="font-size: 0.55rem"></i>
          <span style="vertical-align: text-top">积分</span>
        </div>
      </mt-cell>
    </div>
    <div class="myCell myCell-six" v-if="loginSure">
      <mt-cell @click.native="outLogin">
        <div slot="title">
          <span>退出当前账号</span>
        </div>
      </mt-cell>
    </div>
    <v-footer ></v-footer>
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
export default {
  name: 'my',
  components: {
    'v-header': header,
    'v-footer': footer
  },
  data () {
    return {
      title:'TeHaoChi',
      back: true
    }
  },
  computed: {
    loginSure () {
      return this.$store.state.app.login
    },
    info () {
      if (!this.$store.state.app.login) {
        return {
          userName: '登录/注册',
          experience: '登录后享受更多特权'
        }
      } else {
        return {
          userName: 'admin',
          experience: '经验值：0分'
        }
      }
    }
  },
  methods: {
    goLogin () {
      if (!this.loginSure) {
        this.$router.push({
          path: '/myLogin'
        })
      }
    },
    outLogin(){
      localStorage.removeItem('token')
      this.$store.commit('LOGIN_TOKEN', Boolean(localStorage.token))
      this.$router.push({
        path: '/my'
      })
    }
  },
  created (){
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
