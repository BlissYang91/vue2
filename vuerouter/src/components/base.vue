<template>
   <div class="">
学习基础{{getCurrentUrl}}
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {}
   },
   computed: {
       getCurrentUrl(){
        //    获取当前页面路径
           return this.$route.path
       }
   },
  components: {}
}
</script>

<style scoped >
</style>
