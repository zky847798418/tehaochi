<template>
  <div class="myLogin">
    <v-header :title="title" :back="back"></v-header>
    <div class="myLogin-top">
      <div class="myLogin-input">
        <mt-field label="账号" placeholder="手机号/邮箱" v-model="access"></mt-field>
        <div class="myLogin-input-rule">
          <p></p>
        </div>
      </div>
      <div class="myLogin-btn">
        <mt-button type="primary" @click="login">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'
export default {
  name: 'myForget',
  components: {
    'v-header': header
  },
  data () {
    return {
      access:"",
      title:'TeHaoChi',
      back: true
    }
  },
  methods: {
    login(){
      if (this.access) {
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
