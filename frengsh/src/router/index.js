import Vue from 'vue'
import Router from 'vue-router'
import Special from '@/components/Special'
import Selling from '@/components/Selling'
import Grouper from '@/components/Grouper'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Special',
      component: Special
    },
    {
      path: '/selling',
      name: 'Selling',
      component: Selling
    },
    {
      path: '/grouper',
      name: 'Grouper',
      component: Grouper
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
