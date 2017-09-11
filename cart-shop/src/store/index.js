import Vue from 'vue'
import Vuex from 'vuex'
// 引入axios
import http from 'axios'

Vue.use(Vuex)

// 相当于组件中的data
const state = {
  cart: []
}

// 就相当vuex中计算属性
const getters = {
  // 总数量
  totalNum (state) {
    let result = 0
    for (var i = 0; i < state.cart.length; i++) {
      result += (state.cart[i].num)
    }
    return result
  },
  // 总价格
  totalPrice (state) {
    let result = 0
    for (var i = 0; i < state.cart.length; i++) {
      result += (state.cart[i].price * state.cart[i].num)
    }
    return result
  }
}

const actions = {
  // 用于初始化的时候从数据库中获取数据
  getCart ({commit}) {
    let url = 'http://localhost:8081/cart'

    http.get(url)
      .then(function (data) {
        commit('GET_CART', data.data)
      })
  },
  addCart ({commit}, item) {
    // 先要判断在数据库中是否已有这个商品对象
    let url = 'http://localhost:8081/cart?shop_id=' + item.shop_id
    http.get(url)
      .then(function (data) {
        if (data.data.length > 0) {
          // 就是让数据中的这个商品数量++
          let obj = data.data[0]
          // 更新
          // obj.id->商品在购物车中id
          let url = 'http://localhost:8081/cart/' + obj.id
          var num = ++obj.num
          http.put(url, {
            shop_id: obj.shop_id,
            title: obj.title,
            price: obj.price,
            num: num
          }).then(function (data) {
            // 调用mutations下的ADD_CART方法,同时将后台返回的更新后的对象传给ADD_CART方法
            commit('ADD_CART', data.data)
          })
        } else {
          // 那么就需要将这个商品添加到数据库中
          let obj = {
            // 这个商品在商品列表中的id
            shop_id: item.shop_id,
            title: item.title,
            price: item.price,
            num: 1
          }
          // 添加的请求路径
          let url = 'http://localhost:8081/cart'
          http.post(url, obj).then(function (data) {
            // 调用mutations下的ADD_CART方法,同时将后台返回的更新后的对象传给ADD_CART方法
            commit('ADD_CART', data.data)
          })
        }
      })
  },
  reduce ({commit}, item) {
    // 让数据库中的数量减少
    let url = 'http://localhost:8081/cart/' + item.id
    let obj = {
      shop_id: item.shop_id,
      title: item.title,
      price: item.price,
      num: --item.num
    }
    http.put(url, obj).then(function (data) {
      console.log(data)
      commit('REDUCE', data.data)
    })
  },
  // 增加数量
  increase ({commit}, item) {
    let url = 'http://localhost:8081/cart/' + item.id
    let obj = {
      shop_id: item.shop_id,
      title: item.title,
      price: item.price,
      num: ++item.num
    }
    http.put(url, obj).then(function (data) {
      console.log(data)
      commit('INCREASE', data.data)
    })
  },
  // 删除
  del ({commit}, item) {
    let url = 'http://localhost:8081/cart/' + item.id
    http.delete(url)
      .then(function (data) {
        console.log(data)
        commit('DEL', item)
      })
  }
}
const mutations = {
  // 删除对象
  DEL (state, item) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].shop_id === item.shop_id) {
        state.cart.splice(i, 1)
      }
    }
  },
  INCREASE (state, item) {
    // 要更新哪个商品
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].shop_id === item.shop_id) {
        state.cart[i].num = item.num
      }
    }
  },
  REDUCE (state, item) {
    // 要更新哪个商品
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].shop_id === item.shop_id) {
        state.cart[i].num = item.num
      }
    }
  },
  GET_CART (state, cartArr) {
    state.cart = cartArr
  },
  ADD_CART (state, item) {
    // 更改state,更新页面
    if (item.num > 1) {
      // 修改
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].shop_id === item.shop_id) {
          state.cart[i].num++
        }
      }
    } else {
      // 添加
      console.log(item)
      state.cart.push(item)
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
