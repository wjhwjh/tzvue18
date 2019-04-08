<template>
  <div>
    <!--轮播图-->
    <!--图片信息的绑定，图片加链接跳转-->
    <div class="banner">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item, index) in banner" :key="index">
          <!--:src="item.picUrl" -->
          <img :src="item.picUrl" :title="item.title" width="100%" height="100%" >
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--九宫格-->
    <div class="cont clearFix">
      <router-link class="link" :to="{name: 'newList'}">
        <div class="cont-item">
          <i class="icon iconfont icon-news_icon"></i>
          新闻资讯
        </div>
      </router-link>

      <router-link class="link" :to="{name: 'photoList'}">
        <div class="cont-item">
          <i class="icon iconfont icon-plus-share"></i>
          图文分享
        </div>
      </router-link>

      <router-link class="link" :to="{name: 'shopList'}">
        <div class="cont-item">
          <i class="icon iconfont icon-shangpinfenlei"></i>
          商品展示
        </div>
      </router-link>


      <a href="#" class="link">
        <div class="cont-item">
          <i class="icon iconfont icon-liuyan1"></i>
          留言反馈
        </div>
      </a>

      <a href="#" class="link">
        <div class="cont-item">
          <i class="icon iconfont icon-iconfontzhengzaidingwei"></i>
          短信联系
        </div>
      </a>

      <a href="#" class="link">
        <div class="cont-item">
          <i class="icon iconfont icon-lianxiwomen"></i>
          电话联系
        </div>
      </a>


    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        banner: []
      }
    },
    methods: {},
    created() {
      this.$ajax.get(this.dataURL('vue.php', 'banner'))
        .then((res) => {
          this.banner = res.data;
        })
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 200px;
    background: #ffecec;
  }
  .cont{
    background: #fff;
  }
  .cont a{
    display: block;
    width: 33.33%;
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    float: left;
    font-size: 0.4rem;
    text-align: center;
    padding: 20px 0;
    color: #222;
  }
  .cont i{
    display: block;
    font-size: 50px;
    margin-bottom: 10px;
    color: #00b6eb;
  }
</style>
