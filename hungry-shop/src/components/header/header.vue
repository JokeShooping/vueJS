<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64px" height="64px" src="../../../static/1.jpg">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" style="color: #fff;">粥品香坊（回龙观）</span>
        </div>
        <div class="description">
                            蜂鸟专送/分钟送达
        </div>
        <div class="support">
          <span class="icon"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="supports-count">
        <span class="count">5个</span>
        <i class="icon iconfont icon-zuoyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title">
      	
      </span><span class="bulletin-text">
      	粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪
      	大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，
      	发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </span>
      <i class="icon iconfont icon-zuoyoujiantou"></i>
    </div>
    <div class="background">
      <img src="../../../static/1.jpg"  width="100%" height="100%">
    </div>
    <tab-bar></tab-bar>
<!--    
   <transition name="fade">
    <div class="detail">
      <div class="detail-wrapper clearFix">
        <div class="detail-main">
          <h1 class="name">粥品香坊（回龙观）</h1>
          <div class="star-wrapper">
           <div class="star star-48">
             <span class="star-item"></span>
             <span class="star-item"></span>
             <span class="star-item"></span>
             <span class="star-item"></span>
             <span class="star-item"></span>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support-item">
              <span class="icon"></span>
              <span class="text">在线支付满28减5</span>
            </li>
            <li class="support-item">
              <span class="icon"></span>
              <span class="text">VC无限橙果汁全场8折</span>
            </li>
             <li class="support-item">
              <span class="icon"></span>
              <span class="text">单人精彩套餐</span>
            </li>
             <li class="support-item">
              <span class="icon"></span>
              <span class="text">该商家支持发票,请下单写好发票抬头</span>
            </li>
            <li class="support-item">
              <span class="icon"></span>
              <span class="text">已加入“外卖保”计划,食品安全保障</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">
            	粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹
            	饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐
            	，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
            </p>
          </div>
        </div>
      </div>
      <div class="detail-close" >
        <i class="iconfont icon-cha"></i>
      </div>
    </div>
    </transition>-->
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'
export default {
  name: 'app',
  components: {
      TabBar
    }
}
</script>
<style >
.header {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7,17,27,0.5);
}
.header .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
}	
.header .content-wrapper .avatar {
    display: inline-block;
    vertical-align: top;
}
.header .content-wrapper .avatar img {
    border-radius: 2px;
}
.header .content-wrapper .content {
    display: inline-block;
    margin-left: 16px;
}
.header .content-wrapper .content .title {
    margin: 2px 0 8px 0; 
}
.header .content-wrapper .content .title .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image: url("../../../static/brand@2x.png");
    background-size: 30px 18px;
    background-repeat: no-repeat;
}
.header .content-wrapper .content .title .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}
.header .content-wrapper .content .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}
.header .content-wrapper .content .support .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-image: url("../../../static/decrease_1@2x.png");
}
.header .content-wrapper .content .support .text {
    line-height: 12px;
    font-size: 10px;
}
.header .content-wrapper .support-count {
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,0.2);
    text-align: center;
}
.header .content-wrapper .support-count .count {
    vertical-align: top;
    font-size: 10px;
}
.header .content-wrapper .support-count .icon-keyboard_arrow_right {
    margin-left: 2px;
    line-height: 24px;
    font-size: 10px;
}
.header .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7,17,27,0.2);
}
.header .bulletin-wrapper .bulletin-title {
    display: inline-block;
    vertical-align: top;
    margin-top: 8px;
    width: 22px;
    height: 12px;
    background-image: url("../../../static/bulletin@3x.png");
    background-size: 22px 12px;
    background-repeat: no-repeat;
}
.header .bulletin-wrapper .bulletin-text {
    vertical-align: top;
    margin: 0 4px;
    font-size: 10px;
}
.header .bulletin-wrapper .icon-keyboard_arrow_right {
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 8px;
}
.header .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    -webkit-filter: blur(10px);
    filter: blur(10px);
}
.header .detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7,17,27,0.8);
}
.header .detail .detail-wrapper {
    width: 100%;
    min-height: 100%;
}
.clearfix {
    display: inline-block;
}
.header .detail .detail-wrapper .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;
}
.header .detail .detail-wrapper .detail-main .name {
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
}
.header .detail .detail-wrapper .detail-main .star-wrapper {
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
}
.star {
    font-size: 0;
}
.star .star-item {
    background-image: url("../../../static/star24_on@3x.png");
}
.star .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
}
.star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
}
.header .detail .detail-wrapper .detail-main .title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
}
.header .detail .detail-wrapper .detail-main .title .line {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
}
.header .detail .detail-wrapper .detail-main .title .text {
    padding: 0 12px;
    font-weight: 700;
    font-size: 14px;
}
.header .detail .detail-wrapper .detail-main .supports {
    width: 80%;
    margin: 0 auto;
}
.header .detail .detail-wrapper .detail-main .supports .support-item {
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
}
.header .detail .detail-wrapper .detail-main .supports .support-item .icon.decrease {
    background-image: url("../../../static/decrease_1@2x.png");
}
.header .detail .detail-wrapper .detail-main .supports .support-item .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
}
.header .detail .detail-wrapper .detail-main .supports .support-item .text {
    line-height: 16px;
    font-size: 12px;
}
.header .detail .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
}
.star .star-item {
    background-image: url("../../../static/star24_on@3x.png");
}
/*.star.star-48 .star-item.on {
    background-image: url("../../../static/star24_on@3x.png");
}*/
.star .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
}
.star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
}
.support-item .icon{
	background-image: url("../../../static/decrease_1@2x.png")
}
</style>
