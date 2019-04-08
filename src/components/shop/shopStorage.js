let shopStorage = {};

//let shopData = JSON.parse(window.localStorage.getItem('shopInfo') || '{}');
let shopData = JSON.parse(window.localStorage.getItem('shopInfo') || '{}')

/*
* 本地存储的数据格式是
* {'1':2, '2':3} 前边传入的id，后边是数量
*
* */
// 更新数据
shopStorage.update = function (data) {
    //console.log(data);
    if(shopData[data.id]){
      shopData[data.id] += data.num
    }else {
      shopData[data.id] = data.num
    }
     //Object.assign(shopData,data)
     //shopData[data.id] = data.num
     return this.saveDate();
}
// 删除数据
shopStorage.deleteDate = function (id) {
   delete shopData[id]
   return this.saveDate();
}

//查找数据
shopStorage.getDate = function () {
  return shopData;
}
//计算总数数据
shopStorage.countDate = function (data) {
  let sum = 0;
  for(let id in shopData){
      sum += shopData[id]
  }
  return sum;
}

// 存储数据
shopStorage.saveDate = function () {
  return window.localStorage.setItem('shopInfo',JSON.stringify(shopData));
}

export default shopStorage
