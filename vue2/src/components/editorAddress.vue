<template>
  <div class="myLogin" style="padding-bottom: 0">
    <div class="myLogin-top" style="padding: 0">
      <div class="myLogin-input">
        <mt-field label="收货人" placeholder="姓名" v-model="addre.username"></mt-field>
        <mt-field label="联系电话" placeholder="电话号码" type="tel" v-model="addre.phone"></mt-field>
        <mt-field label="选择地区" placeholder="地区信息" v-model="addre.area" readonly @click.native="popupVisible1 = true"></mt-field>
        <mt-field label="详细地址" placeholder="街道门牌信息" type="textarea" rows="3" v-model="addre.card"></mt-field>
        <mt-field label="邮政编码" placeholder="邮政编码" v-model="addre.code"></mt-field>
        <mt-checklist class="setAddress-check" title="" v-model="value1" :options="['设置为默认地址']"></mt-checklist>
        <div class="myLogin-input-rule">
          <p>{{checkInfo}}</p>
        </div>
      </div>
      <div class="myLogin-btn">
        <mt-button type="primary" @click="sure">确定</mt-button>
      </div>
      <mt-popup v-model="popupVisible1" position="bottom" class="mint-popup-5">
        <div class="edit-product-info">
          <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
        </div>
        <a href="javascript:void(0);" @click="popupVisible1 = false"  class="close-popup">×</a>
      </mt-popup>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name: 'editorAddress',
    components: {
      VDistpicker
    },
    data () {
      return {
        addre: {
          id: 0,
          username: '',
          phone: '',
          area: '',
          areaData: {},
          card: '',
          code: '',
          default: false
        },
        value1: [],
        checkInfo: '',
        popupVisible1: false
      }
    },
    methods: {
      sure(){
        if (this.addre.username === '') {
          this. checkInfo = '请输入收货人姓名'
        } else if (this.addre.phone === '') {
          this. checkInfo = '请输入联系电话'
        } else if (this.area === '') {
          this. checkInfo = '请选择地区'
        } else if (this.addre.card === '') {
          this. checkInfo = '请填写详细地址'
        } else if (this.addre.code === '') {
          this. checkInfo = '请输入邮政编码'
        } else {
          if (this.value1.length !== 0) {
            this.addre.default = true
          }
          let $this = this
          let have = false
          let arr = this.$store.state.app.address.map(function (value) {
            if(value.id === $this.addre.id){
              value = JSON.parse(JSON.stringify($this.addre))
              have = true
            } else {
              if ($this.addre.default && value.default) {
                value.default = false
              }
            }
            return value
          })
          if (!have) {
            this.addre.id = arr.length + 1
            if (arr.length === 0) {
              this.addre.default = true
            }
            let bar = JSON.parse(JSON.stringify(this.addre))
            arr.push(bar)
          }
          this.$store.commit('ADD_ADDRESS', arr)
          this.$router.back()
        }
      },
      onSelected(data) {
//        console.log(data)
        this.addre.area = data.province.value + data.city.value +data.area.value
        this.addre.areaData = data
        this.popupVisible1 = false
      }
    },
    created () {
     let $this = this
      if (this.$route.query.id) {
        let arr = this.$store.state.app.address.filter(function (value) {
          if (value.id === Number($this.$route.query.id)) {
            return value
          }
        })
        this.addre = arr[0]
        if (this.addre.default) {
          this.value1 = ['设置为默认地址']
        }
      }
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
