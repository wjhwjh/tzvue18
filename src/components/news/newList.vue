<template>
  <div>
      <head-nav title="新闻列表"></head-nav>
     <!-- <router-link :to="{name:'newDetail'}"><div>详情</div></router-link>-->
      <ul class="newsList">
        <li v-for="(item, index) in newList" :key="index">
          <router-link :to="{name:'newDetail', query:{id: item.id, title: 'newsList'}}">
            <div class="img" >
              <!--:src="item.picUrl" -->
              <img :alt="item.title" v-lazy="item.picUrl">
            </div>
            <div class="del">
              <h2>{{item.title}}}</h2>
              <p>
                <span class="fl">{{item.time}}</span>
                <span class="fr">来源 {{item.source}}</span>
              </p>
            </div>
          </router-link>
        </li>

      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newList: []
      }
    },
    created () {
      this.$ajax.get(this.dataURL('vue.php','newsList'))
        .then(res => {
          this.newList = res.data;
          // console.log(this.newList);
      })
    },
    methods: {
    }
  }
</script>

<style scoped>
.newsList{
  margin-top: 10px;
}
.newsList li{
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.newsList li a{
  display: flex;
  width: 100%;
  align-items: stretch;
}
.newsList .img{
  width: 24%;
  float: left;
  background:#ddd;
}
.newsList .img img{
  width: 100%;
  min-height: 40px;
  display: block;
}

.newsList .img img[lazy=loading] {
  /*height: 100px;
  margin: auto;*/
  width: 20px;
  height: 20px;
  margin: auto;
  background:#ddd;
}

.newsList .del{
  padding-left: 15px;
  width: 76%;

  display: flex;
  flex-flow: wrap;
  align-content:space-between;
}
.newsList h2{
  font-size: 0.3rem;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden;
}
.newsList p{
  font-size: 0.3rem;
  color: #666;
  vertical-align: bottom;
  width: 100%;
  padding-right: 10px;
}
.newsList p span{
  display: inline-block;
  color: #999;
}
</style>
