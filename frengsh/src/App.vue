<template>
  <div id="app">
    <router-view></router-view>
   <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
	
</style>
