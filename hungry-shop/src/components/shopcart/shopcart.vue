<template>
  <div>
    <div class="shopCart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <i class="iconfont icon-gouwuche"></i>
            </div>
            <div class="num">78</div>
          </div>
          <div class="price">￥789</div>
          <div class="desc">另需配送费￥890元</div>
        </div>
        <div class="content-right">
          <div class="pay">
                                   考虑现场
          </div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="ball in balls">
          <transition name="drop">
            <div class="ball">
              <div class="inner inner-hook">
              </div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fade">
        <div class="shopcart-list">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="shopcart-food">
                <span class="name">咖啡店</span>
                <div class="price">
                	<span>￥{{food.price * food.count}}
                	</span>
                </div>
                   <goods></goods>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask"></div>
    </transition>
   
  </div>
</template>

<script type="text/ecmascript-6">
import Goods from '@/components/goods/goods.vue'
  export default {
    components: {
      Goods
    }
  }
</script>
<style>
.shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
}
.shopcart .content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255,255,255,0.4);
}
.shopcart .content .content-left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.shopcart .content .content-left .logo-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #141d27;
}
.shopcart .content .content-left .logo-wrapper .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    background: #2b343c;
}
.shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart {
    line-height: 44px;
    font-size: 24px;
    color: #80858a;
}
.shopcart .content .content-left .logo-wrapper .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: #f01414;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}
.shopcart .content .content-left .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    line-height: 24px;
    padding-right: 12px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255,255,255,0.1);
    font-size: 16px;
    font-weight: 700;
}
.shopcart .content .content-left .desc {
    display: inline-block;
    vertical-align: top;
    margin: 12px 0 0 12px;
    line-height: 24px;
    font-size: 10px;
}
.shopcart .content .content-right {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 105px;
    flex: 0 0 105px;
    width: 105px;
}
.shopcart .content .content-right .pay.not-enough {
    background: #2b333b;
}
.shopcart .content .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
}
.shopcart .ball-container .ball.drop-transition {
    -webkit-transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}
.shopcart .ball-container .ball {
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
}
.shopcart .ball-container .ball.drop-transition .inner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #00a0dc;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
}
.shopcart .ball-container .ball.drop-transition .inner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #00a0dc;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
}
.shopcart .shopcart-list.fold-transition {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}
.shopcart .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
}
.shopcart .shopcart-list .list-header {
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
.shopcart .shopcart-list .list-header .title {
    float: left;
    font-size: 14px;
    color: #07111b;
}
.shopcart .shopcart-list .list-header .empty {
    float: right;
    font-size: 12px;
    color: #00a0dc;
}
.shopcart .shopcart-list .list-content {
    padding: 0 18px;
    max-height: 217px;
    overflow: hidden;
    background: #fff;
}
</style>
