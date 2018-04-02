import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import home from '@/pages/home'
import type from '@/pages/type'
import car from '@/pages/car'
import my from '@/pages/my/my'
import myLogin from '@/pages/my/myLogin'
import myRegist from '@/pages/my/myRegist'
import myForget from '@/pages/my/myForget'
import myHave from '@/pages/my/myHave'
import myInfo from '@/pages/my/myInfo'
import myaddress from '@/pages/my/myaddress'
import myOrder from '@/pages/my/myOrder'
import buy from '@/pages/buy'
import detail from '@/pages/detail'
import search from '@/pages/search'

Vue.use(Router);

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        requireAuth: false  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: detail
    },
    {
      path: '/type',
      name: 'type',
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      component: type,
      children:[]
    },
    {
      path: '/car',
      name: 'car',
      meta: {
        requireAuth: false  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: car
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      children:[]
    },
    {
      path: '/myLogin',
      name: 'myLogin',
      component: myLogin
    },
    {
      path: '/myRegist',
      name: 'myRegist',
      component: myRegist
    },
    {
      path: '/myForget',
      name: 'myForget',
      component: myForget
    },
    {
      path: '/myHave',
      name: 'myHave',
      component: myHave,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: myaddress,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    }
  ]
});
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('LOGIN_TOKEN', Boolean(window.localStorage.getItem('token')))
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.app.login) {
      next();
    } else {
      next({
        path: '/myLogin',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})


export default router
