<template>
  <div class="hello">
    {{"模板语法"}}
    {{20 + 1}}
    {{"ok"?'YES':'No'}}
    {{"hello".split('').reverse().join('')}}
    {{msg}}
    <p v-once>{{msg+" v-once仅执行一次"}}</p>
    <div v-html="hello"></div>
    <a v-bind:href="url">{{url_name}}</a>
    <div :class="divClass">容器</div>
    <div :class="div2Class+'-1'">容器1</div>
    <div v-if="flag">孙悟空，首次加载为false没有值</div>
    <div v-else>通臂猿猴</div>
    <div v-show="flag">v-show首次判断无论真假都有值</div>
    <!-- 数组遍历 -->
    <ul>
      <li v-for="(item,index) in names" :key="index">{{index}} - {{item.name}} - {{item.age}}</li>
    </ul>

    <!-- 对象遍历 -->
    <ul>
      <li v-for="(value,key,index) in obj" :key="index">{{value}} - {{key}} - {{index}}</li>
    </ul>
    <!-- 点击事件传参 -->
    <button @click="clickHandler('参数',$event)" type="button" name="button">按钮</button>
    <ul>
      <li v-for="(item,index) of helloArr" :key="index">{{item}}</li>
    </ul>
    <button @click="addHandler" type="button" name="button">添加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello:"<h3>Hello H3</h3>",
      url_name:"百度",
      url:"http://baidu.com",
      divClass:'isActive',
      div2Class:"list",
      flag:false,
      names:[
        {
          name:"iwen",
          age:20
        },
        {
          name:"ime",
          age:200
        },
        {
          name:"ice",
          age:2000
        }
      ],
      obj:{
        name:"iwen",
        age:20
      },
      helloArr:["hello1","hello2","hello3"]
    }
  },
  methods:{
    clickHandler(data,$event){
        console.log(data);
        console.log('事件：', event)
        this.flag = !this.flag;
    },
    addHandler(){
      console.log(this.helloArr.concat(["hello4","hello5"]));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
