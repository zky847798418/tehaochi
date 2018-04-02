<template>
  <div>
    <ul class="cart-list-ctrlbar border">
      <li class="cart-li-justify">
        <div class="checkbox-group">
          <mt-checklist class="page-part-all" title="" v-model="value1" :options="['']"></mt-checklist>
          <span class="cart-li-operator cart-check-all" @click="allChecked">全选</span>
        </div>
        <div class="cart-li-mid">
          <span class="cart-li-operator cart-check-deleteAll" :class="{noChecked:noCheck}" @click="deleteMore">删除</span>
        </div>
        <div class="cart-li-rt">
          <span class="cart-li-operator">清除下架商品</span>
        </div>
      </li>
    </ul>
    <ul class="cart-list-ul">
      <li class="cart-li-product cart-li-justify border" v-for="(item,index) in list" :key="index">
        <div class="checkbox-group">
          <mt-checklist class="page-part-list" title="" v-model="check" :options="[item.id]"></mt-checklist>
        </div>
        <div class="cart-li-mid">
          <div class="cart-li-product-name">
            <div class="cart-li-product-img">
              <img :src="item.img[0]" >
            </div>
            <router-link :to="'/buy?id=' + item.id" class="cart-li-product-link">
              <div>{{item.name}}</div>
            </router-link>
          </div>
          <div class="cart-li-product-sku" >重量:{{item.weight}}斤</div>
        </div>
        <div class="cart-li-rt">
          <div class="cart-li-product-info">
            <span class="cart-li-product-price-num">¥{{item.price}}{{item.sub}}</span>
            <span class="cart-li-product-del" @click="deleteOne(item.id,item.add,item.checked)">删除</span>
          </div>
          <div class="cart-li-product-input">
            <div class="cart-li-product-num">{{item.add}}</div>
            <mt-button class="cart-li-product-num-btn cart-li-product-num-reduct" :disabled="item.add==1"
               @click.native="addSold(item.add,index,'reduct')">-</mt-button>
            <mt-button href="javascript:void(0);"
               class="cart-li-product-num-btn cart-li-product-num-add"
               @click.native="addSold(item.add,index,'add')"  :disabled="item.add==item.have">+</mt-button>
          </div>
        </div>
      </li>
    </ul>
    <div class="carBottom">
      <mt-cell >
        <span slot="left" class="carPrice">合计：<span>¥ {{allPrice}}</span></span>
        <mt-button class="carSubmit" @click.native="settlement" :disabled="check.length === 0">确认结算</mt-button>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  props: {
    list: Array
  },
	data() {
		return {
      value1: [],
      check: [],
      noCheck: true
		}
	},
  methods:{
    deleteOne (id, number, check) {
      let $this = this
      MessageBox.confirm('确定删除此商品?', '删除商品').then(action => {
        let arr = $this.$store.state.app.carList.filter(function (value) {
          if(value.id !== id){
            return value
          }
        })
        $this.$store.commit('ADD_CARLIST',arr)
        if (check) {
          let num = Number($this.$store.state.app.carNum) - number
          $this.$store.commit('ADD_CARNUM', num)
        }
        $this.check.some(function (value, index) {
          if(value === id){
            $this.check.splice(index,1)
          }
        })
      }).catch (result =>{
      })
    },
    allChecked () {
      if (this.value1.length == 0) {
        this.value1 = ['']
        this.check = this.list.map(function (value) {
          return value.id
        })
      }else{
        this.value1 = []
        this.check = []
      }
    },
    deleteMore () {
      if (this.check.length !== 0){
        let $this = this
        let number = 0
        MessageBox.confirm('确定删除选中的商品吗?', '删除商品').then(action => {
          let arr = $this.$store.state.app.carList.filter(function (value) {
            let have = $this.check.some(function (val, index) {
              if(value.id === val){
                $this.check.splice(index,1)
                return val
              }
            })
            if (!have) {
              return value
            } else {
              if (value.checked) {
                number = number + Number(value.add)
              }
            }
          })
          $this.$store.commit('ADD_CARLIST',arr)
          let num = Number($this.$store.state.app.carNum) - number
          $this.$store.commit('ADD_CARNUM', num)
        }).catch (result =>{
        })
      }
    },
    addSold (ad, index, type) {
      if (type === 'add') {
        this.list[index].add = ad + 1
      } else {
        this.list[index].add = ad - 1
      }
      let arr = this.list
        this.$store.commit('ADD_CARLIST',arr)
        let num = 0
        arr.forEach(function (value) {
          if (value.checked) {
            num = num + Number(value.add)
          }
        })
        this.$store.commit('ADD_CARNUM', num)
    },
    settlement () {
      this.$router.push({
        path: '/myOrder'
      })
    }
  },
  computed: {
    allPrice () {
//      console.log(this.list)
      let all = 0
      let $this = this
      if (this.check.length !== 0){
        this.check.forEach(function (val) {
          $this.list.some(function (value) {
            if (val === value.id) {
              all = all + Number(value.add) * Number(value.price)
            }
          })
        })
      }
      return all
    }
  },
  watch: {
    check (val) {
      if(val.length ===0){
        this.noCheck = true
        this.value1 = []
      } else if(val.length < this.list.length){
        this.noCheck = false
        this.value1 = []
      } else {
        this.noCheck = false
        this.value1 = ['']
      }
      let num = 0
      let arr = this.list.map(function (value) {
        let have = val.some(function (test) {
          if (value.id === test) {
            num = num + Number(value.add)
            return test
          }
        })
        if (have) {
          value.checked = true
        } else {
          value.checked = false
        }
        return value
      })
      this.$store.commit('ADD_CARLIST',arr)
      this.$store.commit('ADD_CARNUM', num)
    }
  },
  created () {
    let $this = this
     this.list.forEach(function (value) {
      if (value.checked) {
        $this.check.push(value.id)
      }
    })
  },
  mounted() {
  }
}
</script>

<style scoped >

</style>
