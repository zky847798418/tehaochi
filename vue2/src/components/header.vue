<template>
  <mt-header fixed :title="title" >
    <mt-button @click.prevent="backNow"  icon="back" slot="left" v-if="back"></mt-button>
    <router-link to="/search" slot="right" v-else>
      <mt-button   icon="search" ></mt-button>
    </router-link>
  </mt-header>
</template>
<script>
  export default {
    components: {
    },
    props: {
      back: Boolean,
      title: String
    },
    data() {
      return {
      }
    },
    methods:{
      backNow () {
        this.$router.go(-1)
      }
    },
    mounted: function() {
    },
    watch: {
    }
  }
</script>

<style lang="less" scoped>

</style>
