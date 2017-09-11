// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/reset'
// 解决300ms延迟的问题
import fastclick from 'fastclick'
// 引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 调用
Vue.use(VueAwesomeSwiper)
// rem 初始化
import 'common/reset'
// 引入axios
import axios from 'axios'

//import '/common/styles/index.less'
// 禁止300ms的延迟
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
