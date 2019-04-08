<template>
  <div>
    <head-nav title="新闻详情"></head-nav>
    <div class="cont">
      <h2>{{detailData.title}}</h2>
      <div class="time">{{detailData.time}} {{detailData.source}}</div>
      <img :src="detailData.picUrl" alt="">
      <p v-html="detailData.content"></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detailData: {}
      }
    },
    created() {
      let id = this.$route.query.id;
      let title = this.$route.query.title;
      this.$ajax.get(this.dataURL('vue.php', title, id))
        .then(res => {
          this.detailData = res.data;
          //console.log( this.detailData );
        })
    }
  }
</script>

<style scoped>
.cont{
  width: 100%;
  padding: 0 15px;
}
.cont img{
  max-width: 100%;
}
.cont h2{
  font-size: 0.5rem;
  text-align: center;
  line-height: 1.8;
  padding-top: 10px;
}
.cont p{
  font-size: 0.4rem;
  line-height: 1.8;
}
.cont .time{
  font-size: 0.2rem;
  line-height: 1.8;
  text-align: center;
  padding: 10px 0;
}
</style>
