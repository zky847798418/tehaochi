<template>
  <ul class="new_list_ul" :data-state="state">
    <li class="new_list_li" v-for="(item,index) in list" >
      <router-link :to="{ path: '/buy?'+ 'id='+item.id }" >
        <div class="item-pic">
          <div class="item-pic-img"><img v-lazy="item.img" class="item-pic-img-lazy"></div>
          <span class="item-discount">{{item.discount}}</span>
        </div>
        <div class="item-info">
          <div  class="item-name">{{item.name}}</div>
          <p class="item-price">
            <span class="price-desc"></span>
                  <span class="settings-item_price_color">
                    ¥{{item.price}}<sub>.00</sub>
                  </span>
          </p>
        </div>
        <div class="item-soldout" v-if="item.soldOut">
          <span class="soldout-bg"></span>
          <b></b>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
    props: {
        list: Array,
        state: String
    },
	data() {
		return {

		}
	},
  methods:{
  },
  computed: {
  },
  created (){
  },
  mounted() {
  }

}
</script>

<style scoped >
.item-pic-img-lazy[lazy=loading]{
  min-width: 20px;
  min-height: 20px;
  opacity: 1;
  background-color: #f1f1f1;
}
</style>
