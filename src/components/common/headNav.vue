<template>
  <div class="head">
    <a href="javaScript:;" @click="goBack" class="goBack icon iconfont icon-fanhui2">返回</a>
    <span>{{title}}</span>
    <a href="javaScript:;" @click="goShare" class="goShare icon iconfont icon-diandian"></a>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['title'],  // 来自父组件的参数
    methods: {
      goBack () {
        console.log(111)
        this.$router.go(-1);
      },
      goShare () {

      }
    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 40px;
    background: #444;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    padding: 0 15px;
    position: relative;
  }

  .goBack {
    color: #fff;
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 14px;
  }
  .goShare {
    color: #fff;
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 14px;
  }
</style>
