import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/home/index'
import classify from '@/page/home/classify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/classify',
      component: classify
    }
  ]
})
