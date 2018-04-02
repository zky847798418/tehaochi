<template>
  <div class="footer">
    <!--底部导航-->
    <mt-tabbar  v-model="selected" fixed class="bottomNav" >
      <mt-tab-item id="/" @click.native="changeGo">
        <i slot="icon" class="mint-iconfont icon-home"></i>
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="/type" @click.native="changeGo">
        <i slot="icon" class="mint-iconfont icon-iconsp1"></i>
        <p>商品</p>
      </mt-tab-item>
      <mt-tab-item id="/car" @click.native="changeGo">
        <mt-badge class="carBadge" size="small" color="#e64340">{{carNum}}</mt-badge>
        <i slot="icon" class="mint-iconfont icon-car"></i>
        <p>购物车</p>
      </mt-tab-item>
      <mt-tab-item id="/my" @click.native="changeGo">
        <i slot="icon" class="mint-iconfont icon-wode"></i>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: '/'
      }
    },
    computed: {
      path () {
        return this.selected
      },
      carNum () {
        return this.$store.state.app.carNum
      }
    },
    methods: {
      changeGo () {
        this.$router.push({
          path: this.path
        })
      }
    },
    created (){
      let select = this.$route.path
      this.selected = select

    },
    mounted() {
      let select = this.$route.path
      this.selected = select
    }
  }
</script>

<style scoped lang="less">

</style>
