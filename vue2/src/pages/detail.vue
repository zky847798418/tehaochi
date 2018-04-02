<template>
  <div class="detailList" >
    <v-header :back="back" :title="title"></v-header>
    <div class="detailSelect border">
      <ul class="detailSelect-ul floatAfter">
        <li>
          <a>综合排序</a>
          <i class="mint-iconfont icon-xiala"></i>
        </li>
        <li>
          <a>享受优惠</a>
        </li>
        <li>
          <a>更多筛选</a>
          <i class="mint-iconfont icon-shaixuan"></i>
        </li>
      </ul>
    </div>
    <div class="detailBanner">
      <alone-list :list="data"></alone-list>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'
  import aloneList from '@/components/aloneList'
  import data from '@/assets/js/data'
export default {
  name: 'detail',
  components: {
    'v-header': header,
    'alone-list':aloneList
  },
  data () {
    return {
      title: 'TeHaoChi',
      data: data.product,
      back: true
    }
  },
  methods: {
    headChange(e){
    }
  },
  created (){
    this.title = this.$store.state.app.title
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
