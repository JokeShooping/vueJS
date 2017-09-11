<template>
<div id="nav-list">
	<!--style="overflow-y:scroll ;"-->
	<nav id="nav-wrap">
		<div class="nav-content" style="position: relative; top: 0px;">
			<div class="item_pl">
				<a href="javascript:;"><span>推荐</span></a>
			</div>
				<div class="nav-list-wrap">
					 <ul class="swiper-slide_1">
					 	<li class="item">
					 		<a href="javascript:;">
					 			<span>服装</span>
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
					 			<span>鞋包</span>
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
					 </ul>
				</div>
		</div>
	</nav>
	<div>
		<!--轮播图-->
	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide class="slide" ><img src="../assets/images/1.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/5.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/images/2.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/images/3.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/6.jpg"/></swiper-slide>
	    <swiper-slide class="slide"><img src="../assets/images/4.jpg"/></swiper-slide>
             <!-- Optional controls -->
	     <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
  <!--横条栏-->
  <div class="config-tmp">
  	<ul class="page-item">
  		<li><a href="javascript:;">
  			<img src="../assets/images/5.png"/>
  			<p>拼团秒杀</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/6.png"/>
  			<p>今日上新</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/7.png"/>
  			<p>好货榜单</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/8.png"/>
  			<p>9块9</p>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/9.png"/>
  			<p>1元试用</p>
  		</a></li>
  	</ul>
  </div>
 <div class="background-banner">
  	<a href="javascripta:;"><img src="../assets/images/5.jpg" alt=""/></a>
  </div>
  
  <div class="bgk"></div>
	<div class="recommend">
		<div class=" clear">
			<span class="tit">邀新享优惠</span>
			<a href="javascript:void(0);" class="more"></a>
		</div>
	</div>
	<div class="config-tmp_1">
  	<ul class="page-item_1">
  		<li><a href="javascript:;">
  			<img src="../assets/images/6.jpg"/>
  			<p class="per">布布宝贝 宝宝青瓜滋润身体乳120ml 婴儿青瓜润肤露</p>
  			<div>
  				<p class="poter">¥5</p>
  				<p class="hert">¥19.8</p>
  			</div>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/7.jpg"/>
  			<p class="per">夏季女士短裤  韩版宽松薄款短裤女夏</p>
  			<div>
  				<p class="poter">¥5</p>
  				<p class="hert">¥10.8</p>
  			</div>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/8.jpg"/>
  			<p class="per">厨房用品 . 烧烤调料瓶 密封罐 胡椒粉瓶</p>
  			<div>
  				<p class="poter">¥10</p>
  				<p class="hert">¥15.8</p>
  			</div>
  		</a></li>
  	</ul>
 </div>
  <div class="deal_pots">
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/9.jpg"/>
        <p>OPPO R9s 全网通4G+64G 双卡双待手机 金色</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥39</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥2999</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/10.jpg"/>
        <p>【品牌正品 少量清仓】花花公子 棉质弹力牛仔短裤男 薄款修身透气五分牛仔裤夏季新品时尚青年短裤</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥49.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥79</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/11.jpg"/>
        <p>【15.9包邮4条限量抢】多码多色网纱长袖打底衫【95%棉5%氨纶】纯色棉质</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥28.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥39.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/12.jpg"/>
        <p>送10片面膜 一枝春八杯水补水润肤5件套装【巨补水滋润】品质保证</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥58.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥89.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/13.jpg"/>
        <p>【80%棉】女士连衣裙印花收腰淑女大码长裙无袖印花连衣裙多色多码波西米亚长裙</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥48.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥69.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/14.jpg"/>
        <p>【限量2000件，之后恢复原价】韩式泡泡纱水洗棉纯色四件套</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥28.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥39.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/15.jpg"/>
        <p>英雄正品359A正姿学生用男女练字铱金钢笔 免费刻字送墨囊 墨水</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥26.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥33</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/16.jpg"/>
        <p>【95%棉5%氨纶 品质承诺】夏季白色牛仔短裤女高腰排扣宽松学生破洞毛边阔腿裤弹力显瘦热裤</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥27.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥36.8</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/17.jpg"/>
        <p>【床裙三件套】席梦思床罩床裙床套单件【床裙+枕套】1.8/1.5m</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥19.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥45.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/18.jpg"/>
        <p>【政府补贴邮费项目】香喷喷小米锅巴混合口味100包/50包/30包/10包可选【休闲食品 办公零食】【正宗豫北小米锅巴】</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥5.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥12.5</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
 </div>	
<div class="bgk"></div>
	<div class="recommend">
		<div class=" clear">
			<span class="tit">居家必备 限量抢购</span>
			<a href="javascript:void(0);" class="more"></a>
		</div>
	</div>	
	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/19.jpg"/>
        <p>【买3组送1组】【本色竹浆6包/组】臻木本色婴儿抽纸不漂白的纸巾</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥12.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥22.5</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/20.jpg"/>
        <p>泰国counterpain酸疼软膏缓解疼痛关节扭伤膝盖腰酸痛60g</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥25.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥34.5</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/21.jpg"/>
        <p>【会呼吸的防晒衣】【时尚轻薄】夏季女中长款防晒衣超薄透气百搭透气大码沙滩薄款外套多色多码</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥30.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥64.8</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/22.jpg"/>
        <p>拼团夏季套装2017七分阔腿裤气质时尚新款宽松显瘦漏肩两件套女</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥87.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration:line-through;color: #999;">¥164</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/23.jpg"/>
        <p>【65%棉】吊带背心运动套装2017夏季新款女装休闲健身短裤跑步家居服两件套</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥38.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥98.8</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/24.jpg"/>
        <p>欧洲站潮2017夏装新款韩版宽松A字裙气质显瘦大码连衣裙女</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥39</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥90</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/25.jpg"/>
        <p>进口百香果西番莲精品中大果5斤（单果60-100g）</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥22.5</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥46.5</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/26.jpg"/>
        <p>多功能抱枕被两用午睡被卡通汽车靠垫被单个105*150cm</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥29</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥40</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/27.jpg"/>
        <p>紫焜 2017新款夏装女装休闲气质夏季两件套时尚韩版洋气套装女</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥39</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥65.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/28.jpg"/>
        <p>2017夏装新款韩版宽松印花棉质短袖t恤女性感漏肩打底衫上衣</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥28.5</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥56.8</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
	<div class="bgk"></div>
	<div class="recommend">
		<div class=" clear">
			<span class="tit">夏季穿搭  件件实惠</span>
			<a href="javascript:void(0);" class="more"></a>
		</div>
	</div>
	<div class="config-tmp_1">
  	<ul class="page-item_1">
  		<li><a href="javascript:;">
  			<img src="../assets/images/102.jpg"/>
  			<p class="per">短袖t恤女夏装新款2017宽松大码字母刺绣韩版百搭学生上衣体桖潮</p>
  			<div>
  				<p class="poter">¥23.9</p>
  				<p class="hert">¥30</p>
  			</div>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/103.jpg"/>
  			<p class="per">【柔软蕾丝】2017夏季新款立领套头印花无袖蕾丝小衫上衣</p>
  			<div>
  				<p class="poter">¥35</p>
  				<p class="hert">¥45.8</p>
  			</div>
  		</a></li>
  		<li><a href="javascript:;">
  			<img src="../assets/images/104.jpg"/>
  			<p class="per">时尚套装女2017夏季新款斜肩短袖上衣印花雪纺哈伦裤九分裤两件套</p>
  			<div>
  				<p class="poter">¥40</p>
  				<p class="hert">¥55.8</p>
  			</div>
  		</a></li>
  	</ul>
 </div>
 <div class="image">
  		<div class="config-from">
  			<img src="../assets/images/29.jpg"/>
        <p>【2/4条装】卡通女童儿童平角内裤可爱女童四角宝宝短裤透气舒适</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥15.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥35.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/30.jpg"/>
        <p>2017夏装韩版棉质短袖t恤女宽松半袖上衣</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥30.5</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥54.8</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	 	
  	 <div class="image">
  		<div class="config-from">
  			<img src="../assets/images/31.jpg"/>
        <p>送眼罩！日系小雏菊和服睡衣 2017夏季女休闲家居服套装</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥35.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥85</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/32.jpg"/>
        <p>运动鞋女内增高2017春夏新款韩版透气粉色厚底百搭原宿休闲跑步鞋</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥39.5</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥50</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	 <div class="image">
  		<div class="config-from">
  			<img src="../assets/images/33.jpg"/>
        <p>新生儿六件套装幼儿初生儿0-3月套装纯棉舒适健康男女宝宝和尚服</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥25.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥35.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/34.jpg"/>
        <p>2017夏季新款超薄百搭沙滩透气短外套拼接防晒衣女</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥49</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥65</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/35.jpg"/>
        <p>夏季新款女装连衣裙子韩版显瘦中长大码宽松两件套装夏</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥68.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥99</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/36.jpg"/>
        <p>九灵狐夏新款长袖格子衬衫防晒衣中长款宽松衬衣学生短袖开衫外套</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥39</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥75</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="bgk"></div>
	<div class="recommend">
		<div class=" clear">
			<span class="tit">休闲服装限购</span>
			<a href="javascript:void(0);" class="more"></a>
		</div>
	</div>	
	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/110.jpg"/>
        <p>绒焉中年女装针织短袖翻领打底衫妈妈装T恤翻领上衣透气短袖上衣</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥32.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥78.5</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>	
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/111.jpg"/>
        <p>【2/4条装】卡通女童儿童平角内裤可爱女童四角宝宝短裤透气舒适</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥12.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥58.9</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/112.jpg"/>
        <p>帽子女夏天空顶帽运动帽太阳帽出游棒球帽男韩版鸭舌帽防晒遮阳帽</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥18.9</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥66</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/113.jpg"/>
        <p>【少量清仓】70%竹纤维30%棉 宝朋婴幼儿内衣2件套装 男女宝宝衣服夏季薄款家居长袖合同套装</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥15</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥60</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/114.jpg"/>
        <p>夏季套装裙女2017新款女装韩版时尚T恤网纱裙两件套连衣裙 潮</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥49</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥89</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
  	</div>
  	<div class="image">
  		<div class="config-from">
  			<img src="../assets/images/115.jpg"/>
        <p>卓衣妍2017夏中老年女装大码妈妈装民族风棉麻印花短袖T恤套装</p>
        <p class="spand">拼团价&nbsp;&nbsp;<span>¥45</span>
        	&nbsp;&nbsp;
        	<del style="text-decoration: line-through;color: #999;">¥79</del>
        	<span class="nomber"><img src="../assets/images/11.png"/></span></p>
  		</div>
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
 	}
 }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
a{
	text-decoration: none;
}
ul,li{
	list-style: none;
}
#nav-wrap {
    border-bottom: 1px solid #aaa;
    width: 100%;
    height: 4rem;
    background-color: #fff;
}
#nav-wrap .nav-content {
    width: 100%;
    padding: 1rem 0;
    z-index: 2;
}
#nav-wrap .item_pl {
    float: left;
}
#nav-wrap .item_pl span {
    border-color: #e30c26;
    /*margin-bottom:1rem;*/
    font-size: 1.6rem;
    color: #e60044;
    display: block;
    border-bottom: 0.3rem solid #e60044;
    height: 2.5rem;
}
.swiper-slide_1{
	width: 100%;
}
.swiper-slide_1 .iterm{
	float: left;
}
#nav-wrap .item a span {
    display: block;
    margin: 0rem 0.7rem;
    float: left;
    border-bottom: 0.1rem solid #fff;
    line-height: 2rem;
    font-size: 1.6rem;
    color: #6a6969;
}
.swiper-pagination-bullet {
	width: 2rem;
    height: 2rem;
    display: inline-block;
    border-radius: 50%;
    background: #f8f8f8;
    opacity: 0.2;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
.swiper-pagination{
	border-radius: 0.5rem;
}
.slide img{
   width: 100%;
   height: 100%;
}
.config-tmp{
	position: relative;
	padding: 1rem 0.6rem 0;
	height: 6rem;
	/*background: yellow;*/
}
.page-item{
	width: 100%;
	float: left;
}
.page-item li{
	float: left;
	width: 18.6%;
	padding: 0.2rem .2rem 0;
}
.page-item li a{
	display: inline-block;
    text-align: center;
    width: 5rem;
    height: 3rem;
}
.page-item li p{
	margin-top: 1rem;
	color: #333;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
}
.page-item li img{
	width: 100%;
	display: inline-block;
	height: 100%;
	vertical-align: middle;
	text-align:center;
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
.bgk{
	height: 1.2rem;
	background-color: #F6F6F6;
}
.recommend {
    background-color: #fff;
    /*margin-top: 1rem;*/
}
.recommend .dh {
    height: 4rem;
    line-height: 4rem;
    margin-left: 1rem;
    text-align: center;
}
.recommend .tit {
	height: 4rem;
    font-size: 1.5rem;
    color: #333;
    /*padding-right: 0.8rem;*/
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 75%;
}
.clear{
	height: 4rem;
	line-height: 4rem;
	text-align: center;
	border-bottom: 0.2rem solid #F6F6F6;
}
.recommend .dh .more {
    margin-left: 0.3rem;
    font-size: 1.2rem;
    color: #bebebe;
}
.recommend .tit::after{
	content: "💎";
}
.config-tmp_1{
	/*position: relative;*/
	padding-left: 0.4rem;
    padding-right:0.1rem;
	/*height: 18rem;*/
	/*background: yellow;*/
}
.page-item_1{
	width: 100%;
	float: left;
	/*height: 20rem;*/
}
.page-item_1 li{
	float: left;
	height: 16rem;
	margin-right: 0.3rem;
	background: #FFFFFF;
}
.page-item_1 li a{
	display: inline-block;
    text-align: center;
}
.page-item_1 li .per{
	width: 9rem;
	/*margin-top: 1rem;*/
	color: #333;
	font-size: 1.2rem;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	text-align: center;
}
.page-item_1 li img{
	width: 10rem;
	height: 10rem;
}
.page-item_1 li div{
	margin-top: 0.5rem;
}
.page-item_1 li .poter{
	display: inline-block;
	margin-right: 3.7rem;
	font-size: 1.4rem;
    color: #e60044;
}
.page-item_1 li .hert{
	display: inline-block;
	/*margin-right: 4rem;*/
	text-decoration: line-through;
	font-size: 1.2rem;
    color: #b5b5b5;
}
.deal_pots{
    padding-bottom: 0.6rem;
    background-color: #fff;
}
.deal_pot .image{
	background: #eee;	
}
.config-from{
	width: 100%;
}
.config-from img{
	width: 100%;
}
.config-from p {
    margin: 0.9rem 1rem 1rem;
    font-size: 1.4rem;
    color: #27272f;
    word-break: break-all;
    height: 2rem;
    line-height: 2rem;
    overflow: hidden;
}
.config-from .spand{
    font-size: 1.2rem;
    color: #e60044;
    height: 2rem;
    line-height: 2rem;
    position: relative;
    top: -0.1rem;
    left: 0.2rem;	
}
.nomber img{
	display: inline-block;
	width: 7rem;
	height: 2rem;
	vertical-align: top;
	margin-left: 9.5rem;
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