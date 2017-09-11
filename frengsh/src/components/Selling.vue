<template>
  <div style="overflow-y:scroll;">
	<div id="search-wrap">
		<div class="logo">淘特价</div>
		<a href="javascript:;" class="category"></a>
	</div>
	<nav id="nav-wrap">
		<div class="nav-content" style="position: relative; top: 0px;">
			<div class="item all on">
				<a href="javascript:;"><span>精选</span></a>
			</div>
			<div id="nav-list" class="swiper-container" style="overflow: hidden;">
				<div class="nav-list-wrap swiper-wrapper" 
					style="width: 1596px; transition-property: transform;
					 transform-origin: 0px 0px 0px; 
					 transform: translate(0px, 0px) translateZ(0px);">
					 <ul class="swiper-slide_1">
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>男装</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>女装</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>居家家纺</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>鞋包配饰</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>母婴儿童</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>家电数码</span>
					 		</a>
					 	</li>
					 	
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>中老年</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>美食</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>运动文娱</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>内衣美妆</span>
					 		</a>
					 	</li>
					 </ul>
					 </div>
			</div>
			<div id="drop-down">
				<div class="drop-down-bg-wrap">
					<div class="drop-down-bg"></div>
				</div>
			</div>
		</div>
	</nav>
	<div>
	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide class="slide"><img src="../assets/img/5.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/img/6.png"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/img/7.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/img/8.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/img/9.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/img/10.jpg"/></swiper-slide>
             <!-- Optional controls -->
	     <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
  <div class="config-tmp">
  	<ul class="page-item">
  		<li><a href="javascript:;">
  			<img src="../assets/img/1.png"/>
  			<p>白菜价</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/img/2.png"/>
  			<p>最后疯抢</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/img/3.png"/>
  			<p>精选预告</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/img/4.png"/>
  			<p>品牌团</p>
  		</a></li>
  		
  	</ul>
  </div>
  <div class="background-banner">
  	<a href="javascripta:;"><img src="../assets/img/11.jpg" alt=""/></a>
  </div>
  <div class="three-banner">
 	<div class="three-banner-left">
 		<a href="javascript:;">
 			<img src="../assets/img/12.jpg"/>
 		</a>
 	</div>
 	<div class="three-banner-right">
 		<a href="javascript:;"><img src="../assets/img/13.jpg"/></a>
 		<a href="javascript:;"><img src="../assets/img/14.jpg"/></a>
 	</div>
 </div>
 <div class="taotejia_tips">9点上新 淘宝天猫精选爆款</div>
  <!--<div class="recommend-for-you-wrap">
 	<a href="javascript:;">9点上新 淘宝天猫精选爆款<img src="../assets/img/7.png"/></a>
 </div>-->
 <div class="deal-list">
    <ul>
    	<li><a href="javascript:;">
    		<img src="../assets/img/15.jpg"/>
    	</a>
	    	<h3>上新 | 男士潮流情侣T恤</h3>
	    	<span>¥39</span>
	    	<span class="zhe">¥56</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	<p>525万件已售 </p>
	    	<span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/16.jpg"/>
    	</a>
	    	<h3>上新 | 150克纯棉纯色大码男T</h3>
	    	<span>¥29</span>
	    	<span class="zhe">¥56</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	<p>93件已售 </p> 
	    	<span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/17.jpg"/>
    	</a>
	    	<h3>上新 | 孕妇短袖七分裤休闲套装</h3>
	    	<span>¥20.9</span>
	    	<span class="zhe">¥36</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	<p>293件已售 </p> 
	    	<span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/18.jpg"/>
    	</a>
	    	<h3>上新 | 苹果7手机壳i7plus</h3>
	    	<span>¥10.9</span>
	    	<span class="zhe">¥25.6</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	<p>693件已售 </p> 
	    	<span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/19.jpg"/>
    	</a>
	    	<h3>上新 | 有声视频 宝宝绘本童书10册</h3>
	    	<span>¥10.9</span>
	    	<span class="zhe">¥23.6</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	<p>1.2万件已售 </p> 
	    	<span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/20.jpg"/>
    	</a>
	    	<h3>上新 | 冰丝短袖女打底针织衫上衣</h3>
	    	<span>¥30.8</span>
	    	<span class="zhe">¥45.6</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	<p>93件已售 </p> 
	    	<span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/21.jpg"/>
    	</a>
	    	<h3>上新 | 针织开衫中长款针织衫外套</h3>
	    	<span>¥29</span>
	    	<span class="zhe">¥49</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>286件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/22.jpg"/>
    	</a>
	    	<h3>上新 | 全5册成功励志畅销书籍</h3>
	    	<span>¥33.8</span>
	    	<span class="zhe">¥196</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>993件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/23.jpg"/>
    	</a>
	    	<h3>上新 | 铜铃铛居家摆件</h3>
	    	<span>¥18.9</span>
	    	<span class="zhe">¥44</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>798件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/24.jpg"/>
    	</a>
	    	<h3>上新 | 加厚吸水擦车巾鹿皮干发毛巾</h3>
	    	<span>¥13.8</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>993件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/25.jpg"/>
    	</a>
	    	<h3>上新 |彩图书《写给女人的幸福忠告》</h3>
	    	<span>¥9.9</span>
	    	<span class="zhe">¥59</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>198件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/26.jpg"/>
    	</a>
	    	<h3>上新 | 玄关进门防滑浴室地垫40*60</h3>
	    	<span>¥9.8</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>293件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/27.jpg"/>
    	</a>
	    	<h3>上新 | t恤女无袖盘扣打底衫背心</h3>
	    	<span>¥29.8</span>
	    	<span class="zhe">¥89.8</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>4293件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/28.jpg"/>
    	</a>
	    	<h3>上新 |苹果6/6plus钢化膜</h3>
	    	<span>¥19.9</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>2198件已售 </p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/29.jpg"/>
    	</a>
	    	<h3>上新 | 三层加厚冬季夹棉睡衣女款</h3>
	    	<span>¥79</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>693件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/30.jpg"/>
    	</a>
	    	<h3>上新 |高腰雪纺阔腿裤女夏九分裤</h3>
	    	<span>¥69</span>
	    	<span class="zhe">¥69</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>298件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/31.jpg"/>
    	</a>
	    	<h3>上新 | 针织女开衫中长款蕾丝外套</h3>
	    	<span>¥56</span>
	    	<span class="zhe">¥86</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>2498件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/32.jpg"/>
    	</a>
	    	<h3>上新 | 360度智能无线摄像头</h3>
	    	<span>¥99</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1798件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/33.jpg"/>
    	</a>
	    	<h3>上新 | 云南特产鲜花饼400g</h3>
	    	<span>¥25.6</span>
	    	<span class="zhe">¥36</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1万件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/34.jpg"/>
    	</a>
	    	<h3>上新 | 10对儿童发夹BB夹子</h3>
	    	<span>¥9.9</span>
	    	<span class="zhe">¥19.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>3298件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/35.jpg"/>
    	</a>
	    	<h3>上新 | 儿童背心套装满2件减3元</h3>
	    	<span>¥125</span>
	    	<span class="zhe">¥34.0</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>179件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/36.jpg"/>
    	</a>
	    	<h3>上新 | 镂空针织衫短袖罩衫女宽松</h3>
	    	<span>¥29.9</span>
	    	<span class="zhe">¥89.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1198件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/37.jpg"/>
    	</a>
	    	<h3>上新 | 全尺寸棉质斜纹四件套</h3>
	    	<span>¥138</span>
	    	<span class="zhe">¥445</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1598件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/38.jpg"/>
    	</a>
	    	<h3>上新 | 浴室浴帘布伸缩杆套装</h3>
	    	<span>¥19.9</span>
	    	<span class="zhe">¥39.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1970件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/39.jpg"/>
    	</a>
	    	<h3>上新 | 经典怀旧国民床单老式床单</h3>
	    	<span>¥38</span>
	    	<span class="zhe">¥145</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1.9万件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/41.jpg"/>
    	</a>
	    	<h3>上新 | 针织衫打底衫长袖套头毛衣</h3>
	    	<span>¥39.9</span>
	    	<span class="zhe">¥59.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>298件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	
    	<li><a href="javascript:;">
    		<img src="../assets/img/40.jpg"/>
    	</a>
	    	<h3>上新 | 秋旗袍领毛衣女套头打底衫</h3>
	    	<span>¥69.9</span>
	    	<span class="zhe">¥159</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>590件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/42.jpg"/>
    	</a>
	    	<h3>上新 | 一字领打底套头针织衫</h3>
	    	<span>¥48</span>
	    	<span class="zhe">¥135</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1.5万件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/43.jpg"/>
    	</a>
	    	<h3>上新 | 秋装新款V领针织打底衫女</h3>
	    	<span>¥39.9</span>
	    	<span class="zhe">¥129</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1980件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/44.jpg"/>
    	</a>
	    	<h3>上新 | 斗篷披肩外套女针织衫开衫</h3>
	    	<span>¥78</span>
	    	<span class="zhe">¥145</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>6298件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/45.jpg"/>
    	</a>
	    	<h3>上新 | 婴儿夏季短袖连体衣</h3>
	    	<span>¥59.9</span>
	    	<span class="zhe">¥119</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>3670件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/46.jpg"/>
    	</a>
	    	<h3>上新 | 清新双层纱布窗帘1*1.3米</h3>
	    	<span>¥28</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>2890件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/47.jpg"/>
    	</a>
	    	<h3>上新 | 条纹毛衣套头针织衫打底衫</h3>
	    	<span>¥28.9</span>
	    	<span class="zhe">¥88.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>5980件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/48.jpg"/>
    	</a>
	    	<h3>上新 | 妈妈装仿真丝连衣裙</h3>
	    	<span>¥79.9</span>
	    	<span class="zhe">¥169</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>8598件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/49.jpg"/>
    	</a>
	    	<h3>上新 | 纯棉老粗布夏季吸汗床单</h3>
	    	<span>¥18.9</span>
	    	<span class="zhe">¥28.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1269件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/50.jpg"/>
    	</a>
	    	<h3>上新 | 中长款针织衫女毛衣v领</h3>
	    	<span>¥39.9</span>
	    	<span class="zhe">¥129</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>598件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/51.jpg"/>
    	</a>
	    	<h3>上新 | 招财猫店铺开业礼物存钱罐</h3>
	    	<span>¥20</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1269件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/52.jpg"/>
    	</a>
	    	<h3>上新 | 红豆薏米粉500g</h3>
	    	<span>¥9.9</span>
	    	<span class="zhe">¥12.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>198件已售</p> 
	    	   <span>去淘宝</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/53.jpg"/>
    	</a>
	    	<h3>上新 | 发财树绿萝含盆土盆栽花卉</h3>
	    	<span>¥12</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>3769件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/54.jpg"/>
    	</a>
	    	<h3>上新 | 木耳边镂空短款七分袖开衫</h3>
	    	<span>¥29.9</span>
	    	<span class="zhe">¥52.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>1098件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	
    	<li><a href="javascript:;">
    		<img src="../assets/img/55.jpg"/>
    	</a>
	    	<h3>上新 | 早买早惠钉珠绣花修身开衫</h3>
	    	<span>¥49.9</span>
	    	<span class="zhe">¥82.9</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>10件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/img/56.jpg"/>
    	</a>
	    	<h3>上新 | 芭比兔舒目蒸汽眼罩淡化黑眼圈</h3>
	    	<span>¥22</span>
	    	<span class="zhe">券后价格</span>
	    	<span class="pime">包邮</span>
	    	<div class="shuo">
	    	   <p>368件已售</p> 
	    	   <span>去天猫</span>
	    	</div>
    	</li>
    </ul>
  </div>
  <footer class="footer">
    <div class="buttons">
        <a href="//www.zhe800.com" class="pc">
                                                      电脑端
        </a>
        <a href="javascript:void(0);" class="app">
                                                     客户端
        </a>
        <a href="javascript:void(0);" class="back-top">
                                                          返回
        </a>
        <a href="javascript:void(0);" class="back-top">
                                                          首页
        </a>
    </div>
    <p class="copyright">copyright © 团博百众（北京）科技有限公司</p>
</footer>
</div>
</template>

<script>
import Hello from '../components/Hello'
export default {
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
 	},
 	 component:{
  	Hello
  },
   
 }	
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
#search-wrap{
  height: 2rem;
  padding: 0.4rem;
  border-bottom: 0.1rem solid #d9d9d9;
  background-color: #fff;
  text-align: center;	
}
#search-wrap .logo{
  display: inline-block;
  width: 6rem;
  height: 2rem;
  line-height:2rem;
  font-size: 1.6rem;
}
#search-wrap .category {
    float: right;
    width: 2rem;
    height: 2rem;
    background: url("../assets/category-icon.png") no-repeat 0 0;
    background-size: 100% 100%;
    margin-top: .21333rem;
}
a{
    text-decoration: none;
    outline: 0;
}
ul,li{
	list-style: none;
}
#nav-wrap {
    width: 100%;
    height: 3rem;
    background-color: #fff;
}
#nav-wrap .nav-content {
    width: 100%;
    height: 1rem;
    padding: 1rem 0;
    margin-bottom: 0.6rem;
    background-color: #fff;
    z-index: 2;
}
#nav-wrap .item.all {
    float: left;
}
#nav-wrap .item {
    display: inline-block;
    height: 2rem;
    vertical-align: top;
}
#nav-wrap .item a {
    display: block;
    width: 100%;
    height: 2rem;
    font-size: 1.4rem;
    overflow: hidden;
}
#nav-wrap .item.on span {
    color: #e30c26;
    border-color: #e30c26;
}
#nav-wrap .item a span {
    display: block;
    height: 2rem;
    margin: 0.9rem 0.7rem;
    border-bottom: 0.1rem solid #fff;
    line-height: 2rem;
    font-size: 1.4rem;
    color: #6a6969;
}
#nav-wrap #nav-list {
    float: left;
    position: relative;
    height: 2rem;
    white-space: nowrap;
    z-index: -1;
}
#nav-list{
	float: left;
    position: relative;
    width: 85%;
    height: 2rem;
    white-space: nowrap;
    overflow-x: scroll;
    z-index: -1;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 1;
}	
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
.swiper-slide_1{
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    height: 100%;
    position: relative;
}
#nav-wrap .item {
    display: inline-block;
    height: 1.45067rem;
    vertical-align: top;
}
#nav-wrap .item a {
    display: block;
    width: 100%;
    height: 1.45067rem;
    overflow: hidden;
}
#nav-wrap .item a span {
    display: block;
    height: 1.38667rem;
    margin: 0 .3rem;
    border-bottom: .08533rem solid #fff;
    line-height: 1rem;
    font-size: 1.1rem;
    color: #6a6969;
}
#nav-wrap #drop-down {
    position: relative;
    float: right;
    width: 1.6rem;
    height: 1.45067rem;
}
#nav-wrap #drop-down .drop-down-bg-wrap {
    width: 100%;
    height: 100%;
}
#nav-wrap #drop-down .drop-down-bg-wrap .drop-down-bg {
    position: absolute;
    top: .55467rem;
    left: .49067rem;
    width: .61867rem;
    height: .40533rem;
    background: url("../assets/drop-down-bg.png") no-repeat 0 0;
    background-size: contain;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
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
   height: 100%;
}
.config-tmp{
	position: relative;
	padding: 1rem 0.6rem 0;
	height: 8rem;
}
.page-item{
	width: 100%;
	float: left;
}
.page-item li{
	float: left;
	width: 23%;
	text-align: center;
	padding: 0.2rem .2rem 0;
}
.page-item li a{
	display: inline-block;
    text-align: center;
    width: 5rem;
    height: 6rem;
}
.page-item li p{
	margin-top: 1rem;
	color: #333;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
}
.background-banner {
	position: relative;
    border-bottom: 0.1rem solid transparent;
}
.background-banner img {
    width: 100%;
    height: 100%;
}
.background-banner {
	position: relative;
    border-bottom: 0.1rem solid transparent;
}
.background-banner img {
    width: 100%;
    height: 100%;
}
.three-banner{
	overflow: auto;
}
.three-banner .three-banner-left {
    float: left;
    width: 15.6rem;
    height:16rem;
    border-right: .04267rem solid transparent;
}
.three-banner-left img{
	width: 100%;
	height: 100%;
}
.three-banner .three-banner-right {
    float: right;
   width: 48.9%;
}
.three-banner-right img{
   height: 8rem;	
}
.taotejia_tips {
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #FF4545;
    background: url("../assets/img/7.png") no-repeat 0 0;
    background-size: 100% 100%;
}
.deal-list {
    width: 100%;
    background: #f6f6f6;
    overflow: hidden;
}
.deal-list ul li{
	float: left;
	width: 49%;
	height:22rem;
	background: white;
	margin-right: 0.3rem;
	margin-bottom: 0.3rem;
}
.deal-list ul li img{
	width: 100%;
}
.deal-list h3{
	white-space: nowrap;
	color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.deal-list span{
  color: #ff4545;
  font-size: 1.2rem;	
}
.deal-list li .zhe{
	width:6rem;
	display: inline-block;
	white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #B5B5B5;
  text-decoration: line-through;
  margin-left: 1.2rem;
  margin-top: 0.2rem;
	font-size: 1.1rem;
}
.deal-list .pime{
	float: right;
	color: #9b9b9b;
	margin-right: 0.5rem;
}
.deal-list .shuo{
	width: 100%;
	line-height:1.4rem;
	height:1.4rem;
	white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #9b9b9b;
	display: inline-block;
	margin-top: 0.4rem;
	font-size: 1.2rem;
}
.shuo span{
	display: inline-block;
	text-align: right;
	float: right;
	/*color: #9b9b9b;*/
	margin-right: 0.5rem;
}
.shuo p{
	float:left;
	color: #9b9b9b;
	line-height:1.4rem;
	height:1.4rem;
	display: inline-block;
	margin-right: 0.5rem;
}
.footer {
    margin-bottom: 2rem;
    padding: 0 .5rem;
    background-color: #f6f6f6;
}
.footer .buttons {
    height: 3rem;
    line-height: 2rem;
    padding: .6rem 0;
    border-bottom: 0.1rem solid #d5d5d5;
}
.footer .buttons a {
    display: block;
    float: left;
    width: 25%;
    text-align: center;
    font-size: 1.4rem;
    color: #878686;
}
.copyright {
    height: 4rem;
    line-height:4rem;
    text-align: center;
    color: #878686;
    font-size: 1.2rem;
}
</style>