<template>
   <div class="">
 组件A：{{ msg }}
    <button @click="change" type="button" name="button">change</button>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           msg:"默认"
       }
   },
   methods:{
    change(){
      this.msg = '改变'
    }
  },
  components: {}
}
</script>

<style scoped >
</style>
