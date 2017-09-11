<template>
<div>
<!-- 头部 -->
  	    <!-- 主体切换 -->
  	<div class="tab border-1px">
  		<div class="tab-item">
  			<router-link to="/" style="color: #f01414;">
                                    商品
        </router-link>
  		</div>
  		<div class="tab-item">
        <router-link to="/ratings">
                                  评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/penters">
                                       商家
        </router-link>
      </div>
  	</div>
     <router-view></router-view>
     <goods></goods>
  </div>
</div>  
</template>

<script>
import Goods from '@/components/goods/goods.vue'	
export default {
  name: 'app',
  components: {
      Goods
    }
}
</script>

<style scoped>
.tab {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    background-color:#fff;
}
.tab .tab-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
.tab .tab-item > a {
    display: block;
    font-size: 14px;
    color: #4d555d;
}
</style>