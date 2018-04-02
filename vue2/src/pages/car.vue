<template>
  <div class="car">
    <v-header :title="title"></v-header>
    <div class="car-list" :class="{carNothing:!nothing}">
      <div class="carHaving floatAfter" v-if="nothing" >
        <car-list :list="carList"></car-list>
      </div>
      <div class="carNothing" v-else>
        <div class="carNothing-img" >
          <i class="mint-iconfont icon-carKong"></i>
        </div>
        <p class="carNothing-text">购物车空空如也，快去逛逛吧</p>
        <div class="carNothing-btn">
          <router-link to="/">
            <mt-button type="primary" >去逛逛</mt-button>
          </router-link>
        </div>
      </div>
    </div>
    <v-footer ></v-footer>
  	</div>
</template>

<script>
import header from '@/components/header'
import carList from '@/components/carList'
import footer from '@/components/footer'
export default {
  name: 'car',
  components: {
    'v-header': header,
    'car-list': carList,
    'v-footer': footer
  },
  data () {
    return {
      title:'TeHaoChi'
    }
  },
  methods: {
    greet: function (event) {
//       this.nothing=true;
    }
  },
  computed: {
    nothing () {
      if (this.$store.state.app.carNum == 0 && this.$store.state.app.carList.length == 0){
        return false
      } else {
        return true
      }
    },
    carList () {
      return this.$store.state.app.carList
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
