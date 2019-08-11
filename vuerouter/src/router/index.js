import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(VueRouter)
// 创建路由
export default new VueRouter({
    routes:[
      {
        path:"/",
        name:"HelloWorld",
        component:HelloWorld
      }
    ]
  })