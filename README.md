react -> fetch

中文参考站点：https://www.kancloud.cn/yunye/axios/234845
vue官网维护了一个网络请求：vue-resource,后期不维护了，推荐使用axios
vue -> axios：
  Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
  安装：
    npm install axios --save
  引入：
    import Axios from "axios"
    Vue.prototype.$axios = Axios
  使用：
    mounted(){
      this.$axios.get("http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php")
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
    }

跨域处理：
  配置：
    proxyTable: {
      '/doubai_api':{
          target: 'http://api.douban.com',
          pathRewrite: {
                 '^/doubai': ''
          },
          changeOrigin: true
       }
    }

  main.js：
    Vue.prototype.HOST = "/doubai_api"

  访问：
    var url = this.HOST + "/v2/movie/top250";
    this.$axios({
      method: 'get',
      url: url
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })
