<template>
  <div class="type">
      <v-header :title="title"></v-header>
      <div class="typeTitle border">
        <div class="floatAfter">
          <div class="pull-left">
            <mt-button class="type-square borderAll" :class="{typeSquareNative:heng}" @click.prevent="selectOne('heng')">
              <i class="mint-iconfont icon-heng"></i>
            </mt-button>
            <mt-button class="type-square borderAll" :class="{typeSquareNative:shu}" @click.prevent="selectOne('shu')">
              <i class="mint-iconfont icon-lie"></i>
            </mt-button>
          </div>
          <div class="type-select pull-right">
            <mt-button class="type-square borderAll" :class="{typeSquareNative:num}" @click.prevent="selectOne('num')">
              <i class="mint-iconfont icon-xiaoliang"></i>
              <span>销量</span>
            </mt-button>
            <mt-button class="type-square borderAll" :class="{typeSquareNative:price}" @click.prevent="selectOne('price')">
              <i class="mint-iconfont icon-jiage"></i>
              <span>价格↑</span>
            </mt-button>
            <mt-button class="type-square borderAll" :class="{typeSquareNative:time}" @click.prevent="selectOne('time')">
              <i class="mint-iconfont icon-riqi"></i>
              <span>上架时间</span>
            </mt-button>
          </div>
        </div>
      </div>
  		<div class="typeContain">
  		   <div class="typeSelect">
            <div class="typeSelect-top floatAfter border">
              <div class="pull-left">
                <div class="typeSelect-title"><span>品牌</span></div>
              </div>
              <div class="pull-right">
                <div class="typeSelect-type">
                  <ul class="floatAfter">
                    <li v-for="item in select.pin">
                      <a @click.prevent="selectTow(item.brand)" :class="{typeSelected:$route.query.brand === item.brand}">{{item.name}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           <div class="typeSelect-top floatAfter border">
             <div class="pull-left">
               <div class="typeSelect-title"><span>类别</span></div>
             </div>
             <div class="pull-right">
               <div class="typeSelect-type">
                 <ul class="floatAfter">
                   <li v-for="item in select.type">
                     <a @click.prevent="selectThree(item.type)" :class="{typeSelected:$route.query.type === item.type}">{{item.name}}</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
        <div class="new_list">
          <v-square :list="dataAll" :state="state" v-if="heng"></v-square>
          <alone-list :list="dataAll" v-if="shu"></alone-list>
        </div>
  		</div>
      <v-footer ></v-footer>
  	</div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
import square from '@/components/square'
import aloneList from '@/components/aloneList'
import data from '@/assets/js/data'
export default {
  name: 'type',
  components: {
        'v-header': header,
        'v-footer': footer,
        'v-square': square,
        'alone-list':aloneList
    	},
  data () {
    return {
      select:{
        pin:[
          {
            brand: 'maiqi',
            name: '麦琪尔'
          },
          {
            brand: 'chenglu',
            name: '橙路'
          },
          {
            brand: 'yami',
            name: '雅米'
          },
          {
            brand: 'luoxin',
            name: '诺心'
          },
          {
            brand: 'jiuyuan',
            name: '九原生态'
          },
          {
            brand: 'gaigai',
            name: '盖盖果园'
          },
          {
            brand: 'jinyu',
            name: '金玉寿'
          }
        ],
        type:[
          {
            type: 'fresh',
            name: '新鲜果蔬'
          },
          {
            type: 'seafood',
            name: '海鲜水产'
          },
          {
            type: 'organic',
            name: '有机食品'
          },
          {
            type: 'bai',
            name: '百香果'
          },
          {
            type: 'dessert',
            name: '蛋糕甜点'
          },
          {
            type: 'strawberry',
            name: '草莓'
          },
          {
            type: 'kiwifruit',
            name: '猕猴桃'
          },
          {
            type: 'orange',
            name: '橙子'
          },
          {
            type: 'apple',
            name: '苹果'
          }
        ]
      },
      data: data.product,
      title:'TeHaoChi',
      state: 'no',
      heng:true,
      shu: false,
      num: false,
      price: false,
      time: false
    }
  },
  methods: {
    selectOne(val){
      if(val === 'heng'){
        if(!this.heng){
          this.heng = true
          this.shu = false
        }
      }
      if(val === 'shu'){
        if(!this.shu){
          this.shu = true
          this.heng = false
        }
      }
      if(val === 'num'){
        if(!this.num){
          this.num = true
          this.price = false
          this.time = false
          this.sort(this.dataAll,'soldNum')
          this.state = "num"
        }
      }
      if(val === 'price'){
        if(!this.price){
          this.price = true
          this.num = false
          this.time = false
          this.sort(this.dataAll,'price')
          this.state = "price"
        }
      }
      if(val === 'time'){
        if(!this.time){
          this.time = true
          this.price = false
          this.num = false
        }
      }
    },
    sort (elements,val) {
      //假设第0个元素是一个有序的数列，第1个以后的是无序的序列，
      //所以从第1个元素开始将无序数列的元素插入到有序数列中
      for(var i = 1; i < elements.length; i++){
        //升序
        if(Number(elements[i][val]) < Number(elements[i-1][val])){
          //取出无序数列中的第i个作为被插入元素
          var guard = elements[i];
          //记住有序数列的最后一个位置，并且将有序数列位置扩大一个
          var j = i - 1;
          elements[i] = elements[j];

          //比大小，找到被插入元素所在的位置
          while(j >= 0 && Number(guard[val]) < Number(elements[j][val])){
            elements[j+1] = elements[j];
            j--;
          }
          //插入
          elements[j+1] = guard;
        }
      }
      return elements
    },
    selectTow (val) {
      this.$router.push({
        path: '/type',
        query:{
          brand: val
        }
      })
    },
    selectThree (ele) {
      this.$router.push({
        path: '/type',
        query:{
          type: ele
        }
      })
    },
    change (ele) {
      if (ele.brand) {
        this.dataAll.splice(0)
        let $this = this
        this.data.forEach(function (value) {
          if (ele.brand === value.brand) {
            $this.dataAll.push(value)
          }
        })
        this.state = ele.brand
      }
      if (ele.type) {
        this.dataAll.splice(0)
        let $this = this
        this.data.forEach(function (value) {
          let type = value.type.some(function (val) {
            if (val === ele.type) {
              return val
            }
          })
          if(type){
            $this.dataAll.push(value)
          }
        })
        this.state = ele.type
      }
    }
  },
  computed: {
    dataAll () {
      return this.data.filter(function (value) {
        return value
      })
    }
  },
  created (){
    let ele = this.$route.query
    this.change(ele)
  },
  mounted() {
  },
  watch: {
    '$route.query' (ele) {
      this.change(ele)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
