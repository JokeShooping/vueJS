import Vue from 'vue'
import Router from 'vue-router'
import TabHader from '@/components/tabhader'
import PlayGames from '@/components/PlayGames'
import Seniority from '@/components/Seniority'
import DownLoad from '@/components/DownLoad'
import Information from '@/components/Information'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tabhader',
      component: TabHader
    },
    {
      path: '/play_games',
      name: 'PlayGames',
      component: PlayGames
    },
    {
      path: '/seniority',
      name: 'Seniority',
      component: Seniority
    },
    {
	    path: '/down_load',
	    name: 'DownLoad',
	    component: DownLoad
    },
    {
	    path: '/information',
	    name: 'Information',
	    component: Information
    }
  ]
})
