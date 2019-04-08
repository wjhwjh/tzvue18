import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import Mint from 'mint-ui'
import Index from '../components/index'
import headNav from '../components/common/headNav'
import NewList from '../components/news/newList'
import newDetail from '../components/news/newDetail'
import Error from '../components/error'
import photoList from '../components/photoshare/photolist'
import photo from '../components/photoshare/photo'
import shopList from '../components/shop/shopList'
import shopDetail from '../components/shop/shopDetail'
import shopCart from '../components/shopcart/shopcart'
import myCourse from '../components/myCourse/courseList'

// 组件使用
Vue.use(Mint)
Vue.component('headNav',headNav)

// 插件
// 数据请求
Vue.prototype.$ajax = Axios
Axios.defaults.baseURL = 'http://tanzhouweb.com/vueProject/'
Vue.prototype.dataURL = function (file, title, id) {
  id = (id === undefined)?'':id;
  return file + '?title=' + title +id
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newList',
      name: 'newList',
      component: NewList
    },
    {
      path: '/newDetail',
      name: 'newDetail',
      component: newDetail
    },
    {
      path: '/photolist',
      name: 'photoList',
      component: photoList
    },
    {
      path: '/photolist/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/shopList',
      name: 'shopList',
      component: shopList
    },
    {
      path: '/shopDetail',
      name: 'shopDetail',
      component: shopDetail
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    },
    {
      path: '/myCourse',
      name: 'myCourse',
      component: myCourse
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
