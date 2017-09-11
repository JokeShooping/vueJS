import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/header'
import Ratings from '@/components/ratings/ratings'
import Penters from '@/components/seller/penters'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/penters',
      name: 'Penters',
      component: Penters
    }
  ]
})
