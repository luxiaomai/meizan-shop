import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/home/index'
import classify from '@/page/home/classify'
import details from '@/page/good/details'
import warp from '@/page/good/warp'
import login from '@/page/login/login'
import register from '@/page/login/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 地址为空时跳转页面
    {
      path: '/',
      redirect: '/login'
    },
    // 登录
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    // 首页
    {
      path: '/index',
      component: index
    },
    // 分类
    {
      path: '/classify',
      component: classify
    },
    // 商品
    {
      path: '/good',
      component: warp,
      mate: {title: '商品', needMenu: true},
      children: [
        // 商品详情
        {
          path: 'details',
          component: details,
          mate: {title: '商品详情', needMenu: true}
        }
      ]
    }
  ]
})
