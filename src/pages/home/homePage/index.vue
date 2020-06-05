<template>
    <el-button type="info" plain @click="go">页面跳转</el-button>
</template>
<script>
    export default {
        name: "homePage",
        methods: {
            go() {
                this.$router.push({name: 'echartsPage'})
            }
        }
    }
</script>
<style scoped lang="less">

</style>