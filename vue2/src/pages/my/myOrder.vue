<template>
  <div class="myOrder">
    <v-header :title="title" :back="back"></v-header>
    <div class="myCell myCell-one">
        <mt-cell to="/mying/myaddress" is-link>
          <div  class="center-head" slot="title">
            <i class="mint-iconfont icon-dizhi1"></i>
            <p class="address-li-one"><span>{{addre.username}}</span><span>{{addre.phone}}</span></p>
            <p class="address-li-tow"><span>{{addre.area}}</span><span>{{addre.card}}</span></p>
          </div>
        </mt-cell>
      </div>
    <div class="myCell myCell-tow">
      <mt-cell >
        <div slot="title" style="text-align: left">
          <span >支付方式</span>
        </div>
      </mt-cell>
      <mt-cell>
        <div slot="title" class="myCell-have">
          <i class="mintui mintui-success"></i>
          <span >在线支付</span>
        </div>
      </mt-cell>
    </div>
    <div class="myCell myCell-three">
      <mt-cell  >
        <ul  slot="title">
          <li v-for="(item, index) in cars" class="cart-li-product">
            <div class="cart-li-mid">
              <div class="cart-li-product-name">
                <div class="cart-li-product-img">
                  <img :src="item.img[0]" >
                </div>
                <router-link :to="'/buy?id=' + item.id" class="cart-li-product-link">
                  <div style="padding-top: 0.8rem;font-size: 12px">{{item.name}}</div>
                </router-link>
              </div>
              <div class="cart-li-product-sku" style="font-size: 12px">重量:{{item.weight}}斤</div>
            </div>
            <div class="cart-li-rt">
              <div class="cart-li-product-info">
                <span class="cart-li-product-price-num">¥{{item.price}}{{item.sub}}</span>
              </div>
              <span>× {{item.add}}</span>
            </div>
          </li>
        </ul>
      </mt-cell>
      <mt-cell  is-link>
        <div slot="title">
          <span >配送方式</span>
        </div>
        <span>商家自送-免邮</span>
      </mt-cell>
    </div>
    <div class="myCell myCell-four">
      <mt-field label="留言" placeholder="给买家留言" ></mt-field>
    </div>
    <div class="myCell myCell-five">
      <mt-cell   is-link>
        <div slot="title">
          <span>优惠券</span>
        </div>
        <span>使用优惠券</span>
      </mt-cell>
    </div>
    <div class="myCell myCell-six">
      <mt-cell  >
        <div slot="title">
          <span>商品金额总计</span>
        </div>
        <span>¥{{allPrice}}.00</span>
      </mt-cell>
      <mt-cell >
        <div slot="title">
          <span>运费总计</span>
        </div>
        <span>¥0.00</span>
      </mt-cell>
      <mt-cell >
        <div slot="title">
          <span>应付总额</span>
        </div>
        <span>¥{{allPrice}}.00</span>
      </mt-cell>
    </div>
    <div class="carBottom" style="bottom: 0">
      <mt-cell  class="myCell-seven">
        <div slot="title">
          <p class="address-li-one">
            <span>寄送至：</span>
            <span>{{addre.area}}</span><span>{{addre.card}}</span>
          </p>
          <p class="address-li-tow">
            <span>收货人：</span>
            <span>{{addre.username}}</span><span>{{addre.phone}}</span>
          </p>
        </div>
      </mt-cell>
      <mt-cell >
        <span slot="left" class="carPrice">应付总额：<span>¥{{allPrice}}.00</span></span>
        <span class="carSubmit" @click="">提交订单</span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import header from '@/components/header'
export default {
  name: 'myOrder',
  components: {
    'v-header': header
  },
  data () {
    return {
      title:'提交订单 ',
      back: true,
      addre: {
        username: '',
        phone: '',
        area: '',
        card: ''
      },
      cars:[{
        id: '',
        name:'',
        price:"00",
        sub:".00",
        img:[],
        weight:"0",
        add: '0'
      }],
      allPrice: 0
    }
  },
  methods: {
    outLogin(){
    }
  },
  created () {
    let $this = this
    if (this.$store.state.app.address.length !== 0) {
      this.$store.state.app.address.some(function (value) {
        if (value.default) {
          $this.addre = value
        }
      })
    }else{
      MessageBox({
        title: '提示',
        message: '请先填写收货地址哦',
        closeOnClickModal: false,
        showCancelButton: true
      }).then(action => {
        if (action === 'cancel') {
          $this.$router.go(-1)
        } else {
          $this.$router.push({
            path: '/myaddress'
          })
        }
      }).catch (result =>{
      })
    }
    let num = 0
    this.cars = this.$store.state.app.carList.filter(function (value) {
      if (value.checked) {
        num = num + Number(value.price)*Number(value.add)
        return value
      }
    })
    this.allPrice = num
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
