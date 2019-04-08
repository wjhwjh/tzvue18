<template>
    <div>
        <head-nav title="商品详情"></head-nav>

        <!--以下是内容-->
        <div class="content">
            <div class="contBox">
                <img :src="shopDetail.imgUrl" alt="">
                <h2 v-text="shopDetail.des"></h2>
                <p class="price">{{shopDetail.symbol}}{{shopDetail.price}}</p>
                <p class="del clearFix">
                    <span class="fl">快递：包邮</span>
                    <span class="fr">{{shopDetail.alreadyPaid}}</span>
                </p>
            </div>

            <div class="shopNum">
                购买数量
                <div class="fr numBox">
                    <a href="javascript:;" @click="reduceNum">-</a>
                    <a href="javascript:;" class="num" >{{numCount}}</a>
                    <a href="javascript:;" @click="addNum">+</a>
                </div>
            </div>

            <div class="btn">
                <a class="fl" @click="addCart">加入购物车</a>
                <router-link class="fr" :to="{name: 'shopCart', query: {id:shopDetail.id, title:'likeYou'}}">立即购买</router-link>
            </div>
        </div>

      <!--<div class="content">
        <div class="contBox">
          <img :src="shopDetail.imgUrl" alt="">
          <h2 v-text="shopDetail.des">[为你推荐]日本 20cm 4L 加厚珐琅搪瓷加高汤锅 蒸锅 燃气电磁炉通用 包邮</h2>
          <p class="price">49</p>
          <p class="del clearFix">
            <span class="fl">快递：包邮</span>
            <span class="fr">256人付款</span>
          </p>
        </div>

        <div class="shopNum">
          购买数量
          <div class="fr numBox">
            <a href="javascript:;">-</a>
            <a href="javascript:;" class="num">0</a>
            <a href="javascript:;">+</a>
          </div>
        </div>

        <div class="btn">
          <button class="fl">加入购物车</button>
          <button class="fr">立即购买</button>
        </div>
      </div>-->
    </div>
</template>

<script>
  import shopStorage from './shopStorage'
  import connect from './connect'
  export default {
    data() {
      return {
        shopDetail:{},
        num: 1
      }
    },
    created() {
      let index = this.$route.query.id;
      if (index ){
        let title = this.$route.query.title;
        this.$ajax.get(this.dataURL('vue.php',title,index))
          .then(res=>{
            this.shopDetail = res.data;
            //console.log(this.shopDetail)
            //已选默认数据的展示
            //let getD = shopStorage.getDate(index);
            //this.num = getD? getD: 0;
          })
      }

    },
    computed: {
      numCount () {
         return this.num
      }
    },
    methods: {
      addCart() {
        shopStorage.update({
          id:this.shopDetail.id,
          num: this.num
        });
        // 商品详情页面商品的件数加入购物车后就变为0
        connect.$emit('addCart',this.num);
        this.num = 0;
      },
      reduceNum () {
        this.num--
      },
      addNum () {
        this.num++
      }
    }
  }
</script>

<style scoped>
    .content {
        padding: 10px 20px;
        background: #fff;
    }

    .contBox {
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 1px solid #ddd;
    }

    .contBox img {
        display: inline-block;
    }

    .contBox h2 {
        font-size: 0.4rem;
        text-align: left;
    }

    .contBox .price {
        font-size: 0.45rem;
        color: #ff5000;
        text-align: left;
        padding: 5px 0;
        font-weight: bold;
    }

    .contBox .del {
        color: #999;
        font-size: 0.2rem;

    }

    .shopNum {
        font-size: 0.4rem;
        padding: 10px 0 0;
        height: 45px;
        line-height: 40px;
    }

    .btn a {
        width: 50%;
        text-align: center;
        color: #fff;
        font-size: 0.3rem;
        height: 40px;
        line-height: 40px;
    }

    .btn a:nth-child(1) {
        background: #ff9402;
    }

    .btn a:nth-child(2) {
        background: #ff5000;
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

</style>
