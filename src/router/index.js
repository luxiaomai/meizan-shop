import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/home/index'
import classify from '@/page/home/classify'
import details from '@/page/good/details'
import warp from '@/page/good/warp'
import login from '@/page/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/good',
      component: warp,
      mate: {title: '商品', needMenu: true},
      children: [
        {
          path: 'details',
          component: details,
          mate: {title: '商品详情', needMenu: true}
        }
      ]
    }
  ]
})
