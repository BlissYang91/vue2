<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <Parent/>
    <SlotDemo>
      <div class="">
        父级一般插槽消息

      </div> -->
      <!-- <template slot="v1">
        <div class="v1">
          {{vinfo}}
        </div>
      </template>
      <template slot="v2">
        <div class="v2">
          v2具名插槽
        </div>
      </template> -->
      <!-- <template slot-scope="slotPros">
        <h3>{{slotPros.ct}}</h3>
      </!-->
    <!-- </SlotDemo> --> 
    <FilterDemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Parent from './components/parent'
// import Dom from './components/dom'
// import SlotDemo from './components/slotDemo'
import Anim from './components/anim'
import FilterDemo from './components/filterDemo'

export default {
  name: 'App',
  data() {
    return {
      vinfo:"v1 动态插槽数据"
    }
  },
  components: {
    // HelloWorld,
    // Parent,
    // Dom
    // SlotDemo
    // Anim
    FilterDemo
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
