// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
// 引入适配手机分辨率js
import './config/rem'
// 引入初始化样式表
import './style/reset.css'
// 引入样式表
import './style/style.css'
// 引入饿了么ui
import MintUI from 'mint-ui'
// 引入饿了么样式表
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.transformRequest = function (data) {
  return Qs.stringify(data)
}
// if (process.env.NODE_ENV === 'development') { axios.defaults.baseURL = 'http://114.67.37.134:8080' }

axios.defaults.timeout = 5000                       // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'          // 配置请求头
axios.defaults.baseURL = 'http://114.67.37.134:8080'  // 配置接口地址

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
