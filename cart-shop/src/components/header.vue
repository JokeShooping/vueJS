<template>
  <div class="container-fluid">
    <div class="navbar navbar-inverse">
      <!-- <a class="navbar-brand" href="/">商店</a> -->
      <router-link class="navbar-brand" to="/">商店</router-link>
      <div class="navbar-right">
        <div class="navbar-text">
          <b>你的购物车</b>
         <span><b>{{totalNum}}</b>件,￥{{totalPrice.toFixed(2)}}</span>
        </div>
        <!-- <a href="/checkout" class="btn btn-default navbar-btn">checkout</a> -->
        <router-link class="btn btn-default navbar-btn" to="/checkout"><em>💎</em>checkout</router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  computed: {
    totalNum () {
      return this.$store.getters.totalNum
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  }
}
</script>
<style>
.navbar-right{
  float: right !important;
  margin-right: 5px;
}
.navbar-text{
  margin-right: 10px;
 
} 
.container-fluid{
	margin-right: auto;
    margin-left: auto;
    padding-right: 0;
    padding-left: 0; 
}
b{
	color: lightcyan;
}
span{
	 color: gold;
}
span b{
	color: lawngreen;
	margin-right: 3px;
}
</style>