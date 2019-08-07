<template>
   <div class="">
       <SlotDemo >
           <template slot-scope="slotPros">
               <div>
                   <h1>{{slotPros.ct}}</h1>
               </div>
           </template>
             
       </SlotDemo>
        <!-- 父组件收到来自子组件消息：{{subMsg}} -->
        <Child @getSub = "getSubMsg" title="来自父组件消息" :age = "age" nick = "父组件传入有默认值的可选参数" parent = "父组件传入必选参数"/>
   </div>
</template>

<script>
import Child from './child'
import SlotDemo from './slotDemo'
export default {
   name: 'parent',
   data() {
       return {
           subMsg:"" ,
           age:30
       }
   },
   methods: {
       getSubMsg(data){
         this.subMsg = data
       }
   },   
  components: {
      Child,
      SlotDemo
  }
}
</script>

<style scoped >
</style>
