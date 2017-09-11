<template>
  <div id="app">
    <store-head></store-head>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入header组件
import storeHead from '@/components/header'
export default {
  created () {
    this.$store.dispatch('getCart')
  },
  name: 'app',
  // 添加为app.vue的子组件
  components: {
    storeHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
