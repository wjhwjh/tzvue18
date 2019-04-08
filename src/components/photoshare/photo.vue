<template>
  <div>
    <head-nav title="图片详情"></head-nav>
    <div class="imgBox">
      <img v-for="(item, index) in photoData"  v-lazy="item.picUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {photoData:[]}
    },
    created () {
      let title = this.$route.query.title;
      let id = this.$route.query.id;
      this.$ajax.get(this.dataURL('vue.php', title, id))
        .then(res=>{
          this.photoData = res.data;
           //console.log(res);
        })

    }
  }
</script>

<style scoped>
.imgBox{
  text-align: center;
}
.imgBox img{
  width: 85%;
  margin:10px auto;
  display: block;
}
</style>
