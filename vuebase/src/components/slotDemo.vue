<template>
   <div class="slotdemo">
       <!-- 由调用slotDemo者给当前插槽传递视图 -->
        <!-- <slot name="v1"></slot>
        <slot name="v2"></slot> -->
        <slot :ct = "ct"></slot>
   </div>
</template>

<script>
export default {
   name: 'slotDemo',
   data() {
       return {
           ct:'子组件数据'
       }
   },
  components: {}
}
</script>

<style scoped >
</style>
