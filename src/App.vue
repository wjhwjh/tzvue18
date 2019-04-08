<template>
  <div id="app">
    <header class="fixed hd" v-text="title"></header>
    <router-view/>

    <footer class="ft">
      <router-link href="#" class="link" :to="{name: 'index'}">
        <div class="svg iconfont icon-shouye"></div>
        首页
      </router-link>
      <a class="link">
        <div class="svg iconfont icon-tianqichaxun"></div>
        天气
      </a>
      <router-link href="#" class="link" :to="{name: 'shopCart'}">
        <div class="svg iconfont icon-gouwuche count"><i class="showNum" v-if="pickNum">{{pickNum}}</i></div>
        购物
      </router-link>
      <router-link :to="{name: 'myCourse'}" class="link">
        <div class="svg iconfont icon-weibiaoti2fuzhi12"></div>
        我的课程
      </router-link>
    </footer>

  </div>
</template>

<script>
  import shopStorage from './components/shop/shopStorage'
  import connect from './components/shop/connect'

  export default {
    data() {
      return {
        title: '小社区',
        pickNum: shopStorage.countDate()
      }
    },
    created() {
      // 移动端适配
      remChange();
      window.addEventListener('resize', remChange);

      function remChange() {
        let html = document.getElementsByTagName('html')[0];
        let width = html.getBoundingClientRect().width;
        if (width >= 750) width = 750;
        html.style.fontSize = width / 10 + 'px';
      }

      connect.$on('addCart', (num) => {
        this.pickNum += num
      });

    }
  }
</script>

<style scoped>
  #app {
    padding-top: 50px;
    padding-bottom: 70px;
  }

  .hd {
    width: 100%;
    height: 50px;
    background: #03acd6;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 46px;
    font-weight: bold;
  }

  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    left: 0;
  }

  .ft {
    background: #fff;
    border-top: 1px solid #ccc;
    padding: 5px 5px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
  }

  .ft .link > div {
    font-size: 0.65rem;
    margin-bottom: 5px;
  }

  .ft .link {
    display: block;
    width: 25%;
    text-align: center;
    color: #222;
    font-size: 0.36rem;
    float: left;
  }

  .showNum {
    background: red;
    color: #fff;
    font-size: 0.14rem;
    border-radius: 50%;
    font-style: normal;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;

  }
</style>
