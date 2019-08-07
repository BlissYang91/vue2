<template>
   <div class="">
       {{getFoo}}
       子组件
       <p>通过pros收到父组件消息：{{title}} - {{age}}</p>
       <button @click="sendMoney">发消息给父组件</button>
        <p>称号:{{nick}}</p>
        <p>必选参数:{{parent}}</p>
        <ul>
            <li v-for="(girl,index) in girlFriends" :key="index">{{girl}}</li>
        </ul>
   </div>
</template>

<script>
export default {
   name: 'child',
   data() {
       return {}
   },
//    props:["title","age"],
// 对象方式传递数据指定数据，类型
    props:{
       title:String,
       age:Number,
       nick:{
           type:String,
           default:"默认昵称"
       },
       parent:{
           type:String,
           require:true
       },
       // 默认值如果是数组或者对象，必须返回一个function
       girlFriends:{
           type:Array,
           default:function(){
               return ["g1","g2"]
           }
       }
    },
   methods: {
       sendMoney(){
           this.$emit("getSub","来自子组件消息 ")
       }

   },
   computed:{
       getFoo(){
        //    获取main.js中全局常量
           return this.$root.foo
       }
   },
  components: {}

}
</script>

<style scoped >
</style>
