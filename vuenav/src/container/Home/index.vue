<template>
   <div class="home">
     <ul>
      <router-link tag="li" to="/home/recommend">推荐</router-link>
      <router-link tag="li" to="/home/hot">热门</router-link>
    </ul>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Nav />
   </div>
</template>

<script>
import Nav from "../../components/Nav"
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Nav
  }
}
</script>

<style scoped lang="scss">
ul{
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

ul li{
  display: inline-block;
  font-size: 20px;
  margin: 0 20px;
}

.active{
  color: red;
}
</style>
