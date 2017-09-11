<template>
   <nav>
    <router-link to="/" class="home">
      <span></span>
                      今日特卖
    </router-link>
    <router-link to="/selling" class="current">
      <span></span>
                           淘特价
    </router-link>
    <router-link to="/grouper" class="cart">
      <span></span>
                             拼团
    </router-link>
    <router-link to="/shopping" class="shopping">
      <span></span>
                                 购物车
    </router-link>
    <router-link to="/mine" class="mine">
      <span></span>
                                 我的
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background-color: #fff;
  }
  a{
    float: left;
    width: 20%;
    height: 4rem;
    padding-top: 1rem;
    text-align: center;
    color: #777;
    position: relative;
    font-size: 1.4rem;
    text-decoration: none;
    }
    span{
      display: block;
      width: 100%;
      height: 3rem;
      -webkit-background-size: auto 4.5rem;
      background-size: auto 4.5rem;
      background-position: center 0;
      margin-bottom: 0.2rem;
      background-repeat: no-repeat;
    }
    @-webkit-keyframes navs{
  0%{
    -webkit-background-size: auto .6rem;
    background-size: auto .6rem;
  }
  20%{
    -webkit-background-size: auto 2.2rem;
    background-size: auto 2.2rem;
  }
  40%{
    -webkit-background-size: auto 1.8rem;
    background-size: auto 1.8rem;
  }
  60%{
    -webkit-background-size: auto 2.06rem;
    background-size: auto 2.06rem;
  }
  80%{
    -webkit-background-size: auto 1.94rem;
    background-size: auto 1.94rem;
  }
  100%{
    -webkit-background-size: auto 2rem;
    background-size: auto 2rem;
  }
}
@keyframes navs{
  0%{
    -webkit-background-size: auto .6rem;
    background-size: auto .6rem;
  }
  20%{
    -webkit-background-size: auto 2.2rem;
    background-size: auto 2.2rem;
  }
  40%{
    -webkit-background-size: auto 1.8rem;
    background-size: auto 1.8rem;
  }
  60%{
    -webkit-background-size: auto 2.06rem;
    background-size: auto 2.06rem;
  }
  80%{
    -webkit-background-size: auto 1.94rem;
    background-size: auto 1.94rem;
  }
  100%{
    -webkit-background-size: auto 2rem;
    background-size: auto 2rem;
  }
}
nav>a.home>span{
  background-image: url("../common/img/tab_1.png");
}
nav>a.current>span{
  background-image: url("../common/img/tab_2.png");
}
nav>a.cart>span{
  background-image: url("../common/img/tab_3.png");
}
nav>a.shopping>span{
  background-image: url("../common/img/tab_4.png");
}
nav>a.mine>span{
  background-image: url("../common/img/tab_5.png");
}
nav>a.home.router-link-exact-active>span{
  background-image: url("../common/img/tab_1_active.png");
}
nav>a.current.router-link-exact-active>span{
  background-image: url("../common/img/tab_6_active.png");
}
nav>a.cart.router-link-exact-active>span{
  background-image: url("../common/img/tab_3_active.png");
}
nav>a.shopping.router-link-exact-active>span{
  background-image: url("../common/img/tab_4_active.png");
}
nav>a.mine.router-link-exact-active>span{
  background-image: url("../common/img/tab_5_active.png");
}
nav>a.router-link-exact-active>span{
  -webkit-animation: navs 1s;
  animation: navs 1s;
}
</style>
