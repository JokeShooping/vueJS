<template>
  <div class="container-fluid">
    <div class="panel panel-default row">
      <div class="col-xs-3">
        <a class="btn btn-block btn-default btn-lg" href="###" @click="changeAll()"><em>💎</em>所有商品</a>
        <!--  btn-primary -->
        <a class="btn btn-block btn-default btn-lg" href="###" v-for="(item,index) in classifyList" @click="changeClassify(index)" 
        	:class="{'btn-success': nowClassify === index}">{{item.name}}</a>
      </div>
      <div class="col-xs-8">
        <div class="well" v-for="(item,index) in nowPageProduct">
          <h3>
            <strong>{{item.title}}</strong>
            <span class="pull-right label label-primary">￥{{item.price}}</span>
          </h3>
          <div class="description">
            <span class="lead">{{item.describe}}</span>
            <button class="btn btn-success pull-right" @click="addCart(item)"><em>🌹</em>添加到购物车</button>
          </div>
        </div>
        <div class="pull-right btn-group">
          
          <a class="btn btn-default" v-for="(item,index) in pageCount" @click="changePage(index)" :class="{'btn-info': index === nowPage}">
            {{item}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
// 每一页显示的数量
const pageSize = 5;
export default {
  created () {
    // 获取分类列表
    var _this = this;
    this.$http.get('http://localhost:8081/classifyCount')
      .then(function (data) {
        // console.log(data.data)
        // 将获取的分类列表赋值给classifyList
        _this.classifyList = data.data;
      })

    // 获取所有的商品
    this.$http.get('http://localhost:8081/products')
      .then(function (data) {
        // console.log(data)
        _this.products = data.data;
      })
  },
  data () {
    return {
      classifyList: [],
      products: [],
      // 当前选择的分页下标
      nowPage: 0,
      // 当前选择的分类
      nowClassify: 'all'
    }
  },
  methods: {
    // 切换分类的下标
    changeClassify (index) {
      this.nowPage = 0 ;
      this.nowClassify = index;
    },
    // 切换分类为全部
    changeAll () {
      this.nowClassify = 'all';
    },
    // 切换分页的下标
    changePage (index) {
      this.nowPage = index;
    },
    // 添加到购物车
    addCart (item) {
      this.$store.dispatch('addCart', item);
    }
  },
  computed: {
    // 根据选择的分类返回对应的商品数据
    nowClassifyProduct () {
      if (this.nowClassify === 'all') {
        return this.products;
      } else {
        return this.products.filter(item => item.classify === this.nowClassify);
      }
    },
    // 根据分页下标返回商品
    nowPageProduct () {
      let result = [];
      for (var i = 0; i < this.nowClassifyProduct.length; i++) {
        // 获取开始和结束
        let start = this.nowPage * pageSize;
        let end = this.nowPage * pageSize + pageSize - 1;
        if (i >= start && i <= end) {
          result.push(this.nowClassifyProduct[i]);
        }
      }
      return result;
    },
    // 获取分页按钮的数量
    pageCount () {
      // 根据种类的数量来得出分页的数量
      let count = Math.ceil(this.nowClassifyProduct.length / pageSize);
      return count;
    }
  }
}
</script>

<style>
.col-xs-3 a:nth-child(1){
	background-color: #e0e0e0;
}
.panel{
  margin-right: 2px; 
  margin-left: 2px;
}
.pull-right .btn{
	margin-right: 12px;
	margin-bottom: 10px;
}
.description span{
	color: #999;;
}
.well{
    background-color: #fff;
}
.well:nth-child(1){
	margin-top: 10px;
}
</style>