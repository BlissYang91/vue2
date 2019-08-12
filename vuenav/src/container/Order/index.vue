<template>
   <div>
订单

<mu-container  >
     <mu-button class="screen-dialog" slot="center" @click="screenDialog">全屏弹窗</mu-button>

  <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
    
     <div >
         <img style="width:100% "  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
    </div>
  </mu-dialog>
</mu-container>
 
    <Nav />
   </div>
</template>

<script>
import Nav from "../../components/Nav"
export default {
   name: '',
   data() {
       return {
          openFullscreen:false,
          dialog:false
       }
   },
   methods: {
      screenDialog(){
         this.openFullscreen = true
         console.log('tag', '全屏弹窗')
      }
   },
  components: {
     Nav
  }
}
</script>

<style scoped lang="scss">
</style>
