<template>
  <div class="addressList">
    <ul class="address-list-ul" v-if="noAddress">
      <li class="address-li-product" v-for="(item,index) in list" :key="index">
        <mt-cell >
          <div slot="title">
            <p class="address-li-one"><span>{{item.username}}</span><span>{{item.phone}}</span></p>
            <p class="address-li-tow"><span>{{item.area}}</span><span>{{item.card}}</span></p>
          </div>
        </mt-cell>
        <mt-cell >
          <div slot="title"  v-if="item.default">
            <i class="mintui mintui-success" style="color: #26a2ff;font-size: 14px"></i>
            <span class="address-default">默认地址</span>
          </div>
          <a class="address-editor" @click="editor(item.id)">编辑</a>
          <a class="address-editor" @click="deleteOne(item.id)">删除</a>
        </mt-cell>
      </li>
    </ul>
    <div class="carNothing" v-else>
      <div class="carNothing-img" >
        <i class="mint-iconfont icon-dizhi"></i>
      </div>
      <p class="carNothing-text">当前没有地址哦，赶快添加吧</p>
    </div>
    <div class="carBottom" style="bottom: 0">
      <mt-cell class="addressAdd">
        <mt-button type="primary"  slot="left" @click.native="newAddress"><span>+</span>新建收货地址</mt-button>
      </mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addressList',
	data() {
		return {

		}
	},
  methods:{
    deleteOne (id) {
      let defa = false
      let arr = this.list.filter(function (value) {
        if (value.id === id) {
          if (value.default) {//如果删除的是默认地址
            defa = true
          }
        } else {
          return value
        }
      })
      if (defa) {
        if(arr.length !== 0){
          arr[0].default = true
        }
      }
      this.$store.commit('ADD_ADDRESS', arr)
    },
    editor (id) {
      this.$router.push({
        path: '/myaddress',
        query: {
          id: id
        }
      })
    },
    newAddress () {
      this.$router.push({
        path: '/myaddress',
        query: {
          type: 'new'
        }
      })
    }
  },
  computed: {
    noAddress () {
      if (this.$store.state.app.address.length == 0){
        return false
      } else {
        return true
      }
    },
    list () {
      return this.$store.state.app.address
    }
  }
}
</script>

<style scoped >

</style>
