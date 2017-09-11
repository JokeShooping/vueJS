<template>
 <div style="overflow-y:scroll;">
	<div id="search-wrap">
		<div class="logo"></div>
		<a href="javascript:;" class="category"></a>
	</div>
	<nav id="nav-wrap">
		<div class="nav-content" style="position: relative; top: 0px;">
			<div class="item all on">
				<a href="javascript:;"><span>推荐</span></a>
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
					 			<span>数码家电</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>运动</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>鞋包</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>美食</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>居家</span>
					 		</a>
					 	</li>
					 	
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>女装</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>配饰</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>内衣</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>美妆</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>母婴儿童</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>家纺</span>
					 		</a>
					 	</li>
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>中老年</span>
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
	    <swiper-slide class="slide" ><img src="../assets/1.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/2.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/3.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/4.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/5.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/6.jpg"/></swiper-slide>
             <!-- Optional controls -->
	     <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
  <div class="config-tmp">
  	<ul class="page-item">
  		<li><a href="javascript:;">
  			<img src="../assets/7.png"/>
  			<p>签到红包</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/8.png"/>
  			<p>9.9包邮</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/9.png"/>
  			<p>优品汇</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/10.png"/>
  			<p>品牌团</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/11.png" style="width: 3.2rem;
	height: 3.0rem;"/>
  			<p>热销榜</p>
  		</a></li>
  	</ul>
  </div>
  <div class="background-banner">
  	<a href="javascripta:;"><img src="../assets/12.jpg" alt="" /></a>
  </div>
 
 <div class="three-banner">
 	<div class="three-banner-left">
 		<a href="javascript:;">
 			<img src="../assets/13.jpg"/>
 		</a>
 	</div>
 	<div class="three-banner-right">
 		<a href="javascript:;"><img src="../assets/14.jpg"/></a>
 		<a href="javascript:;"><img src="../assets/15.jpg"/></a>
 	</div>
 </div>
 <section class="recommend-for-you-wrap">
 	<a href="javascript:;"><img src="../assets/16.png"/></a>
 </section>
 <!--<div class="mait">
 	<span>热卖爆款</span>
 	<span>热门品牌</span>
 </div>-->
 <div id="deal-tab">
 	<ul>
 		<li class="on"><span>热卖爆款</span></li>
 		<li><span>热门品牌</span></li>
 	</ul>
 </div>
 <div class="deal-list">
    <ul>
    	<li><a href="javascript:;">
    		<img src="../assets/17.jpg"/>
    	</a>
	    	<h3>优品 | 现代懒人沙发</h3>
	    	<span>¥89</span>
	    	<span class="zhe">26-27日跨店2件8.5折</span>
	    	<span class="pime">1.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/18.jpg"/>
    	    </a>
	    	<h3>优品  | 牵手不粘锅炒锅32cm区间价</h3>
	    	<span>¥28</span>
	    	<span class="zhe">¥199.5</span>
	    	<span class="pime">1.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/19.jpg"/>
    	    </a>
	    	<h3>优品  |婷美轻柔收腹连体衣</h3>
	    	<span>¥59</span>
	    	<span class="zhe">¥398</span>
	    	<span class="pime">1.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/20.jpg"/>
    	    </a>
	    	<h3>情侣睡衣短袖背心纯棉家居服套装</h3>
	    	<span>¥29</span>
	    	<span class="zhe">¥198</span>
	    	<span class="pime">1.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/21.jpg"/>
    	    </a>
	    	<h3>重庆老川江牛肉干48g*8袋</h3>
	    	<span>¥33.8</span>
	    	<span class="zhe">26-27日跨店2件7.5折</span>
	    	<span class="pime">3.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/22.jpg"/>
    	    </a>
	    	<h3>海锚多功能插排1.8m</h3>
	    	<span>¥24.8</span>
	    	<span class="zhe">¥75</span>
	    	<span class="pime">3.4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/23.jpg"/>
    	    </a>
	    	<h3>家得宝金装纸尿裤L114片四码可选</h3>
	    	<span>¥98</span>
	    	<span class="zhe">APP专享86元</span>
	    	<span class="pime">3.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/24.jpg"/>
    	    </a>
	    	<h3>纳百川车载家用加热揉捏披肩</h3>
	    	<span>¥88.8</span>
	    	<span class="zhe">¥87</span>
	    	<span class="pime">3.0折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/25.jpg"/>
    	    </a>
	    	<h3>南极人男士中腰透气内裤5条</h3>
	    	<span>¥43.9</span>
	    	<span class="zhe">¥289</span>
	    	<span class="pime">1.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/26.jpg"/>
    	    </a>
	    	<h3>中狮雨前两级龙井200克罐装</h3>
	    	<span>¥78</span>
	    	<span class="zhe">¥218</span>
	    	<span class="pime">3.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/27.jpg"/>
    	    </a>
	    	<h3>除湿盒干燥剂吸湿剂5盒装</h3>
	    	<span>¥20</span>
	    	<span class="zhe">¥50</span>
	    	<span class="pime">4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/28.jpg"/>
    	    </a>
	    	<h3>宁夏特级枸杞100g*2袋</h3>
	    	<span>¥15.6</span>
	    	<span class="zhe">¥25</span>
	    	<span class="pime">4.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/29.jpg"/>
    	    </a>
	    	<h3>优品| 红豆女士四条装棉质内裤</h3>
	    	<span>¥42.8</span>
	    	<span class="zhe">¥189</span>
	    	<span class="pime">2.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/30.jpg"/>
    	    </a>
	    	<h3> 男舒适柔滑内裤三条装</h3>
	    	<span>¥31.9</span>
	    	<span class="zhe">¥98</span>
	    	<span class="pime">3.3折</span>
    	</li>
    	<!-------------------------->
    	<li><a href="javascript:;">
    		<img src="../assets/31.jpg"/>
    	    </a>
	    	<h3>焦糖核桃味瓜子1500g</h3>
	    	<span>¥23.8</span>
	    	<span class="zhe">¥75</span>
	    	<span class="pime">3.2折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/32.jpg"/>
    	    </a>
	    	<h3>优品 | 宠物先生通用型狗粮4包*500</h3>
	    	<span>¥19.6</span>
	    	<span class="zhe">¥140</span>
	    	<span class="pime">1.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/33.jpg"/>
    	    </a>
	    	<h3>优品| 独头黑蒜500g</h3>
	    	<span>¥25.8</span>
	    	<span class="zhe">¥119</span>
	    	<span class="pime">2.2折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/34.jpg"/>
    	    </a>
	    	<h3>茶韵金骏眉300g</h3>
	    	<span>¥38.9</span>
	    	<span class="zhe">¥128</span>
	    	<span class="pime">3.2折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/35.jpg"/>
    	    </a>
	    	<h3>优品 | 飞科吹风机电吹风发廊家用负离子</h3>
	    	<span>¥70</span>
	    	<span class="zhe">满99元减10元</span>
	    	<span class="pime">3.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/36.jpg"/>
    	    </a>
	    	<h3>多款可选，2017春秋季新品！</h3>
	    	<span>¥49</span>
	    	<span class="zhe">¥200</span>
	    	<span class="pime">2.4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/37.jpg"/>
    	    </a>
	    	<h3>嘉盈多味瓜子仁1000g</h3>
	    	<span>¥18.8</span>
	    	<span class="zhe">¥69</span>
	    	<span class="pime">2.8折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/38.jpg"/>
    	    </a>
	    	<h3>凉爽舒适提花冰丝席</h3>
	    	<span>¥59</span>
	    	<span class="zhe">¥389</span>
	    	<span class="pime">1.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/39.jpg"/>
    	    </a>
	    	<h3>置物架卫浴五金挂件套装免打孔</h3>
	    	<span>¥38</span>
	    	<span class="zhe">¥76</span>
	    	<span class="pime">1.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/40.jpg"/>
    	    </a>
	    	<h3>优品| 好中好和田五星红枣500g*2</h3>
	    	<span>¥32</span>
	    	<span class="zhe">¥176</span>
	    	<span class="pime">2.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/41.jpg"/>
    	    </a>
	    	<h3>苹果铝材灯饰灯具</h3>
	    	<span>¥42</span>
	    	<span class="zhe">¥576</span>
	    	<span class="pime">0.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/42.jpg"/>
    	    </a>
	    	<h3>盼盼梅尼耶干蛋糕2000g</h3>
	    	<span>¥88.5</span>
	    	<span class="zhe">26-27日跨店2件8.5折</span>
	    	<span class="pime">3.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/43.jpg"/>
    	    </a>
	    	<h3>艺琳娜4条装中腰内裤</h3>
	    	<span>¥22</span>
	    	<span class="zhe">¥98</span>
	    	<span class="pime">2.3折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/44.jpg"/>
    	    </a>
	    	<h3>优品 | 新疆棉吸水舒适大浴巾</h3>
	    	<span>¥24.9</span>
	    	<span class="zhe">¥98</span>
	    	<span class="pime">1.3折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/45.jpg"/>
    	    </a>
	    	<h3>优品 | 腾达300M无线路由器</h3>
	    	<span>¥57</span>
	    	<span class="zhe">¥198</span>
	    	<span class="pime">2.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/46.jpg"/>
    	    </a>
	    	<h3>优品 | 倍康爽多多纸尿片四码可选</h3>
	    	<span>¥78.9</span>
	    	<span class="zhe">满125元减15元</span>
	    	<span class="pime">2.3折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/47.jpg"/>
    	    </a>
	    	<h3>优品  | ABC日用卫生巾10包</h3>
	    	<span>¥63</span>
	    	<span class="zhe">26-27日跨店2件8.5折</span>
	    	<span class="pime">4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/48.jpg"/>
    	    </a>
	    	<h3>哇爱一次洗防溢乳垫100片*2盒</h3>
	    	<span>¥45</span>
	    	<span class="zhe">¥120</span>
	    	<span class="pime">2.4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/49.jpg"/>
    	    </a>
	    	<h3>自然堂水润保湿柔肤水</h3>
	    	<span>¥58</span>
	    	<span class="zhe">¥68</span>
	    	<span class="pime">8.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/50.jpg"/>
    	    </a>
	    	<h3>莱维尔黄桃罐头425g*6罐</h3>
	    	<span>¥29</span>
	    	<span class="zhe">¥72</span>
	    	<span class="pime">4.1折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/51.jpg"/>
    	    </a>
	    	<h3>优品| 法国进口红酒6支装</h3>
	    	<span>¥58</span>
	    	<span class="zhe">¥94.4</span>
	    	<span class="pime">1.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/52.jpg"/>
    	    </a>
	    	<h3>南方黑芝麻糊原味640g*2袋</h3>
	    	<span>¥42.9</span>
	    	<span class="zhe">¥76</span>
	    	<span class="pime">3.8折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/53.jpg"/>
    	    </a>
	    	<h3>优品|乳酸菌100ml*40瓶</h3>
	    	<span>¥44.5</span>
	    	<span class="zhe">¥70.4</span>
	    	<span class="pime">6.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/54.jpg"/>
    	    </a>
	    	<h3>金骏眉红茶共500g</h3>
	    	<span>¥59</span>
	    	<span class="zhe">¥420</span>
	    	<span class="pime">1.8折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/55.jpg"/>
    	    </a>
	    	<h3>男士休闲运动短袖套装</h3>
	    	<span>¥59</span>
	    	<span class="zhe">26-27日跨店2件7.5折</span>
	    	<span class="pime">2.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/56.jpg"/>
    	    </a>
	    	<h3>LED吸顶灯长方形大气客厅灯具</h3>
	    	<span>¥88</span>
	    	<span class="zhe">¥450</span>
	    	<span class="pime">2.8折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/57.jpg"/>
    	    </a>
	    	<h3>可爱卡通创意玻璃水杯400ml</h3>
	    	<span>¥15.9</span>
	    	<span class="zhe">26-27日跨店2件7.5折</span>
	    	<span class="pime">5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/58.jpg"/>
    	    </a>
	    	<h3>红棉咖啡方糖120粒*2盒</h3>
	    	<span>¥18.8</span>
	    	<span class="zhe">¥45</span>
	    	<span class="pime">2.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/59.jpg"/>
    	    </a>
	    	<h3>优品| 纯燕麦片1000g*2瓶</h3>
	    	<span>¥36.9</span>
	    	<span class="zhe">¥78</span>
	    	<span class="pime">5.8折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/60.jpg"/>
    	    </a>
	    	<h3>洪胜记肉松饼2000g整箱</h3>
	    	<span>¥30.8</span>
	    	<span class="zhe">¥72</span>
	    	<span class="pime">4.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/61.jpg"/>
    	    </a>
	    	<h3>优品 | 臻享柔薄天使纸尿片</h3>
	    	<span>¥54.9</span>
	    	<span class="zhe">¥178</span>
	    	<span class="pime">3.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/62.jpg"/>
    	    </a>
	    	<h3>山西杏花村产地四大美女53度115ml*4</h3>
	    	<span>¥95</span>
	    	<span class="zhe">¥299</span>
	    	<span class="pime">3.2折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/63.jpg"/>
    	    </a>
	    	<h3>优品  | 婴儿柔洁湿巾80抽*5包</h3>
	    	<span>¥30.9</span>
	    	<span class="zhe">¥58</span>
	    	<span class="pime">6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/64.jpg"/>
    	    </a>
	    	<h3>优品 | 月子服产后薄款哺乳睡衣</h3>
	    	<span>¥55</span>
	    	<span class="zhe">¥219</span>
	    	<span class="pime">3.4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/66.jpg"/>
    	    </a>
	    	<h3>韩版夏季薄款棉绸睡衣大码</h3>
	    	<span>¥35</span>
	    	<span class="zhe">¥99</span>
	    	<span class="pime">3.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/65.jpg"/>
    	    </a>
	    	<h3>植护带盖80抽片装*3包</h3>
	    	<span>¥15.9</span>
	    	<span class="zhe">26-27日跨店2件8.5折</span>
	    	<span class="pime">4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/67.jpg"/>
    	    </a>
	    	<h3>日本花王纸尿裤M64+L54片</h3>
	    	<span>¥235</span>
	    	<span class="zhe">¥399</span>
	    	<span class="pime">4.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/68.jpg"/>
    	    </a>
	    	<h3>夏季短袖五分裤卡通睡衣家居服</h3>
	    	<span>¥40.9</span>
	    	<span class="zhe">¥100</span>
	    	<span class="pime">3.0折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/69.jpg"/>
    	    </a>
	    	<h3>优品 | 36寸圆角云杉民谣吉他</h3>
	    	<span>¥367</span>
	    	<span class="zhe">¥1599</span>
	    	<span class="pime">2.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/70.jpg"/>
    	    </a>
	    	<h3>vivo X9 Plus全网通6GB+64G手机</h3>
	    	<span>¥2698</span>
	    	<span class="zhe">¥2999</span>
	    	<span class="pime">9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/71.jpg"/>
    	    </a>
	    	<h3>奥罗拉干红葡萄酒2只木盒装</h3>
	    	<span>¥367</span>
	    	<span class="zhe">¥1599</span>
	    	<span class="pime">2.7折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/72.jpg"/>
    	    </a>
	    	<h3>西班牙原瓶进口红酒6支</h3>
	    	<span>¥198</span>
	    	<span class="zhe">¥5980</span>
	    	<span class="pime">0.4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/73.jpg"/>
    	    </a>
	    	<h3>卡通斜纹大版花棉质四件套</h3>
	    	<span>¥167</span>
	    	<span class="zhe">¥599</span>
	    	<span class="pime">2.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/74.jpg"/>
    	    </a>
	    	<h3>韩版情侣睡衣棉短袖可爱薄款套装</h3>
	    	<span>¥98</span>
	    	<span class="zhe">¥198</span>
	    	<span class="pime">3.4折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/75.jpg"/>
    	    </a>
	    	<h3>田园半遮光多色短窗帘1*2米</h3>
	    	<span>¥67</span>
	    	<span class="zhe">¥199</span>
	    	<span class="pime">2.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/76.jpg"/>
    	    </a>
	    	<h3>韩版夏季薄款棉绸睡衣大码</h3>
	    	<span>¥48</span>
	    	<span class="zhe">¥98</span>
	    	<span class="pime">3.6折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/77.jpg"/>
    	    </a>
	    	<h3>安儿乐小轻芯婴儿纸尿裤XL70片</h3>
	    	<span>¥105</span>
	    	<span class="zhe">¥299</span>
	    	<span class="pime">2.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/78.jpg"/>
    	    </a>
	    	<h3>花王纸尿裤量贩装L72片</h3>
	    	<span>¥148</span>
	    	<span class="zhe">¥396</span>
	    	<span class="pime">3.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/79.jpg"/>
    	    </a>
	    	<h3>佳爽超薄纸尿裤L78片四码可选</h3>
	    	<span>¥62</span>
	    	<span class="zhe">跨店满128减20 满100返100</span>
	    	<span class="pime">2.5折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/80.jpg"/>
    	    </a>
	    	<h3>可爱小熊图案，孩子喜欢，自己吃</h3>
	    	<span>¥58</span>
	    	<span class="zhe">¥96</span>
	    	<span class="pime">6.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/81.jpg"/>
    	    </a>
	    	<h3>潮流贴布 全棉短袖短裤薄款男士</h3>
	    	<span>¥78</span>
	    	<span class="zhe">¥196</span>
	    	<span class="pime">4.9折</span>
    	</li>
    	<li><a href="javascript:;">
    		<img src="../assets/82.jpg"/>
    	    </a>
	    	<h3>森系甜美内衣聚拢文胸套装</h3>
	    	<span>¥28</span>
	    	<span class="zhe">¥96</span>
	    	<span class="pime">5.9折</span>
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
  width: 4rem;
  height: 2rem;
  background: url("../assets/logo.png") no-repeat 0 0;
  background-size: 100% 100%;
  /*margin-top: 0.8rem;*/
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
    /*border-bottom: 1px solid #aaa;*/
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
    width: 100%;
    height: 100%;
    /*white-space: nowrap;
    overflow-x: scroll;*/
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
    /*font-size: .59733rem;*/
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
	/*background: yellow;*/
}
.page-item{
	width: 100%;
	float: left;
	/*background: lawngreen;*/
}
.page-item li{
	float: left;
	width: 18.5%;
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
    /*display: block;*/
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
	/*margin-bottom: 0.8rem;*/
}
.three-banner .three-banner-right {
    float: right;
   width: 48.9%;
}
.three-banner-right img{
   height: 8rem;	
}
.recommend-for-you-wrap {
    background-color: #f6f6f6;
    border-bottom: .04267rem solid transparent;
}
.recommend-for-you-wrap img{
	width: 100%;
}
#deal-tab {
	position: absolute;
    background-color: #FFF;
    width: 100%;
    z-index: 2;
    top: 68px;
    position: static;
    display: block;
}
#deal-tab li {
    width: 50%;
    float: left;
    text-align: center;
}
#deal-tab li.on span {
    color: #FF4545;
    border-bottom: 0.1rem solid #FF4545;
}
#deal-tab li span {
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
    color: #2B2929;
    font-size: 1.2rem;
}
.deal-list {
    width: 100%;
    background: #f6f6f6;
    overflow: hidden;
}
.deal-list ul li{
	float: left;
	width: 49%;
	height:20rem;
	background: white;
	margin-right: 0.3rem;
	margin-bottom: 0.3rem;
}
.deal-list ul li img{
	width: 100%;
	/*height: 100%;*/
}
.deal-list h3{
	white-space: nowrap;
	color: #666;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0.8rem;
}
.deal-list span{
  color: #ff4545;
  font-size: 1rem;	
}
.deal-list .zhe{
	width:8rem;
	display: inline-block;
	white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #B5B5B5;
    text-decoration: line-through;
    margin-left: 0.4rem;
    padding-top: 0.2rem;
	font-size: 0.9rem;
}
.deal-list .pime{
	float: right;
	color: #9b9b9b;
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
    background-color: #FFFFFF;
    font-size: 1.2rem;
}
</style>