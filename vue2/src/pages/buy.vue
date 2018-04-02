<template>
  <div class="buy" >
    <v-header :back="back" :title="title"></v-header>
    <div class="buy-list">
      <div class="buy-list-banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in detail.img" :key="index"><img :src="item"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="pro-detail-cnt">
        <h5 class="pro-detail-title">{{detail.name}}</h5>
        <div class="pro-detail-discount">
          <a class="settings-link_color">满300享八折</a>
          <a class="settings-link_color">满200减20</a>
        </div>
        <div class="pro-detail-price">
          <span class="pro_price_desc"></span>
          <strong class="pro-detail-uprice">
            ¥<span>{{detail.price}}<sub>{{detail.sub}}</sub></span>
          </strong>
          <del class="settings-item_origin_price_color">
            原价¥{{detail.agoPrice}}.00
          </del>
          <span class="pro-detail-sold">
            已售出<span class="settings-item_price_color" >{{detail.soldNum}}</span>件
          </span>
        </div>
      </div>
      <mt-cell  is-link>
        <span slot="title">
          <span>已选</span>
          <span style="color:#ff692f">重量:{{detail.weight}}斤</span>
        </span>
      </mt-cell>
      <mt-cell  is-link>
        <span slot="title">
          <span style="color:#F22117">点击查看图文详情</span>
        </span>
      </mt-cell>
      <div class="buy-link">
        <ul class="buy-link-ul floatAfter">
          <li class="buy-link-li">
            <i class="mint-iconfont icon-qq"></i>
            <a>QQ客服</a>
          </li>
          <li class="buy-link-li">
            <i class="mint-iconfont icon-weixin"></i>
            <a>微信客服</a>
          </li>
          <li class="buy-link-li">
            <i class="mint-iconfont icon-weibo"></i>
            <a>官方微博</a>
          </li>
        </ul>
      </div>
      <mt-cell  is-link>
        <span slot="title">
          <span>商品评价</span>
          <span style="color:#F22117">0%</span>
          <span>好评度</span>
        </span>
        <span>0人评价</span>
      </mt-cell>
      <mt-cell  is-link>
        <span slot="title">
          <span >有图片的评价</span>
        </span>
        <span>0人评价</span>
      </mt-cell>
      <div class="buy-other">
        <h5>相关推荐</h5>
        <v-square :list="other" class="buy-other-list"></v-square>
      </div>
      <div class="buyBottom">
        <mt-cell >
          <router-link class="buySubmit buyGo" to="/">
            <i class="mint-iconfont icon-home"></i>
            <p>首页</p>
          </router-link>
          <router-link class="buySubmit buyGo buyGoCar" to="/car">
            <mt-badge class="carBadge" size="small" color="#e64340">{{carNum}}</mt-badge>
            <i  class="mint-iconfont icon-car"></i>
            <p>购物车</p>
          </router-link>
          <a class="buySubmit buyGo">
            <i  class="mint-iconfont icon-share"></i>
            <p>分享</p>
          </a>
          <a class="buySubmit buyAdd" @click="popupVisible1 = true;whichBtn = true" v-if="!detail.soldOut">
            <span>加入购物车</span>
          </a>
          <a class="buySubmit buyNow" v-if="!detail.soldOut" @click="popupVisible1 = true;whichBtn = false">
            <span>立即购买</span>
          </a>
          <a class="buySubmit buyNo" v-if="detail.soldOut">
            <span>已售罄</span>
          </a>
        </mt-cell>
        <mt-popup v-model="popupVisible1" position="bottom" class="mint-popup-4">
          <div class="edit-product-info">
            <div id="edit-product-cont" class="edit-product-cont">
              <div class="info border">
                <div class="window-map">
                  <img id="sku-image" :src="detail.img[0]">
                </div>
                <div>
                  <span class="price">￥<small id="sku-price">{{detail.price}}<sub>{{detail.sub}}</sub></small></span>
                </div>
              </div>
              <div class="sku">
                <div class="sku-item">
                  <div class="left">重量：</div>
                  <div class="right" data-index="0">
                    <mt-button class="type-square borderAll" :class="{typeSquareNative:selected}" @click.prevent="selected = true">
                      <i class="icon">3斤</i>
                    </mt-button>
                    <mt-button class="type-square borderAll" :class="{typeSquareNative:!selected}" @click.prevent="selected = false">
                      <i class="icon">5斤</i>
                    </mt-button>
                  </div>
                </div>
              </div>
              <div class="quantity">
                购买数量
                <div class="quantity-selector yhsd-font-text">
                  <span class="iconfont icon-minus" @click="changeNum('decrease')"> < </span>
                  <input v-model="addNum"   class="yhsd-font-text" type="text" >
                  <span class="iconfont icon-add" @click="changeNum('crease')"> > </span>
                </div>
                <span id="sku-stock" class="stock yhsd-font-text">(库存{{detail.have}}件)</span>
              </div>
            </div>
            <div class="ctrl-btns">
              <div class="addCart-proListbtn">
                <mt-button type="primary" id="yhsd-cart-edit-add" v-if="whichBtn" @click.native="addCar('add')">
                  加入购物车
                </mt-button>
                <mt-button type="danger" id="yhsd-cart-edit-now" @click.native="addCar('buy')" v-else>
                  立即购买
                </mt-button>
              </div>
            </div>
          </div>
          <a href="javascript:void(0);" @click="popupVisible1 = false"  class="close-popup">×</a>
        </mt-popup>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
import square from '@/components/square'
import dataDetail from '@/assets/js/dataDetail'
import data from '@/assets/js/data'
import { Toast } from 'mint-ui'
export default {
  name: 'buy',
  components: {
    'v-header': header,
    'v-square': square
    },
  data () {
    return {
      title: 'TeHaoChi',
      back: true,
      dataDetail: dataDetail.product,
      data: data.product,
      detail: {
        id:'',
        name:'',
        price:"00",
        sub:".00",
        soldOut:false,
        type:[],
        img:[],
        agoPrice: "00",
        weight:"0",
        soldNum:"0",
        have:"100"
      },
      popupVisible1: false,
      selected: false,
      addNum: 1,
      whichBtn: true
    }
  },
  computed: {
    other () {
      let index = 0
      return this.data.filter(function (value) {
        let type = value.type.some(function (val) {
          if (val === 'promotion') {
            index++
            return val
          }
        })
        if(type){
          if (index <=3 ) {
            return value
          }
        }
      })
    },
    carNum () {
      return this.$store.state.app.carNum
    }
  },
  methods:{
    changeNum (val) {
      if(val === 'decrease') {
        if(this.addNum > 1){
          this.addNum--
        }
      }
      if(val === 'crease') {
        if(this.addNum < 100){
          this.addNum++
        }
      }
    },
    addCar (val) {
      let $this = this
      let have = false
      let arr = this.$store.state.app.carList.map(function (value) {
        if(value.id === $this.detail.id){
          value.add = value.add + $this.addNum
          have = true
        }
        return value
      })
      if (!have) {
        this.detail.add = this.addNum
        this.detail.checked = true
        let bar = JSON.parse(JSON.stringify(this.detail))
        arr.push(bar)
      }
      this.$store.commit('ADD_CARLIST',arr)
      let num = Number(this.$store.state.app.carNum) + this.addNum
      this.$store.commit('ADD_CARNUM', num)
      this.popupVisible1 = false
      if(val === 'add'){
        this.openToastWithIcon()
      }
      if(val === 'buy'){
        this.$router.push({
          path: '/car'
        })
      }
    },
    openToastWithIcon() {
      Toast({
        message: '加入购物车成功',
        iconClass: 'mintui mintui-success'
      });
    }
  },
  watch: {
    '$route' (val) {
      let $this = this
      let arr = this.dataDetail.filter(function (value) {
        if (value.id === $this.$route.query.id) {
          return value
        }
      })
      this.detail = arr[0]
    }
  },
  created (){
    let $this = this
    let arr = this.dataDetail.filter(function (value) {
      if (value.id === $this.$route.query.id) {
        return value
      }
    })
    this.detail = arr[0]
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
