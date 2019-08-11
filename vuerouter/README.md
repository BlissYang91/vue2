1.路由
  注意：项目在初始化的时候不要集成vue-router

2.安装：
  cnpm install vue-router --save

3.如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)

4.创建路由
  const router = new VueRouter({
    routes:[
      {
        path:"/",
        name:"HelloWorld",
        component:HelloWorld
      }
    ]
  })

5.给出路由显示的位置
  <router-view />

6.将路由对象注入Vue实例中
  router

7.路由跳转
  router-link
  属性：tag

8.动态路由（参数传递）
  /:id

9.路由嵌套

10.编程式的导航
  router.push
  router.replace
  router.go

11.命名路由（参数传递）
