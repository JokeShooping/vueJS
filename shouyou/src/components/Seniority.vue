<template>
	<div id="nomal">
	<div class="topbar list-topbar">
	<div class="goback">
		<a href="">
			<span class="arr">返回</span>
		</a>
	</div>
	<div class="topbar-tit">手游排行榜2017</div>
	<div class="sear-box">
		<span class="search"></span>
		<span class="nav"></span>
	</div>
   </div>
   
   <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
	  <swiper-slide class="slide">
	      <section class="rank-more swiper-container5 swiper-container-horizontal">
	    	<ul class="swiper-wrapper" style="transition-duration: 0ms; 
	    			transform: translate3d(0px, 0px, 0px);">
	    	 <li class="swiper-slide swiper-slide-active" style="width: 375px;">
	    	 	<a href="javascript:void(0)">安卓手游排行榜</a>
	    	 	<a href="javascript:void(0)">腾讯手游排行榜</a>
	    	 	<a href="javascript:void(0)">卡牌手游排行榜</a>
	    	 	<a href="javascript:void(0)">传奇手游排行榜</a>
	    	 	<a href="javascript:void(0)">网易手游排行榜</a>
	    	 	<a href="javascript:void(0)">手游排行榜2017</a>
	    	 </li>		
	      </ul>
	   </section>
	</swiper-slide>
	<swiper-slide class="slide">
	    <section class="rank-more swiper-container5 swiper-container-horizontal">
	        <ul class="swiper-wrapper" style="transition-duration: 0ms; 
	    			transform: translate3d(0px, 0px, 0px);">
	    	    <li class="swiper-slide swiper-slide-active" style="width: 375px;">
	    	 	    <a href="javascript:void(0)">竞技手游排行榜</a>
		    	 	<a href="javascript:void(0)">第三人称手游排行榜</a>
		    	 	<a href="javascript:void(0)">91手游排行榜</a>
		    	 	<a href="javascript:void(0)">豌豆荚手游排行榜</a>
		    	 	<a href="javascript:void(0)">2014手游排行榜</a>
		    	 	<a href="javascript:void(0)">手游排行榜2013</a>
	    	 </li>
	      </ul>
	    </section>
	    </swiper-slide>
	<swiper-slide class="slide">
	    <section class="rank-more swiper-container5 swiper-container-horizontal">
	        <ul class="swiper-wrapper" style="transition-duration: 0ms; 
	    			transform: translate3d(0px, 0px, 0px);">
	    	    <li class="swiper-slide swiper-slide-active" style="width: 37.5rem;">
		    	 	<a href="javascript:void(0)">2017卡牌手游排行榜</a>
		    	 	<a href="javascript:void(0)">三国卡牌手游排行榜</a>
		    	 	<a href="javascript:void(0)">天天类手游排行榜</a>
		    	 	<a href="javascript:void(0)">安卓动作手游榜</a>
		    	 	<a href="javascript:void(0)">安卓冒险手游排行榜</a>
		    	 	<a href="javascript:void(0)">dota手游排行榜</a>
	    	   </li>
	      </ul>
	    </section>	
	</swiper-slide>
	<swiper-slide class="slide">
	     <section class="rank-more swiper-container5 swiper-container-horizontal">
	        <ul class="swiper-wrapper" style="transition-duration: 0ms; 
	    			transform: translate3d(0px, 0px, 0px);">
	    	    <li class="swiper-slide swiper-slide-active" style="width: 37.5rem;">
		    	 	<a href="javascript:void(0)">水浒手游排行榜</a>
		    	 	<a href="javascript:void(0)">三国手游排行榜</a>
		    	 	<a href="javascript:void(0)">足球类手游排行榜</a>
		    	 	<a href="javascript:void(0)">2d手游排行榜</a>
		    	 	<a href="javascript:void(0)">3d手游排行榜</a>
		    	 	<a href="javascript:void(0)">策略类手游排行榜</a>
	    	   </li>
	      </ul>
	    </section>	
	</swiper-slide>
	<swiper-slide class="slide">
		<section class="rank-more swiper-container5 swiper-container-horizontal">
	        <ul class="swiper-wrapper" style="transition-duration: 0ms; 
	    			transform: translate3d(0px, 0px, 0px);">
	    	    <li class="swiper-slide swiper-slide-active" style="width: 37.5rem;">
		    	 	<a href="javascript:void(0)">武侠类手游排行榜</a>
		    	 	<a href="javascript:void(0)">格斗手游排行榜</a>
		    	 	<a href="javascript:void(0)">q版手游排行榜</a>
		    	 	<a href="javascript:void(0)">养成手游排行榜</a>
		    	 	<a href="javascript:void(0)">火影手游排行榜</a>
		    	 	<a href="javascript:void(0)">策略类手游排行榜</a>
	    	   </li>
	      </ul>
	    </section>
	</swiper-slide>
    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
   <section class="down-list dis-bot">
   	<ul class="down-game-ul addNub">
   	  <li>
   		<span class="nub">1</span>
   		<a href="javascript:void(0)" title="永恒纪元戒" class="pic">
   			<img src="../common/images/27.jpg" alt="永恒纪元戒" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="永恒纪元戒">永恒纪元戒</a>
   			<p class="para">147.34 M/角色扮演</p>
   			<p class="para">永恒纪元戒是一款有着精美画风的RP...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">2</span>
   		<a href="javascript:void(0)" title="阴阳师手游" class="pic">
   			<img src="../common/images/38.jpg" alt="阴阳师手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="阴阳师手游">阴阳师手游</a>
   			<p class="para">655.1M/角色扮演</p>
   			<p class="para">阴阳师手游是网易最新推出的3D日系...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">3</span>
   		<a href="javascript:void(0)" title="迷雾世界手游" class="pic">
   			<img src="../common/images/84.jpg" alt="迷雾世界手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="迷雾世界手游">迷雾世界手游</a>
   			<p class="para">521.50M/角色扮演</p>
   			<p class="para">迷雾世界是由网易游戏推出的一款mm...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">4</span>
   		<a href="javascript:void(0)" title="九州天空城手游" class="pic">
   			<img src="../common/images/85.jpg" alt="九州天空城手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="九州天空城手游">九州天空城手游</a>
   			<p class="para">417.50M/角色扮演</p>
   			<p class="para">九州天空城手游是一款玄幻题材的动作...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">5</span>
   		<a href="javascript:void(0)" title="轩辕剑3手游版" class="pic">
   			<img src="../common/images/86.jpg" alt="轩辕剑3手游版" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="轩辕剑3手游版">轩辕剑3手游版</a>
   			<p class="para">293.88 M/角色扮演</p>
   			<p class="para">轩辕剑3手游版是一款3D卡牌手游，...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">6</span>
   		<a href="javascript:void(0)" title="仙迹手游" class="pic">
   			<img src="../common/images/87.jpg" alt="仙迹手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="仙迹手游">仙迹手游</a>
   			<p class="para">93 M/角色扮演</p>
   			<p class="para">仙迹是一款拥有唯美羽翼让你绚丽拉风...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <!------------------------>
   	  <li>
   		<span class="nub">7</span>
   		<a href="javascript:void(0)" title="问道手游" class="pic">
   			<img src="../common/images/88.png" alt="问道手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="问道手游">问道手游</a>
   			<p class="para">363.52 M/角色扮演</p>
   			<p class="para">《问道手游版》是同名端游移植作品，...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">8</span>
   		<a href="javascript:void(0)" title="倩女幽魂手游" class="pic">
   			<img src="../common/images/89.jpg" alt="倩女幽魂手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="倩女幽魂手游">倩女幽魂手游</a>
   			<p class="para">682.14 M /角色扮演</p>
   			<p class="para">倩女幽魂手游是一款画面非常...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">9</span>
   		<a href="javascript:void(0)" title="倾世奇缘手游" class="pic">
   			<img src="../common/images/90.jpg" alt="倾世奇缘手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="倾世奇缘手游">倾世奇缘手游</a>
   			<p class="para">135.50 M/角色扮演</p>
   			<p class="para">《倾世奇缘》是一款原创西游题材的...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">10</span>
   		<a href="javascript:void(0)" title="九阴决战光明顶" class="pic">
   			<img src="../common/images/88.png" alt="九阴决战光明顶" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="九阴决战光明顶">九阴决战光明顶</a>
   			<p class="para">407MB/角色扮演</p>
   			<p class="para">九阴决战光明顶是一款旨在为用户缔造...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">11</span>
   		<a href="javascript:void(0)" title="誓约之剑手游" class="pic">
   			<img src="../common/images/91.jpg" alt="誓约之剑手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="誓约之剑手游">誓约之剑手游</a>
   			<p class="para">174.10 M /角色扮演</p>
   			<p class="para">《誓约之剑》是一款二次元卡牌移动端...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">12</span>
   		<a href="javascript:void(0)" title="全民大主宰" class="pic">
   			<img src="../common/images/92.jpg" alt="全民大主宰" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="全民大主宰">全民大主宰</a>
   			<p class="para">276.60 M/角色扮演</p>
   			<p class="para">《全民大主宰》是天蚕土豆正版授权，...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">13</span>
   		<a href="javascript:void(0)" title="御剑情缘手游" class="pic">
   			<img src="../common/images/91.jpg" alt="御剑情缘手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="御剑情缘手游">御剑情缘手游</a>
   			<p class="para">404.19 M /角色扮演</p>
   			<p class="para">《御剑情缘》是一款由祖龙娱乐开发、...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">14</span>
   		<a href="javascript:void(0)" title="倚天屠龙记手游" class="pic">
   			<img src="../common/images/93.jpg" alt="倚天屠龙记手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="倚天屠龙记手游">倚天屠龙记手游</a>
   			<p class="para">465.17 M /角色扮演</p>
   			<p class="para">《倚天屠龙记》是一款MMOARPG...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	 
   	  <li>
   		<span class="nub">15</span>
   		<a href="javascript:void(0)" title="倾世奇缘手游" class="pic">
   			<img src="../common/images/90.jpg" alt="倾世奇缘手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="倾世奇缘手游">倾世奇缘手游</a>
   			<p class="para">135.50 M/角色扮演</p>
   			<p class="para">《倾世奇缘》是一款原创西游题材的...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">16</span>
   		<a href="javascript:void(0)" title="九阴决战光明顶" class="pic">
   			<img src="../common/images/93.jpg" alt="九阴决战光明顶" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="九阴决战光明顶">九阴决战光明顶</a>
   			<p class="para">407MB/角色扮演</p>
   			<p class="para">九阴决战光明顶是一款旨在为用户缔造...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">17</span>
   		<a href="javascript:void(0)" title="誓约之剑手游" class="pic">
   			<img src="../common/images/91.jpg" alt="誓约之剑手游" />
   		</a>
   		<div class="text">
   			<a href="" class="title" title="誓约之剑手游">誓约之剑手游</a>
   			<p class="para">174.10 M /角色扮演</p>
   			<p class="para">《誓约之剑》是一款二次元卡牌移动端...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  
   	  <li>
   		<span class="nub">18</span>
   		<a href="javascript:void(0)" title="阴阳师手游" class="pic">
   			<img src="../common/images/38.jpg" alt="阴阳师手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="阴阳师手游">阴阳师手游</a>
   			<p class="para">655.1M/角色扮演</p>
   			<p class="para">阴阳师手游是网易最新推出的3D日系...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">19</span>
   		<a href="javascript:void(0)" title="迷雾世界手游" class="pic">
   			<img src="../common/images/84.jpg" alt="迷雾世界手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="迷雾世界手游">迷雾世界手游</a>
   			<p class="para">521.50M/角色扮演</p>
   			<p class="para">迷雾世界是由网易游戏推出的一款mm...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  
   	  <li>
   		<span class="nub">20</span>
   		<a href="javascript:void(0)" title="倾世奇缘手游" class="pic">
   			<img src="../common/images/90.jpg" alt="倾世奇缘手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="倾世奇缘手游">倾世奇缘手游</a>
   			<p class="para">135.50 M/角色扮演</p>
   			<p class="para">《倾世奇缘》是一款原创西游题材的...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">22</span>
   		<a href="javascript:void(0)" title="誓约之剑手游" class="pic">
   			<img src="../common/images/91.jpg" alt="誓约之剑手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="誓约之剑手游">誓约之剑手游</a>
   			<p class="para">174.10 M /角色扮演</p>
   			<p class="para">《誓约之剑》是一款二次元卡牌移动端...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">23</span>
   		<a href="javascript:void(0)" title="全民大主宰" class="pic">
   			<img src="../common/images/92.jpg" alt="全民大主宰" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="全民大主宰">全民大主宰</a>
   			<p class="para">276.60 M/角色扮演</p>
   			<p class="para">《全民大主宰》是天蚕土豆正版授权，...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">24</span>
   		<a href="javascript:void(0)" title="御剑情缘手游" class="pic">
   			<img src="../common/images/91.jpg" alt="御剑情缘手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="御剑情缘手游">御剑情缘手游</a>
   			<p class="para">404.19 M /角色扮演</p>
   			<p class="para">《御剑情缘》是一款由祖龙娱乐开发、...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	  <li>
   		<span class="nub">25</span>
   		<a href="javascript:void(0)" title="倚天屠龙记手游" class="pic">
   			<img src="../common/images/93.jpg" alt="倚天屠龙记手游" />
   		</a>
   		<div class="text">
   			<a href="javascript:void(0)" class="title" title="倚天屠龙记手游">倚天屠龙记手游</a>
   			<p class="para">465.17 M /角色扮演</p>
   			<p class="para">《倚天屠龙记》是一款MMOARPG...</p>
   		</div>
   		<a href="javascript:void(0)" class="r-down">下载</a>
   	  </li>
   	</ul>
   </section>
   <footer>
		<div class="main-nav">
			<a href="javascript:void(0)">首页</a>
			<a href="javascript:void(0)">游戏库</a>
			<a href="javascript:void(0)">排行</a>
			<a href="javascript:void(0)">下载</a>
			<a href="javascript:void(0)">资讯</a>
		</div>
		<p class="foot-top" style="padding-top: 1rem;">
 			<a href="javascript:void(0)">访问电脑版</a>
 			<a href="javascript:void(0)">返回顶部</a>
 		</p>
	</footer>
	<router-view></router-view>
	
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Seniority from 'components/Seniority'
export default {
  name:"nomal",
  components: {
  	Seniority
  },
  data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
//        direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
//        prevButton:'.swiper-button-prev',
//        nextButton:'.swiper-button-next',
//        scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
         
          debugger: true,
        
          onTransitionStart(swiper){
            console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        }
      }
 	}
}
</script>

<style>
.topbar{
 	height: 4.5rem;
 	width: 100%;
 	background-color: #ff6008;
 	position: relative;
 }
  .topbar .goback {
  	height: 3.5rem;
  	position: absolute;
  	top: 0.5rem;
  	z-index: 99;
  }
  .goback a {
  	display: block;
  	width: 3.5rem;
  	height: 3.5rem;
  }
  .goback .arr{
  	text-indent: -999.9rem;
    display: inline-block;
    margin: 0.8rem 0 0 1.2rem;
    width: 1.5rem;
    height: 1.5rem;
    border-left: 0.2rem solid #fff;
    border-top: 0.2rem solid #fff;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
  }
  .topbar-tit {
    text-align: center;
    line-height: 4.5rem;
    font-size: 1.8rem;
    color: #fff;
    margin-right: 3rem;
}
.topbar .sear-box {
    right: 1rem;
}
.topbar .tip-nav, .topbar .sear-box, .topbar .goback {
    height: 3.5rem;
    position: absolute;
    top: 0.5rem;
    z-index: 99;
}
.topbar .tip-nav span, .topbar .sear-box span {
    display: inline-block;
    height: 3.5rem;
    width: 3rem;
    margin-left: 1rem;
}
.topbar .search {
    background: url("../common/images/sy-ico.png") 0rem -39.8rem no-repeat;
    background-size: 3rem auto;
}
 .topbar .sear-box span {
    display: inline-block;
    height: 3.5rem;
    width: 3rem;
    margin-left: 1rem;
}
.topbar .nav {
    background: url("../common/images/sy-ico.png") 0rem -34.7rem no-repeat;
    background-size: 3rem auto;
}	
.swiper-container5 {
    position: relative;
    padding-bottom: 1.8rem;
    border-bottom: 0.8rem solid #f6f6f6;
}
.swiper-wrapper {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}
.swiper-container5 .swiper-slide {
    overflow: hidden;
    margin-top: 0.5rem;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
.swiper-container5 a {
    display: inline-block;
    width: 33.33%;
    float: left;
    height: 3.6rem;
    line-height: 3rem;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 0.3rem solid #fff;
    background-color: #f0f0f0;
    color: #ff6600;
    font-size: 1.3rem;
}
.pagination-bullet {
    width: 0.6rem;
    height: 0.6rem;
    background-color: #dfdfdf;
    opacity: 1;
}
.swiper-pagination-bullet {
    background:#CCFF33; 
    opacity: 1;
}
.swiper-pagination-clickable {
    cursor: pointer;
}
.down-game-ul li {
    height: 6rem;
    padding: 1rem;
    border-bottom: 0.1rem solid #eee;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    position: relative;
}
.addNub li:nth-child(1) .nub {
    background-color: #b91818;
}
.addNub li:nth-child(2) .nub {
    background-color: gold;
}
.addNub li:nth-child(3) .nub {
    background-color: #ff7e00;
}
.addNub .nub {
    display: inline-block;
    height: 2.2rem;
    width: 2.2rem;
    margin: 1.9rem 0.8rem 0 0;
    text-align: center;
    line-height: 2.2rem;
    color: #fff;
    background-color: #c1c1c1;
    border-radius: 50%;
}
.down-game-ul a{
    display: block;
}
.down-game-ul img {
    width: 6rem;
    height: 6rem;
    border: none;
}
.down-game-ul .text {
    display: block;
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
    margin: 0 0.8rem;
}
.down-game-ul .text a.title {
    height: 2rem !important;
    line-height: 2rem !important;
}
.down-game-ul .text a {
    font-size: 1.6rem;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.down-game-ul .text p.para {
    height: 2rem;
    line-height: 2rem;
    font-size: 1.3rem ;
    color: #999 ;
    margin-top: 0;
}
.down-game-ul .text p {
    font-size: 1.5rem;
    color: #999;
    margin-top: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.down-game-ul .r-down {
    position: absolute;
    top: 0;
    right: 0.3rem;
    height: 2.5rem;
    line-height: 2.7rem;
    width: 6rem;
    margin-top: 1.6rem;
    border: 0.1rem solid #ff6008;
    border-radius: 1.5rem;
    text-align: center;
    color: #ff6008;
    font-size: 1.4rem;
}
footer{
	text-align: center;
	background-color: #ededed;
    border-top: 0.1rem solid #e5e5e5;
    padding: 0 0 1.2rem 0;
}
.main-nav {
    height: 2rem;
    padding: 1rem 0;
    display: -webkit-box;
    display: -moz-box;
    display: box;
}
footer .main-nav{
	border-bottom: 0.1rem solid #dbdbdb;
    box-shadow: 0.1rem 0.1rem 0rem #fdfdfd;
    -webkit-box-shadow: 0.1rem 0.1rem 0rem #fdfdfd;
    margin-bottom: 1.2rem;
}
footer .main-nav a {
    border-right: 0.1rem solid #dbdbdb;
}
.main-nav a {
    display: block;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.7rem;
    -moz-box-flex: 1.0;
    -webkit-box-flex: 1.0;
    box-flex: 1.0;
    border-right: 0.1rem solid #e3e3e3;
    text-align: center;
    color: #666;
}
</style>