import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/container/Home"
import Mine from "@/container/Mine"
import Order from "@/container/order"
import ShopCar from "@/container/ShopCar"
import NotFound from "@/container/NotFound"
import Hot from "@/container/Home/SubPage/Hot"
import Recommend from "@/container/Home/SubPage/Recommend"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:"*",
      component:NotFound
    },
    {
      path:"/",
      redirect:"/home",
    },
    {
      path: '/home',
      name: 'Home',
      redirect:"/home/recommend",
      component: Home,
      children:[
        {
          path:"hot",
          component:Hot
        },
        {
          path:"recommend",
          component:Recommend
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    }
  ]
})
