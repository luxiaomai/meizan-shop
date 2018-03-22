import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/home/index'
import classify from '@/page/classify/classify'
import details from '@/page/good/details'
import warp from '@/page/good/warp'
import login from '@/page/login/login'
import register from '@/page/login/register'
import forgetPassword from '@/page/login/forgetPassword'
import resetPassword from '@/page/login/resetPassword'
import search from '@/page/search/search'
import personal from '@/page/personal/personal'
import recharge from '@/page/personal/recharge'
import order from '@/page/personal/myOrder'

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
    // 注册
    {
      path: '/register',
      component: register
    },
    // 个人中心
    {
      path: '/personal',
      component: personal
    },
    // 充值页面
    {
      path: '/recharge',
      component: recharge
    },
    // 我的订单
    {
      path: '/myOrder',
      component: order
    },
    // 修改密码短信验证
    {
      path: '/forgetPassword',
      component: forgetPassword
    },
    // 设置新密码
    {
      path: '/resetPassword',
      component: resetPassword
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
    // 搜索
    {
      path: '/search',
      component: search
    },
    // 商品
    {
      path: '/good',
      component: warp,
      mate: {title: '商品', needMenu: true},
      children: [
        // 商品详情
        {
          path: 'details/:id',
          component: details,
          mate: {title: '商品详情', needMenu: true}
        }
      ]
    }
  ]
})
