<template>
  <div>
    <head-nav title="图文分享"></head-nav>
    <div class="tabBar clearFix">
      <a href="javaScript:;" v-for="(item) in photoNav" @click="getImgs(item.tip)" :class="item.id===1?'active':''" v-text="item.title" :key="item.id"></a>
    </div>

    <div class="tabCont">
      <ul class="clearFix contList show">
         <li v-for="(item, index) in womanStar" :key="index">
           <router-link :to="{name:'photo', query: {id: item.id, title:item.tip}}">
             <div class="img"><img v-lazy="item.picUrl" alt=""></div>
             <p>{{item.title}}</p>
           </router-link>
         </li>
      </ul>
      <ul class="clearFix contList">
        <li v-for="(item, index) in manStar" :key="index">
          <router-link :to="{name:'photo', query: {id: item.id, title:item.tip}}">
            <div class="img"><img v-lazy="item.picUrl" alt=""></div>
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
      <ul class="clearFix contList">
        <li v-for="(item, index) in fullView" :key="index">
          <router-link :to="{name:'photo', query: {id: item.id, title:item.tip}}">
            <div class="img"><img v-lazy="item.picUrl" alt=""></div>
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        photoNav: [],
        womanStar: [],
        manStar: [],
        fullView: []
      }
    },
    created() {
      // 图文导航请求
      this.$ajax.get(this.dataURL('vue.php', 'shareNav'))
        .then((res) => {
          this.photoNav = res.data

        })

      this.getImgs('womanStar')
    },
    methods: {
      getImgs(title) {
        console.log(title);
        this.$ajax.get(this.dataURL('vue.php',title))
          .then((res)=>{
            this[title] = res.data; // 这里使用对象的属性名是变量进行一次赋值
            console.log(this.womanStar);
            this.tabActive()
          })
      },
      tabActive() {
        let tabBar = document.getElementsByClassName('tabBar')[0].getElementsByTagName('a');
        let contList = document.getElementsByClassName('tabCont')[0].getElementsByTagName('ul');
        let len = tabBar.length;
        for (let i=0; i<len; i++){
          tabBar[i].index = i
          tabBar[i].onclick = function () {
            for(i=0; i<len; i++){
              tabBar[i].classList.remove('active')
              contList[i].classList.remove('show')
            }
            this.classList.add('active')
            contList[this.index].classList.add('show')
          }
        }
      }
    }
  }
</script>

<style scoped>
  .tabBar {
    background: #fff;
  }

  .tabBar a {
    display: block;
    float: left;
    width: 33.33%;
    font-size: 0.4rem;
    color: #222;
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  .tabBar a.active {
    border-bottom: 1px solid #0086b3;
  }
  .tabCont{
    position: relative;
  }
  .tabCont .contList{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .tabCont .contList.show{
    display: block;
  }
  .tabCont .contList li{
    border-bottom: 1px solid #ddd;
    padding: 10px 15px;
    width: 100%;
  }
  .tabCont .contList li a{
    display: flex;
    align-items: center;
  }
  .tabCont .contList .img{
    width: 16%;
  }
  .tabCont .contList .img img{
    width: 100%;
    display: block;
  }
  .tabCont .contList p{
    width: 84%;
    font-size: 0.4rem;
    padding-left: 10px;
    color: #222;
  }


</style>
