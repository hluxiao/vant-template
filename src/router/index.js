import Vue from 'vue'
import VueRouter from 'vue-router'
/*
  路由统一使用懒加载
*/
//首页
const Home = ()=> import('../views/Home');
//金融计算器
const Calculator = ()=> import('../views/Calculator');


Vue.use(VueRouter)

const routes = [
  {
    meta:{
      index:0,
      name:'用户注册'
    },
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    meta:{
      index:0,
      name:'金融计算器'
    },
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  }
]

const router = new VueRouter({
  routes
})

export default router
