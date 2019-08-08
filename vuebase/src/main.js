// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 全局自定义指令元素插入时获取焦点
// Vue.directive("focus",{
//   bind:function(el){
//     console.log('只执行一次');
//   },
//   // 当前指令的生命周期
//   inserted:function(el){
//     el.focus();
//   },
//   updata:function(el,binding){
//     console.log('更新')
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{foo:"全局常量"},
  components: { App },
  template: '<App/>'
})
