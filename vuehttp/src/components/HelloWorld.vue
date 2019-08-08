<template>
    <div class="hello">
    
    </div>
</template>

<script>
import qs from "qs"; // 解决参数格式的转码问题  ?name=iwen&age=20  {name:iwen,age:20}
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
      // get请求
        // this.$axios.get("https://wanandroid.com/wxarticle/chapters/json",{
        //   params:{
        //     k:java
        //   }
        // })
        // .then(res => {
        //     console.log('axios的get请求结果：', res);
        // })
        // .catch(error =>{
        //   console.log(error)
        // })
//    post请求方式一
        // this.$axios.post("https://www.wanandroid.com/user/login", qs.stringify({
        //         username: "111",
        //         password: "kdfjkdf"
        //     }))
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log('error')
        //     })

        // 发送 POST 请求 方式二
        // this.$axios({
        //     method: 'post',
        //     url: '/user/12345',
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     }
        // });

        // 测试跨域问题
        var url = this.HOST + "/wxarticle/chapters/json"
        // var url = "https://www.wanandroid.com/project/tree/json"
        this.$axios({
            method: 'get',
            url: url,
        }).then(res =>{
          console.log('跨域请求网络：', res.data.data)
        }).catch(error => {
          console.log(error);
        });


    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
