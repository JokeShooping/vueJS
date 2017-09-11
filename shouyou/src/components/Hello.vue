<template>
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
   
</template>

<script>
import PlayGames from 'components/PlayGames'
export default {
  components: {
  	PlayGames
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
/*.topbar .nav {
    background: url("../common/images/sy-ico.png") 0rem -34.7rem no-repeat;
    background-size: 3rem auto;
}*/
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

</style>
