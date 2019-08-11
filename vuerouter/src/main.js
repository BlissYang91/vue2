// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import HelloWorld from './components/HelloWorld'
// 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
// import VueRouter from 'vue-router'
import router from './router'
// Vue.use(VueRouter)

Vue.config.productionTip = false

// const router = new VueRouter({
//   routes:[
//     {
//       path:"/",
//       name:"HelloWorld",
//       component:HelloWorld
//     }
//   ]
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
