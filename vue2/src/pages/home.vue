<template>
  <div class="home">
      <v-header :class="{homeHeader:top}" :title="title"></v-header>
  		<div class="banner" id="banner">
  			  <mt-swipe :auto="4000">
              <mt-swipe-item><img src="//asset.ibanquan.com/asset/586b5cb21f249e07fd001249/index_slide_p1?v=1484793641"></mt-swipe-item>
              <mt-swipe-item><img src="//asset.ibanquan.com/asset/586b5cb51f249e07fd00124e/index_slide_p2?v=1484795724"></mt-swipe-item>
              <mt-swipe-item><img src="//asset.ibanquan.com/asset/586b5cbb1f249e07fd001253/index_slide_p3?v=1484827374"></mt-swipe-item>
          </mt-swipe>
  		</div>
  		<div class="nav">
  		    <div class="navContain">
              <ul  class="topNav floatAfter">
                  <li v-for="items in navBar" @click="goDetail(items.text)">
                    <router-link :to="{ path: '/detail?'+ 'id='+items.id }" >
                      <div class="icon-bg" :style="items.style">
                        <i class="mint-iconfont" :class="items.img"></i>
                      </div>
                      <span class="icon-text">{{items.text}}</span>
                    </router-link>
                  </li>
              </ul>
  		    </div>
  		</div>
      <div class="new_items">
        <div class="new-items-title">
          <h3 class="settings-main_title_color">新品上架
            <span class="settings-sub_title_color">NEW ARRIVAL</span></h3>
            <img :src="require('@/assets/image/titlebg1.png')">
        </div>
        <div class="new_list">
          <v-square :list="newP"></v-square>
        </div>
      </div>
      <div class="pic-ad">
        <div class="pic-ad-row floatAfter">
          <div class="ad-left">
            <a class="ad1">
              <span class="t1">百香果</span>
              <span class="t2">Passion fruit</span>
              <span class="t3">水果中的维生素之王</span>
              <img src="//asset.ibanquan.com/asset/586c53d71f249e07fd001279/index_pic_ad1?v=1484814339">
            </a>
          </div>
          <div class="ad-left">
            <div class="ad2">
              <a>
                <span class="t11">面条<span>noodles</span></span>
                <span class="t12">体验面条的各种吃法</span>
                <img src="//asset.ibanquan.com/asset/586c53dc1f249e07fd00127c/index_pic_ad2?v=1484814739">
              </a>
            </div>
            <div class="ad3">
              <a>
                <span class="t21">新鲜果蔬</span>
                <span class="t22">极速送达</span>
                <img src="//asset.ibanquan.com/asset/586c53e01f249e07fd00127f/index_pic_ad3?v=1484814933">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="new_items">
        <div class="new-items-title">
         <h3 class="settings-main_title_color">分类推荐
            <span class="settings-sub_title_color">CATEGORY RECOMMAND</span></h3>
          <img :src="require('@/assets/image/titlebg1.png')">
        </div>
        <div class="new_list" style="margin-top: 0.375rem">
          <mt-navbar class="home-navbar" v-model="selected">
            <mt-tab-item id="1">蛋糕甜点</mt-tab-item>
            <mt-tab-item id="2">有机食品</mt-tab-item>
            <mt-tab-item id="3">新鲜果蔬</mt-tab-item>
          </mt-navbar>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <v-square :list="dessert"></v-square>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <v-square :list="organic"></v-square>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <v-square :list="fresh"></v-square>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
      <div class="new_items">
        <div class="new-items-title full-width-ad">
          <img src="//asset.ibanquan.com/asset/586c90b111b00032920010ed/full_width_ad?v=1484826492">
        </div>
        <div class="new_list">
          <v-square :list="promotion"></v-square>
        </div>
      </div>
      <v-footer ></v-footer>
  	</div>
</template>
<script>
import header from '@/components/header'
import footer from '@/components/footer'
import square from '@/components/square'
import data from '@/assets/js/data'
export default {
  name: 'home',
  components: {
        'v-header': header,
        'v-footer': footer,
        'v-square': square
  },
  data () {
    return {
      title:'TeHaoChi',
      navBar: [
        {
          id:1,
          style:{
            background:'#ffa300'
          },
          img: 'icon-meishi',
          text: '西式餐点'
        },
        {
          id:1,
          style:{
            background:'#ff6767'
          },
          img: 'icon-zhushi',
          text: '精品主食'
        },
        {
          id:1,
          style:{
            background:'#8a90fa'
          },
          img: 'icon-zaocan',
          text: '营养早餐'
        },
        {
          id:1,
          style:{
            background:'#fed030'
          },
          img: 'icon-lingshi',
          text: '休闲零食'
        },
        {
          id:1,
          style:{
            background:'#fd9d21'
          },
          img: 'icon-dangao',
          text: '蛋糕甜点'
        },
        {
          id:1,
          style:{
            background:'#fed030'
          },
          img: 'icon-yinpin',
          text: '清凉饮品'
        },
        {
          id:1,
          style:{
            background:'#4dc6ee'
          },
          img: 'icon-shuiguo',
          text: '生鲜水果'
        },
        {
          id:1,
          style:{
            background:'#ff80c2'
          },
          img: 'icon-egg',
          text: '肉蛋禽类'
        },
        {
          id:1,
          style:{
            background:'#fd9d21'
          },
          img: 'icon-xiaochi',
          text: '小吃快餐'
        },
        {
          id:1,
          style:{
            background:'#00d3be'
          },
          img: 'icon-gengduo',
          text: '全部分类'
        }
      ],
      data: data.product,
      selected: '1',
      top: true
    }
  },
  computed: {
    newP () {
      let index = 0
      return this.data.filter(function (value) {
        let type = value.type.some(function (val) {
          if (val === 'new') {
            index++
            return val
          }
        })
        if(type){
          if (index <=4 ) {
            return value
          }
        }
      })
    },
    dessert () {
      let index = 0
      return this.data.filter(function (value) {
        let type = value.type.some(function (val) {
          if (val === 'dessert') {
            index++
            return val
          }
        })
        if(type){
          if (index <=4 ) {
            return value
          }
        }
      })
    },
    organic () {
      let index = 0
      return this.data.filter(function (value) {
        let type = value.type.some(function (val) {
          if (val === 'organic') {
            index++
            return val
          }
        })
        if(type){
          if (index <=4 ) {
            return value
          }
        }
      })
    },
    fresh () {
      let index = 0
      return this.data.filter(function (value) {
        let type = value.type.some(function (val) {
          if (val === 'fresh') {
            index++
            return val
          }
        })
        if(type){
          if (index <=4 ) {
            return value
          }
        }
      })
    },
    promotion () {
      let index = 0
      return this.data.filter(function (value) {
        let type = value.type.some(function (val) {
          if (val === 'promotion') {
            index++
            return val
          }
        })
        if(type){
          if (index <=4 ) {
            return value
          }
        }
      })
    }
  },
  created () {
  },
  methods: {
    headChange(e){
      let scroll = document.querySelector("body").scrollTop;
      if (document.getElementById("banner") != null) {
        let height = document.getElementById("banner").offsetHeight
        if (scroll >= height){
          this.top = false
        }else{
          this.top = true
        }
      }
    },
    goDetail (value) {
      this.$store.commit('TOGGLE_TITLE', value)
    }
  },
  mounted() {
    document.querySelector("body").addEventListener('scroll', this.headChange);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .homeHeader{
    background-color: rgba(38, 162, 255,0);
  }
</style>
