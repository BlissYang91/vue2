<template>
   <div class="filter">
        {{money | rmb}}   
        {{text | author}}   
   </div>
</template>

<script>
export default {
   name: 'filterDemo',
   data() {
       return {
           money:20,
           text:"秦时明月"
       }
   },
   filters:{
    rmb:function(value){
        if(!value) return;
        value = value.toString();
        return "$"+value;
    },
    author:function(value){
        if(!value) return;
        return value + "--来自星星的你"
    }
   },
  components: {}
}
</script>

<style scoped >
</style>
