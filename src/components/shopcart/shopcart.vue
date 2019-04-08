<template>
  <div>
    <head-nav title="购买详情"></head-nav>
    <div class="shopBox">
      <div class="shopItem" v-for="(item, index) in shopCartList" :key="index">
        <div class="shopMsg clearFix">
          <div class="img fl"><img :src="item.imgUrl" alt=""></div>
          <h2 class="fr">{{item.des}}</h2>
        </div>
        <div class="shopOperate">
          <span>{{item.symbol}}{{item.price}}</span>
          <div class="numBox">
            <a href="javascript:;" @click="reduceShop(index)">-</a>
            <a href="javascript:;">{{item.shopNum}}</a>
            <a href="javascript:;" @click="addShop(index)">+</a>
          </div>
          <a href="javaScript:;" @click="delShop(index)">删除</a>
        </div>
      </div>

      <!--<div class="shopItem">
        <div class="shopMsg clearFix">
          <div class="img fl"><img src="../../../static/img/2.jpg" alt=""></div>
          <h2 class="fr">[为你推荐]日本 20cm 4L 加厚珐琅搪瓷加高汤锅 蒸锅 燃气电磁炉通用 包邮</h2>
        </div>
        <div class="shopOperate">
          <span>49</span>
          <div class="numBox">
            <a href="javascript:;" @click="addShop">-</a>
            <a href="javascript:;"  >{{shopNum}}</a>
            <a href="javascript:;" @click="reduceShop">+</a>
          </div>
          <a href="javaScript:;">删除</a>
        </div>
      </div>-->
      <div class="totalPrice">
        <div class="total">
          <p class="totalMoney">
            <span class="font">总计:</span> <span>￥{{totalFn.totalPrice}}</span>
          </p>
          <p class="preferential">
            总金额￥{{totalFn.totalPrice}} 优惠￥0.00
          </p>
        </div>
        <div class="goPayment" @click="goBuy">
          <span class="font">去结算</span><span class="num">({{totalFn.totalNum}}件)</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import shopStorage from '../shop/shopStorage'
  import connect from '../shop/connect'

  export default {
    data() {
      return {
        shopCartList: []
      }
    },
    computed: {
      totalFn() {
        let totalPrice = 0;
        let totalNum = 0;
        this.shopCartList.forEach(item=>{
          totalPrice += item.price*item.shopNum;
          totalNum += item.shopNum;
        })

        return {
          totalPrice,totalNum
        }
      }
    },
    created() {
      let storageData = shopStorage.getDate();
      let title = this.$route.query.title || 'likeYou';
      let dataIndex = Object.keys(storageData);
      dataIndex.forEach((item) => {
        this.$ajax.get(this.dataURL('vue.php', title, item))
          .then(res => {
            this.shopCartList.push(res.data);
            // console.log(this.shopCartList);
            //this.$set(this.shopCartList[index],'shopNum', storageData[item]);
            // 这里只能是遍历，为每一项依次添加
            this.shopCartList.forEach((item) => {
              if(storageData[item.id])this.$set(item,'shopNum', storageData[item.id]);
            })

          })
      })
    },
    methods: {
      addShop(i) {
        connect.$emit('addCart', 1);
        //if(this.shopCartList[i].shopNum<=1)return;
        this.shopCartList[i].shopNum++
        if(this.shopCartList[i].shopNum>20)this.shopCartList[i].shopNum=20;
        shopStorage.update({
          id: this.shopCartList[i].id,
          num: 1
        });
      },
      reduceShop(i) {
        if(this.shopCartList[i].shopNum<=1)return;
        connect.$emit('addCart', -1);
        this.shopCartList[i].shopNum--;
        shopStorage.update({
          id: this.shopCartList[i].id,
          num: -1
        });
      },
      delShop(i) {
        connect.$emit('addCart', -this.shopCartList[i].shopNum);
        shopStorage.deleteDate(this.shopCartList[i].id)
        this.shopCartList.splice(i,1)
      },
      goBuy() {

      }

    }
  }
</script>

<style scoped>
  .shopBox {

  }

  .shopItem {
    padding: 10px 20px;
    background: #fff;
    border-bottom: 1px solid #eee;
    margin-bottom: 5px;
  }

  .shopMsg {
    display: flex;
    align-items: center;
  }

  .shopMsg .img {
    width: 30%;
  }

  .shopMsg .img img {
    width: 100%;
    height: auto;
  }

  .shopMsg h2 {
    width: 70%;
    font-size: 0.4rem;
    padding-left: 15px;
    line-height: 1.8;
    color: #444;
  }

  .shopOperate {
    font-size: 0.4rem;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
  }

  .shopOperate span {
    font-size: 0.4rem;
    color: #df5000;
    font-weight: bold;
  }

  .shopOperate .numBox {
    display: inline-block;
  }

  .shopOperate a {
    font-size: 0.45rem;
    color: #0086b3;
    cursor: pointer;
  }

  .numBox a {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background: #ccc;
    font-size: 0.45rem;
    text-align: center;
    float: left;
    line-height: 30px;
    color: #222;
  }

  .totalPrice {
    font-size: 0.4rem;
    background: #fff;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

  }

  .total {
    width: 70%;
    padding: 10px 0 15px 20px;
  }

  .goPayment {
    width: 30%;
    background: #df5000;
    color: #fff;
    text-align: center;
    padding-top: 20px;
  }

  .totalMoney {
    font-size: 0.4rem;
    color: #df5000;
    font-weight: bold;

  }

  .preferential {
    font-size: 0.2rem;
    color: #df5000;
    padding-top: 5px;
  }


</style>
