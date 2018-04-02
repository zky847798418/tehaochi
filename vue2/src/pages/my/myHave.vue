<template>
  <div class="myHave">
    <v-header :title="title" :back="back"></v-header>
    <mt-navbar class="myHave-bar" v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待付款</mt-tab-item>
      <mt-tab-item id="3">待收货</mt-tab-item>
      <mt-tab-item id="4">已完成</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="empty-notify">
          <div class="empty-notify-svg-wrap">
            <i class="mint-iconfont icon-dingdan"></i>
          </div>
          <div class="empty-notify-desc">
            没有相关的订单
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="empty-notify">
          <div class="empty-notify-svg-wrap">
            <i class="mint-iconfont icon-dingdan"></i>
          </div>
          <div class="empty-notify-desc">
            没有相关的订单
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="empty-notify">
          <div class="empty-notify-svg-wrap">
            <i class="mint-iconfont icon-dingdan"></i>
          </div>
          <div class="empty-notify-desc">
            没有相关的订单
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div class="empty-notify">
          <div class="empty-notify-svg-wrap">
            <i class="mint-iconfont icon-dingdan"></i>
          </div>
          <div class="empty-notify-desc">
            没有相关的订单
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import header from '@/components/header'
export default {
  name: 'myHave',
  components: {
    'v-header': header
  },
  data () {
    return {
      selected: '1',
      title:'我的订单',
      back: true
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
