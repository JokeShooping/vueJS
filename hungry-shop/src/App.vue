<template>
  <div id="app">
  	<router-view></router-view>
  	<header></header>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
export default {
  name: 'app',
  components: {
      Header
    }
}
</script>

<style scoped>

</style>
