<template>
    <el-button type="info" plain @click="go">其他layout</el-button>
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