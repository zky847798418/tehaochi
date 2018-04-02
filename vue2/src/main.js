// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/common.less';
import './assets/css/cover.less';
import './assets/css/layout.less';
import './assets/css/my.less';
import * as filters from './util/filter' //import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回
Vue.use(MintUI);
Vue.config.productionTip = false;

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) ;//注册过滤器

let list
if (window.localStorage.carList) {
  list = JSON.parse(window.localStorage.carList)
}
const carList = list || []
store.commit('ADD_CARLIST', carList)
const num = window.localStorage.carNum || 0
store.commit('ADD_CARNUM', num)
let address
if (window.localStorage.address) {
  address = JSON.parse(window.localStorage.address)
}
const addressList = address || []
store.commit('ADD_ADDRESS', addressList)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
