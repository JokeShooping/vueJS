<template>
	<div id="ucenter">
		<div class="ucenter-top">
			<em class="quit">返回</em>
			<span class="ucenter-title">个人中心</span>
			<div id="login-register">	登录  |  注册</div>
		</div>
		<div class="myorder enditem">
			<div class="allorder uitem">
				<a href="javascript:;" class="interceptlogin">
				我的订单
				<span class="alltext">查看全部</span>
			   </a>
			</div>
		    <div class="config-tmp">
  	            <ul class="page-item">
  		            <li><a href="javascript:;">
  						<img src="../assets/7.png"/>
  							<p>待付款</p>
  						</a>
  		            </li>
  					<li><a href="javascript:;">
  						<img src="../assets/8.png"/>
  						<p>待发货</p>
  					</a>
  				</li>
  					<li><a href="javascript:;">
  						<img src="../assets/9.png"/>
  						<p>待收货</p>
  					</a>
  				</li>
  				<li><a href="javascript:;">
  					<img src="../assets/10.png"/>
  					<p>待评价</p>
  				</a>
  			</li>
  				<li><a href="javascript:;">
  					<img src="../assets/11.png" style="width: 3.2rem;
					height: 3.0rem;"/>
  					<p>退款/售后</p>
  				</a>
  			</li>
  	    </ul>
     </div>
  </div>
  <div class="bgk"></div>
  <div class="myorder enditem">
    <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">购物车
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	 <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">优惠劵
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	 <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">搜索
		    <span class="alltext">查看全部</span>
		</a>
	</div>
  </div>
  <div class="bgk"></div>
  <div class="myorder enditem">
    <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">收藏夹
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	 <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">足迹
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	<div class="bgk"></div>
	 <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">我的彩票
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	<div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">我的机票
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	<div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">支付宝
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	<div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">银行卡
		    <span class="alltext">查看全部</span>
		</a>
	</div>
  </div>
  <div class="bgk"></div>
  <div class="myorder enditem">
    <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">帮助与客服
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	 <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">下载折800APP
		    <span class="alltext">查看全部</span>
		</a>
	</div>
	 <div class="allorder uitem">
		<a href="javascript:;" class="interceptlogin">旺旺
		    <span class="alltext">查看全部</span>
		</a>
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
</script>

<style>
*{
  margin: 0;
  padding: 0;			
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
}
#ucenter .ucenter-top {
    background: url("../assets/images/topbg.png") no-repeat 0 0;
    /*width: 16rem;*/
    height: 12rem;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
}
.quit {
    font-size: 1.6rem;
    text-align: left;
    color: #fff;
    position: absolute;
    top: 0.9rem;
    left:0.8rem;
  
}
.ucenter-title {
    margin: 1rem 0 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #fff;
    font-family: '微软雅黑';
    display: block;
    text-align: center;
}
#login-register {
    height: 4rem;
    width: 14rem;
    line-height:4rem;
    border: 0.1rem #fff solid;
    font-size: 1.8rem;
    margin: 2rem auto;
    text-align:center;
    border-radius: 10rem;
    color: #fff;
}
#ucenter .enditem {
    margin-bottom: 0.6rem;
}
#ucenter .myorder {
    background: #FFF;
}
#ucenter .myorder .allorder {
    border-bottom: 0.1rem #f1f1f1 solid;
    position: relative;
}
#ucenter .uitem {
    font-size: 1.4rem;
    color: #2b2929;
    padding-left: 1rem;
    height: 4rem;
    line-height: 4rem;
    text-align: left;
    position: relative;
}
#ucenter .uitem a {
    display: block;
    color: #2b2929;
    text-decoration: none;
    outline: 0;
}
#ucenter .myorder .allorder .alltext {
    position: absolute;
    font-size: 1.2rem;
    color: #595858;
    height: 4rem;
    line-height: 4rem;
    right: 1.2rem;
    top: 0;
   display: block;
}
.alltext::after{
	content:"👉";
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
}
.page-item li{
	float: left;
	width: 18.5%;
	padding: 0.2rem .2rem 0;
}
.page-item li a{
	display: inline-block;
    text-align: center;
    /*width: 5rem;
    height: 6rem;*/
}
.page-item li p{
	margin-top: 1rem;
	color: #333;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
}
.bgk{
	height: 1.2rem;
	background-color: #F6F6F6;
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