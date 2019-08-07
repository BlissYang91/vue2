<template>
    <div id="app">
        <img src="./assets/logo.png"> {{demo}}
        <!-- 引用 -->
        <!-- <VueDemo/> -->
        {{demo}}
        <input v-model="parentText" type="text" />
        <Learn @getMsg="getSonMsg" :title="parentText"/>
        <button @click="changeComponent" type="button" name="button">切换组件</button>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive> 
    </div>
</template>

<script>
// 导入
import HelloWorld from './components/HelloWorld'
import VueDemo from './components/VueDemo'
import Learn from './components/Learn'
import A from "./components/A"
import B from "./components/B"

export default {
    name: 'App',
    data() {
        return {
            demo: "",
            parentText: "",
            title:{
              name:"iwen"
            },
            currentComponent:A,
            flag:false
        }

    },
    // 注入
    components: {
        HelloWorld,
        VueDemo,
        Learn,
        A,
        B
    },
    methods:{
      getSonMsg(data){
        this.demo = data
      },
      changeComponent(){
        if(this.flag){
          this.flag = false;
          this.currentComponent = A
        }else{
          this.flag = true;
          this.currentComponent = B
        }
      }
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
</style>
