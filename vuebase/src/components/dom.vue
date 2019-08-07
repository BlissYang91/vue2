<template>
   <div class="">
       操作原生dom
       <p class="p1" ref="p1"> 原生p元素</p>
       <input ref="myinput" type="text">
       <button @click="getValue">get</button>
   </div>
</template>
// 
<script>
export default {
   name: 'dom',
   data() {
       return {}
   },
   mounted(){
       this.$refs.p1.innerHTML = "改变原生p1的值"
       this.$refs.myinput.value = "hh"
   },
   methods: {
       getValue(){
           console.log(this.$refs.myinput.value);
       }
   },
  components: {}
}
</script>

<style scoped >
</style>
