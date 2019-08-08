<template>
   <div class="ainm">
        <button @click="show = !show">Toggle</button>
        <!-- <transition name="fade"> -->
        <!-- <transition  name="hello">
            <p class="box" v-if="show">hello</p>
        </transition> -->
        <transition 
          name="custom-classes-transition"
          enter-active-class="animated rollIn"
          leave-active-class="animated zoomOut"
         >
            <p class="box" v-if="show">hello</p>
        </transition>

        <input type="text" v-focus >
        <p v-myStyle>自定义名称指令</p>
   </div>
</template>
<script>
export default {
   name: 'anim',
   data() {
       return {
           show:true
       }
   },
//    局部指令集合
    directives:{
      focus:{
          inserted:function(el){
              el.focus()
          }
      },
      myStyle:{
          inserted:function(el){
              el.style.fontSize = "40px"
          }
      }
    },
  components: {}
}
</script>

<style scoped lang="css">
 /* .fade-enter-active, .fade-leave-active{
     transition: opacity .5s;
 }
 .fade-enter, .fade-leave-to{
     opacity: 0;
 } */

/* .hello-enter, .hello-leave-to{
    opacity: 0;
    width: 0;
    height: 0;
}
.hello-enter-to, .hello-leave{
    opacity: 1;
    width: 100px;
    height: 6.100px;
}
.hello-enter-active, .hello-leave-active{
    transition: all 1s;
} */

.hello-enter-active{
    animation: bounce-in .5s;
}
 .hello-leave-active{
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
    0%{
        transform: scale(0)
    }
    50%{
        transform: scale(1.5)
    }
    100%{
        transform: scale(1)
    }
}

@keyframes bounce-out {
    0%{
        transform: scale(1)
    }
    50%{
        transform: scale(1.5)
    }
    100%{
        transform: scale(0)
    }
}

.box{
    width: 6.25rem;
    height: 6.25rem;
    background: red
}

</style>
