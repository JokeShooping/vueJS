<template>
  <div id="app"> 
  <router-view></router-view>
 <!-- 
  <seniority></seniority>
  <down-load></down-load>-->
  </div>
</template>

<script>
import TabHader from './components/tabhader'
import PlayGames from './components/PlayGames'
import Seniority from './components/Seniority'
import DownLoad from './components/DownLoad'
import Information from './components/Information'
export default {
  name: 'app',
  components: {
	TabHader,
  PlayGames,
  Seniority,
  DownLoad,
  Information
  }
}
</script>

<style>

</style>
