<template>
  <div class="myaddress">
    <v-header :title="title" :back="back"></v-header>
    <component :is="currentView">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>
  </div>
</template>

<script>
  import header from '@/components/header'
  import addressList from '@/components/addressList'
  import editorAddress from '@/components/editorAddress'
export default {
  name: 'myaddress',
  components: {
    'v-header': header,
    'address-list': addressList,
    'editor-Address': editorAddress
  },
  data () {
    return {
      title:'收货地址',
      back: true,
      currentView: 'address-list'
    }
  },
  watch: {
    '$route.query' (val) {
      if (val.type === 'new' || val.id) {
        this.currentView = 'editor-Address'
      }else{
        this.currentView = 'address-list'
      }
    }
  },
  created (){
    if (this.$route.query.type === 'new' || this.$route.query.id) {
      this.currentView = 'editor-Address'
    }else{
      this.currentView = 'address-list'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
