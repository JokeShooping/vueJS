var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    // 所有的商品数据
    'products|30-200': [
      {
        'shop_id|+1': 1, 
        'title': '@ctitle(6)',
        'describe': '@csentence()',
        'price|50-400.2': 100,
        'img':'@image(160x100,png)',
        'classify|0-9': 200,
        'num': 1
      }
    ],
    'classifyCount': [
      {id: 1, name: '热销榜'},
      {id: 2, name: '牛奶面包'},
      {id: 3, name: '新鲜水果'},
      {id: 4, name: '优选水果'},
      {id: 5, name: '冰镇饮料'},
      {id: 6, name: '饮料酒水'},
      {id: 7, name: '卤味熟食'},
      {id: 8, name: '进口食品'},
      {id: 9, name: '粮油调味'},
      {id: 10, name: '生活用品'}
    ],
    // 生成购物车
    'cart': []
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});