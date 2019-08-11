<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <router-link tag="li" to="/hello">Hello</router-link>
      <!-- /vue对应：id的跳转参数 -->
      <!-- <router-link tag="li" to="/learn/vue">Learn</router-link>    -->
      <!-- <router-link tag="li" to="/learn">Learn</router-link>    -->
      <router-link to = "{name:'HelloWorld',params:{id:helloparams}}">Hello</router-link>
      <router-link to = "{name:'LearnVue'}">Learn</router-link>
      <button @click="gotoHello">编程式导航跳转</button>
    
     </ul>
    <router-view/>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      helloparams:"helloparams",
      clickparams:'hhhhhhhhhh'
    }
  },
  methods: {
    gotoHello(){
      // 路由传参
      this.$router.push({name:'HelloWorld',params:{id:this.clickparams}})
      // this.$router.push("/hello");
      // this.$router.push({path:"/hello"})//每次添加新的页面
      // this.$router.replace({path:"/hello"})//替换当前页面
      // this.$router.go(-4)回退4个页面
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .router-link-active{
  color: red;
} */
.active{
  color: red;
}
ul li{
  list-style: none;
  display: inline-block;
  margin: 0 0.533333rem;
  text-decoration: underline;
  cursor: pointer;
}
</style>
