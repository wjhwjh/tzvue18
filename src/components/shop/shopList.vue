<template>
    <div>
        <head-nav title="商品展示"></head-nav>
        <ul class="content clearFix">
            <li v-for="(item,index) in shopList" :key="index">
                <router-link :to="{name:'shopDetail', query:{id:(index+1), title:'likeYou'}}">
                    <div class="box">
                        <!--:src="item.imgUrl"-->
                        <img alt="" v-lazy="item.imgUrl">
                        <h2 v-text="item.des"></h2>
                        <p class="clearFix"><span>{{item.symbol}}{{item.price}}</span><span>{{item.alreadyPaid}}</span></p>
                    </div>
                </router-link>
            </li>

           <!-- <li>
                <a href="">
                    <div class="box">
                        <img src="../../../static/img/2.jpg" alt="">
                        <h2>[为你推荐]日本 20cm 4L 加厚珐琅搪瓷加高汤锅 蒸锅 燃气电磁炉通用 包邮</h2>
                        <p class="clearFix"><span>¥49</span><span>256人付款</span></p>
                    </div>
                </a>
            </li>-->

        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        shopList: []
      }
    },
    created() {
      this.$ajax.get(this.dataURL('vue.php', 'likeYou'))
        .then(res => {
         //  console.log(res);
          this.shopList = res.data;
          //console.log(this.shopList);
        })
    }
  }
</script>

<style scoped>
    .content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .content li {
        width: 50%;
        float: left;
        padding: 2px;
    }

    .content li .box {
        background: #fff;
        padding: 5px 5px 10px;
        font-size: 0.2rem;
        color: #222;
    }

    .content li .box h2 {
        font-weight: normal;
        padding: 5px 0;
        text-overflow: ellipsis;
        /* white-space: nowrap;*/
        word-break: break-all;
        overflow: hidden;
        height: 40px;
        margin-bottom: 5px;
    }

    .content li .box img {
        width: 100%;
    }

    .content li .box p span:nth-child(1) {
        float: left;
        color: #ff5000;
    }

    .content li .box p span:nth-child(2) {
        float: right;
        color: #999;
    }
</style>
