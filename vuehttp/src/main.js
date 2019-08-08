// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入axios
import Axios from "axios"
Vue.prototype.$axios =Axios
import qs from "qs"
// 将本地host指向别的服务器域名，用于请求别的服务器数据
Vue.prototype.HOST = '/api'

// Axios.defaults.baseURL = 'https://www.wanandroid.com';
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  if(config.method === "post"){
    return qs.stringify(config.data)
  }
  console.log(config)
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
