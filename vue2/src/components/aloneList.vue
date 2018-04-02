<template>
  <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <ul class="new_list_ul new_list_ul_alone"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="60">
      <li class="new_list_li border" v-for="(item,index) in listOne">
        <router-link :to="{ path: '/buy?'+ 'id='+item.id }" >
          <div class="item-pic">
            <div class="item-pic-img"><img  v-lazy="item.img" class="item-pic-img-lazy"></div>
            <span class="item-discount">{{item.discount}}</span>
          </div>
          <div class="item-info">
            <div  class="item-name">{{item.name}}</div>
            <p class="item-price">
              <span class="price-desc"></span>
            <span class="settings-item_price_color">
              {{item.price}}<sub>.00</sub>
            </span>
            </p>
          </div>
          <div class="item-soldout" v-if="item.soldOut">
            <span class="soldout-bg"></span>
            <b></b>
          </div>
        </router-link>
      </li>
    </ul>
    <p v-if="loading" class="page-infinite-loading">
      <mt-spinner type="fading-circle" color="#26a2ff" class="page-infinite-spinner"></mt-spinner>
      <span>加载中...</span>
    </p>
    <p v-if="allLoaded" class="page-infinite-loading">
      <span >已全部加载</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
      list: Array
  },
	data() {
		return {
      loading: false,
      allLoaded: false,
      wrapperHeight: 0,
      index: 10
		}
	},
  computed: {
    listOne () {
      let $this = this
      return this.list.filter(function (value, i) {
        if(i < $this.index){
          return value
        }
      })
    }
  },
  methods: {
    loadMore() {
      if(this.allLoaded){
        return;
      }
      this.loading = true;
      let $this = this
      setTimeout(function () {
        let last = $this.list.length - 1
        if ($this.index < last) {
          $this.index = $this.index + 10
        } else{
          $this.allLoaded = true
        }
        $this.loading = false
      }, 1000)
    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
  }
}
</script>

<style scoped lang="less">
  .new_list_ul_alone{
    margin: 0;
  .new_list_li{
      margin-left: 0;
      margin-bottom: 0.1rem;
      width: 100%;
      .item-pic{
        width: 30%;
        float: left;
        padding: 0.1rem;
        box-sizing: border-box;
      }
      .item-info{
        width: 70%;
        box-sizing: border-box;
        float: left;
        padding: 5%;
      }
    }
  }
  .page-infinite-wrapper {
    overflow: scroll;
  }
  .page-infinite-loading {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .page-infinite-spinner{
    display: inline-block;
  }
  .item-pic-img-lazy[lazy=loading]{
    min-width: 20px;
    min-height: 20px;
    opacity: 1;
    background-color: #f1f1f1;
  }
</style>
