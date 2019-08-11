import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LearnVue from "@/components/LearnVue"
import Base from "@/components/base"
import Http from "@/components/Http"
import NotFound from "@/components/NotFound"

Vue.use(VueRouter)
// 创建路由
export default new VueRouter({
    linkActiveClass:"active",
    routes:[
        {
            // 地址找不到的适配
          path:"*",
          component:NotFound
        },
        {
         path:"/",
        //  重定向
         redirect:"/learn"
        },
      {
        path:"/hello",
        name:"HelloWorld",
        component:HelloWorld
      },

    //   {
    //     path:"/learn/:id",
    //     name:"LearnVUe",
    //     component:LearnVue
    //   },
      {
        path:"/learn",
        name:"LearnVue",
        component:LearnVue,
        // 路由嵌套
        children:[
            {
                path:"base",
                component:Base
            },
            {
                path:"http",
                component:Http
            }
        ]
      },
    ]
  })