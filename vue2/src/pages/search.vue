<template>
  <div class="search" >
    <v-header :back="back" :title="title"></v-header>
    <div class="search-center">
      <mt-search  class="allSearch" cancel-text="取消" placeholder="搜索" >
      </mt-search>
    </div>
    <div class="list-block">
      <div class="content-block-title borderTop">热门搜索</div>
      <div class="content-padded borderTop">
        <ul class="row">
          <li><router-link style="color:#ff80c2" to="/type?id=1">糖果</router-link></li>
          <li><router-link style="color:#77af34" to="/type?id=1">有机食品</router-link></li>
          <li><router-link style="color:#00d3be" to="/type?id=1">早餐</router-link></li>
          <li><router-link style="color:#666666" to="/type?id=1">巧克力</router-link></li>
          <li><router-link style="color:#fd9d21" to="/type?id=1">蜜饯</router-link></li>
          <li><router-link style="color:#ff6767" to="/type?id=1">蛋糕</router-link></li>
          <li><router-link style="color:#8a90fa" to="/type?id=1">荔枝</router-link></li>
          <li><router-link style="color:#ff6767" to="/type?id=1">烘焙原料</router-link></li>
          <li><router-link style="color:#666666" to="/type?id=1">饼干</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'search',
  components: {
    'v-header': header
  },
  data () {
    return {
      title: 'TeHaoChi',
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
