<template>
  <div class="myInfo">
    <v-header :title="title" :back="back"></v-header>
    <div class="myCell">
        <mt-cell class="myCell-one"  title="头像" is-link>
          <div class="center-head" >
            <span class="customer-img"></span>
            </span>
          </div>
        </mt-cell>
        <mt-cell title="昵称" is-link>
          <span>admin</span>
        </mt-cell>
      <mt-cell title="邮箱地址" is-link></mt-cell>
      <mt-cell title="手机号码" is-link></mt-cell>
      <mt-cell title="真实姓名" is-link></mt-cell>
      <mt-cell title="身份证号码" is-link></mt-cell>
      <mt-cell title="生日" is-link></mt-cell>
      <mt-cell title="性别" is-link>
        <span>保密</span>
      </mt-cell>
      </div>
  </div>
</template>

<script>
  import header from '@/components/header'
export default {
  name: 'myInfo',
  components: {
    'v-header': header
  },
  data () {
    return {
      title:'个人资料',
      back: true
    }
  },
  methods: {
    outLogin(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
