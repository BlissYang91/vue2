<template>
    <div class="">
    
        <!-- 动态路由 this.$route.params.id 用来接收path中定义的 :id参数 -->
    
        <!-- 学习路由使用 {{this.$route.params.id}} -->
    
        学习路由使用
    
        <ul>
    
            <router-link to="/learn/base">基础</router-link>
    
            <router-link to="/learn/http">网络</router-link>
    
        </ul>
    
        <router-view/>
    
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    components: {}
}
</script>

<style scoped>

</style>
