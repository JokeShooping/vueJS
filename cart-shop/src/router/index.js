import Vue from 'vue'
import Router from 'vue-router'
// 引入商品页
import Products from '@/components/products'
// 引入结算页
import checkout from '@/components/checkout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Products
    },
    {
      path: '/checkout',
      component: checkout
    }
  ]
})
