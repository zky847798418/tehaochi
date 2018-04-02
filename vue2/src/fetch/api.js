import axios from 'axios'
import qs from 'qs'
import store from '@/store/store'
import router from '@/router/index'
import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8000/';

//POST传参序列化
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.user.token) {// 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
    if(config.method  === 'post'){
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  err => {
    _.toast("错误的传参", 'fail');
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.dispatch('outToken');
          router.replace({
            path: '/my/myLogin',
            query: {redirect: router.currentRoute.fullPath}
          });
          break;
        default:
          _.toast("网络异常", 'fail');
      }
    }

    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });


export function fetch(url, params) {

    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    Login(url,params) {
        return fetch(url,params)
    },
  
    /**
     * 用户注册
     */
    Regist(params) {
        return fetch('/users/api/userRegist', params)
    },

    /**
     * 发送注册验证码
     */
     RegistVerifiCode(tellphone) {
         return fetch('/users/api/registVerifiCode', {tellphone: tellphone})
     },

    /**
     * 获取分类短租列表
     */
    SportsList() {
        return fetch('http://res.uni-leader.com/models/index.json')
    },

    /**
     * 获取约出行列表
     */
    TravelsList() {
        return fetch('/api/travelList')
    },

    /**
     * 获取约跑步详情
     */
    SportsDetail(id) {
        return fetch('/api/sportDetail', {sportId: id})
    },

    /**
     * 获取约出行详情
     */
    TravelsDetail(id) {
        return fetch('/api/travelDetail', {travelId: id})
    },

    /**
     * 获取出行活动点击次数
     */
    travelClicks(id) {
        return fetch('/api/travelClickNum', {travelId: id})
    },

    /**
     * 获取用户信息
     */
    UserInfo(id) {
        return fetch('/users/api/userInfo', {userId: id})
    },

    /**
     * 获取用户发布约行个数
     */
     getPubTotravelNum(id) {
         return fetch('/users/api/getPubTotravelNum', {userId: id})
     },

     /**
      * 获取用户自己发布的约行
      */
      getMyTravel(id) {
          return fetch('/users/api/myTravel', {userId: id})
      },

    /**
     * 发布约行活动
     */
    PostTravel(params) {
        return fetch()
    },

    /**
     * 获取全国JSON数据
     */
     getAddressJson() {
         return fetch('/api/address')
     }
}
