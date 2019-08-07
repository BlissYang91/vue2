<template>
   <div class="container">
       新的组件:{{ title }}
       <input v-model="searchText"  />
       <button @click="sendMsg" type="button" name="button">向上传递数据</button>
   </div>
</template>

<script>
export default {
   name: 'learn',
   data() {
       return {
          searchText:"" 
       }
   },
//  props用于向下传递数据 ，用于接收父组件中指定变量的值
   props:["title"],
   methods:{
       sendMsg(){
        this.$emit("getMsg",this.searchText)
       }
   },

  components: {}
}
</script>

<style scoped>
 .container{
     background: red;
 }
</style>
