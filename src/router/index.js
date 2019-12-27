import Vue from 'vue'
import VueRouter from 'vue-router'
/*
  路由统一使用懒加载
*/
//首页
const Home = ()=> import('../views/Home/')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
