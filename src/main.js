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
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.transformRequest = function (data) {
  return Qs.stringify(data)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
