<template>	
	<div>
		<!--导航栏-->
	 <div class="topbar">
      <div class="tip-nav"> 
      <span class="nav"></span>
      </div>
      <div class="logo">
      	<a href=""><img src="../common/images/logo.png" alt="96u手游网"/></a>
      </div>
      <div class="sear-box">
      	<span class="search"></span>
      </div>
      <div class="searbox_1">
      	<form action="http://s.96u.com/cse/search" method="post" id="bdcs-search-form">
      		 <input type="hidden" class="sear-input" value="5693182300236230235"/ name="s"> 
      		 <input type="hidden" class="sear-input" value="3"/ name="nsid">
      		 <input type="hidden" class="sear-input" value="1"/ name="entry">
      		 <input type="hidden" class="sear-input" value="utf8"  name="ie"/>
      		 <input type="text" id="#bdcs-search-form-input" class="sear-input" placeholder="请输入搜索词..."  name="q"/ autocomplete="off"> 
      		<input type="submit" value="" class="sear_btn"/>
      	</form>
      </div>  
 	
    </div>	
	  <nav class="main-nav">
    	<router-link class="active" to="/" >首页</router-link>
    	<router-link  to="/play_games">游戏库</router-link>
    	<router-link  to="/seniority">排行</router-link>
    	<router-link  to="/down_load">下载</router-link>
    	<router-link  to="/information" >资讯</router-link>
 	   </nav>
 	
 	<!--轮播图-->
 	<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
	    <swiper-slide class="slide"><img src="../common/images/43.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../common/images/37.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../common/images/30.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../common/images/32.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../common/images/9.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../common/images/15.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../common/images/16.jpg"/></swiper-slide>
    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	   
  </swiper>
 	<section class="mider">
 		<ul class="cata-nav">
 			<li><a href="javascript:void(0)">
 			 <span class="bg"></span>礼包</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>专区</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>专题</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>厂商</a></li>
 		</ul>
 	</section>
 	<!--推荐游戏-->
 	<section class="mid1 dis-bot fresh-tab">
 		<div class="mid-title">
 		<h2>推荐游戏</h2>
 		<span class="rfresh">换一批</span>
 		</div>
 		<div class="fresh-box">
 			<ul class="app-list">
 			 <li>
 			 	<a href="javascript:void(0)" title="射雕英雄传2" class="title">
 			 		<img src="../common/images/44.jpg" alt="射雕英雄传2"><span>射雕英雄传2</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li>
 			<li>
 			 	<a href="javascript:void(0)" title="梦幻西游手游版" class="title">
 			 		<img src="../common/images/2.jpg" alt="梦幻西游手游版"><span>梦幻西游手游版</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li> 
 			<li>
 			 	<a href="javascript:void(0)" title="不良人2手游" class="title">
 			 		<img src="../common/images/29.jpg" alt="不良人2手游"><span>不良人2手游</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li>
 			<li>
 			 	<a href="javascript:void(0)" title="地铁跑酷" class="title">
 			 		<img src="../common/images/1.png" alt="地铁跑酷"><span>地铁跑酷</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li>
 			 		
 			<li>
 			 	<a href="javascript:void(0)" title="胡莱三国2" class="title">
 			 		<img src="../common/images/31.jpg" alt="胡莱三国2"><span>胡莱三国2</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li> 
 			<li>
 			 	<a href="javascript:void(0)" title="神界大陆" class="title">
 			 		<img src="../common/images/42.jpg" alt="神界大陆"><span>神界大陆</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li>
 			<li>
 			 	<a href="javascript:void(0)" title="永恒纪元戒" class="title">
 			 		<img src="../common/images/27.jpg" alt="永恒纪元戒"><span>永恒纪元戒</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li> 
 			<li>
 			 	<a href="javascript:void(0)" title="阴阳师手游" class="title">
 			 		<img src="../common/images/38.jpg" alt="阴阳师手游"><span>阴阳师手游</span></a>
 			 		<a href="javascript:void(0)" class="down">下载</a></li> 	 		
 			</ul>
 		</div>
 		<p class="mid-more">
 			<a href="javascript:void(0)">
 				<span>点击查看更多</span>
 				<em class="arr"></em>
 			</a>
 		</p>
 	</section>
 	<!--安卓游戏-->
 	<section class="mid2 dis-bot mid-tab">
 	<div class="mid-title">
 		<h2>安卓游戏</h2>
 		<span class="tab tab-hd">
 			<em class="active">热门</em>
 			<em>最新</em>
 		</span>
 	</div>
 	<ul class="app2-list tab-bd current">
 		<li><a href="javascript:void(0)" title="天堂2血盟九游版">
 			<img src="../common/images/24.png" alt="天堂2血盟九游版"/>
 			<div class="text">
 				<p class="title">天堂2血盟九游版</p>
 				<p class="cata">560.40 M/角色扮演</p>
 				<p class="down">下载</p>
 			</div></a></li>
 			
 		<li><a href="javascript:void(0)" title="永恒纪元戒九游版">
 			<img src="../common/images/25.png" alt="永恒纪元戒九游版"/>
 			<div class="text">
 				<p class="title">永恒纪元戒九游版</p>
 				<p class="cata">155.30 M/角色扮演</p>
 				<p class="down">下载</p>
 			</div></a></li>
 			
 		<li><a href="javascript:void(0)" title="剑侠世界九游版">
 			<img src="../common/images/28.jpg" alt="剑侠世界九游版"/>
 			<div class="text">
 				<p class="title">剑侠世界九游版</p>
 				<p class="cata">659.60 M/角色扮演</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 		<li><a href="javascript:void(0)" title="不良人2手游九游版">
 			<img src="../common/images/29.jpg" alt="不良人2手游九游版"/>
 			<div class="text">
 				<p class="title">不良人2手游九游版</p>
 				<p class="cata">479.50 M/角色扮演</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 			<li><a href="javascript:void(0)" title="不良人2手游版">
 			<img src="../common/images/29.jpg" alt="不良人2手游版"/>
 			<div class="text">
 				<p class="title">不良人2手游版</p>
 				<p class="cata">226.71M/角色扮演</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 		<li><a href="javascript:void(0)" title="剑侠世界百度版">
 			<img src="../common/images/28.jpg" alt="剑侠世界百度版"/>
 			<div class="text">
 				<p class="title">剑侠世界百度版</p>
 				<p class="cata">581.50 M/角色扮演</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 	</ul>
 	<p class="mid-more">
 			<a href="javascript:void(0)">
 				<span>点击查看更多</span>
 				<em class="arr"></em>
 			</a>
 		</p>
 	</section>
 	<!--苹果游戏-->
 	<section class="mid2 dis-bot mid-tab">
 	<div class="mid-title">
 		<h2>苹果游戏</h2>
 		<span class="tab tab-hd">
 			<em class="active">热门</em>
 			<em>最新</em>
 		</span>
 	</div>
 	<ul class="app2-list tab-bd current">
 		<li><a href="javascript:void(0)" title="3939先生的星期一ios版">
 			<img src="../common/images/41.jpg" alt="3939先生的星期一ios版"/>
 			<div class="text">
 				<p class="title">3939先生的星期一ios版</p>
 				<p class="cata">0 M/休闲益智</p>
 				<p class="down">下载</p>
 			</div></a></li>
 			
 		<li><a href="javascript:void(0)" title="少年三国志ios版">
 			<img src="../common/images/3.png" alt="少年三国志ios版"/>
 			<div class="text">
 				<p class="title">少年三国志ios版</p>
 				<p class="cata">175.38 MB/棋牌卡牌</p>
 				<p class="down">下载</p>
 			</div></a></li>
 			
 		<li><a href="javascript:void(0)" title="火车猛击ios版">
 			<img src="../common/images/5.jpg" alt="火车猛击ios版"/>
 			<div class="text">
 				<p class="title">火车猛击ios版</p>
 				<p class="cata">161 MB/动作闯关</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 		<li><a href="javascript:void(0)" title="自由战歌ios版">
 			<img src="../common/images/6.jpg" alt="自由战歌ios版"/>
 			<div class="text">
 				<p class="title">自由战歌ios版</p>
 				<p class="cata">194 MB/策略战棋</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 			<li><a href="javascript:void(0)" title="女神大陆手游ios版">
 			<img src="../common/images/8.jpg" alt="女神大陆手游ios版"/>
 			<div class="text">
 				<p class="title">女神大陆手游ios版</p>
 				<p class="cata">166 MB/策略战棋</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 		<li><a href="javascript:void(0)" title="万万没想到之大皇帝手游ios版">
 			<img src="../common/images/7.jpg" alt="万万没想到之大皇帝手游ios版"/>
 			<div class="text">
 				<p class="title">万万没想到之大皇帝手游ios版</p>
 				<p class="cata">165.00/棋牌卡牌</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 	</ul>
 	<p class="mid-more">
 			<a href="javascript:void(0)">
 				<span>点击查看更多</span>
 				<em class="arr"></em>
 			</a>
 		</p>
 	</section>
 	<!--手机软件-->
 	<section class="mid2 dis-bot mid-tab">
 	<div class="mid-title">
 		<h2>手机软件</h2>
 		<span class="tab tab-hd">
 			<em class="active">热门</em>
 			<em>最新</em>
 		</span>
 	</div>
 	<ul class="app2-list tab-bd current">
 		<li><a href="javascript:void(0)" title="来疯直播秀">
 			<img src="../common/images/19.jpg" alt="来疯直播秀"/>
 			<div class="text">
 				<p class="title">来疯直播秀</p>
 				<p class="cata">15.10M/视频播放</p>
 				<p class="down">下载</p>
 			</div></a></li>
 			
 		<li><a href="javascript:void(0)" title="阿里通电话安卓版">
 			<img src="../common/images/60.png" alt="阿里通电话安卓版"/>
 			<div class="text">
 				<p class="title">阿里通电话安卓版</p>
 				<p class="cata">7.73MB/手机通讯</p>
 				<p class="down">下载</p>
 			</div></a></li>
 			
 		<li><a href="javascript:void(0)" title="漫漫没想到安卓版">
 			<img src="../common/images/59.png" alt="漫漫没想到安卓版"/>
 			<div class="text">
 				<p class="title">漫漫没想到安卓版</p>
 				<p class="cata">5.00M/阅读工具</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 		<li><a href="javascript:void(0)" title="微信下载安装">
 			<img src="../common/images/18.png" alt="微信下载安装"/>
 			<div class="text">
 				<p class="title">微信下载安装</p>
 				<p class="cata">37.23M/社区交友</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 			<li><a href="javascript:void(0)" title="51人品">
 			<img src="../common/images/20.png" alt="51人品"/>
 			<div class="text">
 				<p class="title">51人品</p>
 				<p class="cata">11.60M/金融理财</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 			
 		<li><a href="javascript:void(0)" title="心跳社交">
 			<img src="../common/images/21.png" alt="心跳社交"/>
 			<div class="text">
 				<p class="title">心跳社交</p>
 				<p class="cata">7.70M/社区交友</p>
 				<p class="down">下载</p>
 			</div></a></li>	
 	</ul>
 	<p class="mid-more">
 			<a href="javascript:void(0)">
 				<span>点击查看更多</span>
 				<em class="arr"></em>
 			</a>
 		</p>
 	</section>
 	<section class="mid3 dis-bot">
 		<div class="mid-title">
 			<h2>手游攻略</h2>
 			<a href="javascript:void(0)">
 				<span>更多</span>
 				<em class="arr"></em>
 			</a>
 		</div>
 		<ul class="news-list">
 		<li><span>[手游攻略]</span><a href="javascript:void(0)" title="fgo西游记活动攻略 卡池新增从者">fgo西游记活动攻略 卡池新增从者</a></li>
 		<li><span>[手游攻略]</span><a href="javascript:void(0)" title="fgo西游记活动攻略 卡池限定礼装">fgo西游记活动攻略 卡池限定礼装</a></li>
 		<li><span>[手游攻略]</span><a href="javascript:void(0)" title="fgo西游记活动攻略 卡池UP英灵">fgo西游记活动攻略 卡池UP英灵</a></li>
 		<li><span>[手游攻略]</span><a href="javascript:void(0)" title="创造与魔法怎么搬家 创造与魔法搬家方法一览">创造与魔法怎么搬家 创造与魔法搬家方法一览</a></li>
 		<li><span>[手游攻略]</span><a href="javascript:void(0)" title="碧蓝航线柏哪里捞 电哪里会掉落">碧蓝航线柏哪里捞 电哪里会掉落</a></li>
 		</ul>
 	</section>
 	<section class="mid4 dis-bot picauto-box mid-tab">
 	  <div class="mid-title">
 	  	<h2>精品专题</h2>
 	  	<span class="tab tab-hd">
 	  		<em class="active">热门</em>
 	  		<em>最新</em>
 	  	</span>
 	  </div>
 	  <ul class="pic-list current tab-bd">
 	    <li class="picauto" style="height: 73px;">
 	    	<a href="" title="西游类手机网游大全">
 	    		<img src="../common/images/11.jpg" alt="西游类手机网游大全"/>
 	    		<span class="tit">西游类手机网游大全</span>
 	    	</a>
 	    </li>
 	    <li class="picauto" style="height: 73px;">
 	    	<a href="" title="传奇类手游大全">
 	    		<img src="../common/images/12.jpg" alt="传奇类手游大全"/>
 	    		<span class="tit">传奇类手游大全</span>
 	    	</a>
 	    </li>
 	    <li class="picauto" style="height: 73px;">
 	    	<a href="" title="手机三国网游大全">
 	    		<img src="../common/images/13.jpg" alt="手机三国网游大全"/>
 	    		<span class="tit">手机三国网游大全</span>
 	    	</a>
 	    </li>
 	    <li class="picauto" style="height: 73px;">
 	    	<a href="" title="安卓全民系列游戏大全">
 	    		<img src="../common/images/14.jpg" alt="安卓全民系列游戏大全"/>
 	    		<span class="tit">安卓全民系列游戏大全</span>
 	    	</a>
 	    </li>
 	  </ul>
 	  <p class="mid-more">
 			<a href="">
 				<span>点击查看更多</span>
 				<em class="arr"></em>
 			</a>
 		</p>
 	</section>
 	<section class="mid5 dis-bot">
 		<div class="mid-title">
 			<h2>游戏分类</h2>
 		</div>
 		<ul class="cata-list">
 			<li><a href="javascript:void(0)"><span class="bg"></span>角色扮演</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>模拟经营</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>射击枪战</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>体育运动</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>赛车竞速</a></li>
 			
 			<li><a href="javascript:void(0)"><span class="bg"></span>工作闯关</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>休闲益智</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>策略棋牌</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>棋牌卡牌</a></li>
 			<li><a href="javascript:void(0)"><span class="bg"></span>音乐舞蹈</a></li>
 		</ul>
 	</section>
 	<section class="links">
 		<div class="mid-title">
 			<h2>友情链接</h2>
 		</div>
 		<div class="links-box">
 			<a href="javascript:void(0)" target="_blank">游戏网站大全</a>
 			<a href="javascript:void(0)" target="_blank">棋盘大全</a>
 			<a href="javascript:void(0)" target="_blank">冒险游戏下载</a>
 			
 			<a href="" target="_blank">安卓智能游戏</a>
 			<a href="" target="_blank">游戏下载</a>
 			<a href="javascript:void(0)" target="_blank">游戏免费下载</a>
 			<a href="javascript:void(0)" target="_blank">琵琶网手游网</a>
 			<a href="javascript:void(0)" target="_blank">经典游戏榜</a>
 			<a href="javascript:void(0)" target="_blank">好玩的手游</a>
 			
 			<a href="javascript:void(0)" target="_blank">手游排行榜</a>
 			<a href="javascript:void(0)" target="_blank">单机游戏下载</a>
 			<a href="javascript:void(0)" target="_blank">游戏网下载</a>
 			
 		</div>
 	</section>
 	<footer>
 		<p class="foot-top" style="padding-top: 1rem;">
 			<a href="javascript:void(0)">访问电脑版</a>
 			<a href="javascript:void(0)">返回顶部</a>
 		</p>
 	</footer>
 
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '@/common/reset'
export default {
	name:"app",
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
*{
	margin: 0;
	padding: 0;
}
.topbar {
	height: 4.5rem;
	background-color: #ff6008;
	width: 100%;
	position: relative;
}
.tip-nav {
	  height: 3.5rem;
    position: absolute;
    top: 0.5rem;
    z-index: 99;
    left: 0;
}
.topbar .tip-nav span{
	  display: inline-block;
    height: 3.5rem;
    width: 3rem;
    margin-left: 1rem;
}
.topbar .nav {
    background: url("../common/images/sy-ico.png") 0rem -34.7rem no-repeat;
    background-size: 3rem auto;
}
.logo{
	position: absolute;
    width: 100%;
    height: 4.5rem;
    text-align: center;
}
.logo img{
	/*width:25%;*/
	height:75%;
	margin-top: 0.5rem;
    line-height: 4.5rem;
    text-align: center;
}
.topbar .sear-box {
    right: 0.1rem;
}
.sear-box{
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
.searbox_1{
	  display: none;
    z-index: 999;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;
    width: 80%;
    position: absolute;
    right: 1rem;
    top: 0.7rem;
}
.bdcs-search-form{
	  padding: 0;
    margin: 0;
    outline: none;
    color: #474747;
}
#bdcs-search-form-input {
    height: 1.6rem;
    line-height: 1.6rem;
    padding: 0.7rem 0;
    border: none;
    text-indent: 1rem;
    width: 70%;
}
.main-nav{
	height: 2rem;
    padding: 1rem 0;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    margin: 0;
    outline: none;
    color: #474747;
}
.main-nav .active {
    color: #ff6008;
}
.main-nav a {
    display: block;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    box-flex: 1.0;
    width: 20%;
    border-right: 0.1rem solid #e3e3e3;
    text-align: center;
}
a{
	text-decoration: none;
}
.swiper-container .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
}
.swiper-container .swiper-pagination-bullet-active {
    background: #ff6008;
}
.slide img{
	width: 100%;
    height: 15rem;
}
.mider{
	background-color: #ededed;
    border-bottom: 0.1rem solid #e5e5e5;
}
ul,li{
	margin: 0;
	/**/
	list-style: none;
}
.cata-nav {
    overflow: hidden;
    padding: 0;
    zoom: 1;
}
.cata-nav li{
	width: 25%;
	float: left;
	text-align: center;
	padding: 2rem 0 1.5rem 0;
}
.cata-nav li a {
    font-size: 1.6rem;
    line-height: 3rem;
    display: block;
} 
.cata-nav li:first-child .bg {
    background: #ff7573 url(../common/images/sy-ico.png) 1.2rem -57.5rem no-repeat;
    background-size: 3.5rem auto;
}
.cata-nav li .bg {
    display: block;
    width: 6rem;
    height: 6rem;
    border-radius: 38%;
    margin: 0 auto;
}
.cata-nav li:nth-child(2) .bg {
    background: #8dd178 url("../common/images/sy-ico.png") 1.2rem -51.5rem no-repeat;
    background-size: 3.5rem auto;
}
.cata-nav li:nth-child(3) .bg {
    background: #67b7f4 url("../common/images/sy-ico.png") 1.2rem -69.1rem no-repeat;
    background-size: 3.5rem auto;
}
.cata-nav li:nth-child(4) .bg {
    background: #8dd178 url("../common/images/sy-ico.png") 1.2rem -51.5rem no-repeat;
    background-size: 3.5rem auto;
}
.dis-bot {
    border-bottom: 1rem solid #ededed !important;
}
.mid-title {
    border-bottom: 0.1rem solid #eee;
    border-left: 0.4rem solid #ff6008;
    height: 4.5rem;
}
h2{
	margin: 0;
    display: inline-block;
    height: 4rem;
    line-height: 4.5rem;
    font-size: 1.7rem;
    color: #333;
    padding-left: 1rem;
    float: left;
}
.mid-title .rfresh {
    float: right;
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 1rem 0 2.5rem;
    font-size: 1.5rem;
    color: #a0a0a0;
    background: url("../common/images/sy-ico.png") -0.5rem -79.9rem no-repeat;
    background-size: 3rem auto;
}
.fresh-box {
    height: 27.4rem;
    width: 100%;
    overflow: hidden;
}
.app-list {
    overflow: hidden;
    zoom: 1;
}
.app-list li {
    text-align: center;
    width: 25%;
    float: left;
    margin-top: 1.5rem;
}
.app-list li img {
    border-radius: 12%;
    width: 6.5rem;
    height: 6.5rem;
    display: block;
    margin: 0 auto;
}
.app-list li span {
    display: block;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
    font-size: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.app-list li .down {
    display: inline-block;
    width: 6.5rem;
    height: 2.5rem;
    line-height: 2.7rem;
    border: 1px solid #ff6008;
    text-align: center;
    font-size: 1.4rem;
    border-radius: 1.2rem;
    color: #ff6008;
}
.mid-more {
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    background-color: #f6f6f6;
    margin: 1rem;
}
.mid-more a span {
    font-size: 1.4rem;
    color: #999;
}
.mid-more .arr, .mid-title .arr {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-top: 0.1rem solid #999;
    border-right:0.1rem solid #999;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
}
.mid-title .tab {
    float: right;
    height: 2rem;
    padding-top: 1.2rem;
}
.mid-title span {
    color: #999;
    font-size: 1.4rem;
}
.mid-title .tab .active {
    color: #dd2011;
}
.mid-title .tab em {
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    font-style: normal;
    border-right: 0.1rem solid #eee;
    font-size: 1.5rem;
    padding: 0 1rem;
    color: #999;
}
.app2-list {
    overflow: hidden;
    zoom: 1;
}
.app2-list li {
    width: 50%;
    float: left;
    overflow: hidden;
}
.app2-list li a {
    display: block;
    height: 6.5rem;
    padding: 1rem;
    border-right: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
}
.app2-list li img {
    width: 6.5rem;
    height: 6.5rem;
    float: left;
    margin-right: 0.6rem;
    border: none;
}
.app2-list li .text{
	width: 100%;
	height: 100%;
}
.app2-list li p {
    height: 2.1rem;
    line-height: 2.1rem;
    overflow: hidden;
    font-size: 1.4rem;
}
.app2-list li .cata {
    font-size: 1.3rem;
    color: #999;
}
.app2-list li .down {
    display: inline-block;
    height: 2.1rem;
    line-height: 2.3rem;
    width: 35%;
    border-radius: 1.2rem;
    border: 0.1rem solid #ff6008;
    text-align: center;
    color: #ff6008;
}
.mid-title a {
    float: right;
    height: 4.5rem;
    line-height: 4.5rem;
    margin-right: 1rem;
}
.news-list {
	overflow: hidden;
	zoom: 1;
	padding: 0 1rem;
}
.news-list li {
	height: 4rem;
    line-height: 4rem;
	border-bottom: 0.1rem dashed #dcdcdc;
	font-size: 1.5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.news-list li span {
	font-size: 1.5rem;
	color: #333;
}
.news-list li a {
	font-size: 1.5rem;
	color: #666;
}
.mid4 .current {
    display: block;
}
.pic-list {
    overflow: hidden;
    margin-right: 1rem;
    display: none;
}
.pic-list li {
    width: 50%;
    height: 8rem;
    float: left;
    margin-top: 1.2rem;
}
.pic-list li a {
    display: block;
    height: 100%;
    margin-left: 1rem;
    overflow: hidden;
    position: relative;
}
.pic-list li img {
    width: 100%;
    height: 100%;
}
.pic-list li .tit {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2.8rem;
    line-height: 2.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    background: rgba(0,0,0,.6);
    color: #fff;
}
.mid5 .cata-list {
    overflow: hidden;
}
.mid5 .cata-list li {
    width: 20%;
    float: left;
}
.mid5 .cata-list li a {
    display: block;
    padding: 1.5rem 0 1rem 0;
    border-right: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
    text-align: center;
    line-height: 3rem;
    color: #666;
    font-size: 1.5rem;
}
.mid5 .cata-list li .bg {
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    border-radius: 2rem;
}
.mid5 .cata-list li:nth-child(1) .bg {
    border: 0.1rem solid #61c6cc;
    background: url("../common/images/sy-ico.png") 0.5rem -100rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(2) .bg {
    border: 1px solid #ef6d66;
    background: url("../common/images/sy-ico.png") 0.5rem -12.5rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(3) .bg {
    border: 0.1rem solid #6494eb;
    background: url("../common/images/sy-ico.png") 0.5rem -93.3rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(4) .bg {
    border: 0.1rem solid #31bd80;
    background: url("../common/images/sy-ico.png") 0.5rem -19.1rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(5) .bg {
    border: 0.1rem solid #f9c100;
    background: url("../common/images/sy-ico.png") 0.5rem -114.5rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(6) .bg {
    border: 0.1rem solid #39a0ff;
    background: url("../common/images/sy-ico.png") 0.5rem -26rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(7) .bg {
    border: 0.1rem solid #ff900d;
    background: url("../common/images/sy-ico.png") 0.5rem 1.1rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(8) .bg {
    border: 0.1rem solid #af89c7;
    background: url("../common/images/sy-ico.png") 0.5rem -32.7rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(9) .bg {
    border: 0.1rem solid #61c6cc;
    background: url("../common/images/sy-ico.png") 0.5rem -5.5rem no-repeat;
    background-size: 4rem auto;
}
.mid5 .cata-list li:nth-child(10) .bg {
    border: 0.1rem solid #f4686c;
    background: url("../common/images/sy-ico.png") 0.5rem -121.5rem no-repeat;
    background-size: 4rem auto;
}
.links {
    padding-bottom: 1rem;
}
.links-box a {
    display: inline-block;
    font-size: 1.4rem;
    border: 0.1rem solid #eee;
    border-radius: 0.3rem;
    padding: 0.2rem 1.0rem;
    margin: 0.6rem 0 0 0.6rem;
    color: #666;
}
footer {
    text-align: center;
    background-color: #ededed;
    border-top: 0.1rem solid #e5e5e5;
    padding: 0 0 1.2rem 0;
}
footer .foot-top a {
    display: inline-block;
    /*width: 30%;*/
    height: 3rem;
    line-height: 3rem;
    font-size: 1.6rem;
    padding: 0.3rem 2rem 0.3rem 4.5rem;
    color: #333;
    border: 0.1rem solid #dcdcdc;
    border-radius: 1.8rem;
}
footer .foot-top a:nth-child(1) {
    background: url("../common/images/sy-ico.png") 1rem -65.1rem no-repeat;
    background-size: 3rem auto;
    margin-right: 0.6rem;
}
footer .foot-top a:nth-child(2) {
    background: url("../common/images/sy-ico.png") 1rem -34.9rem no-repeat;
    background-size: 3.5rem auto;
    margin-left: 0.6rem;
}
</style>