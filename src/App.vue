<template>
    <div id="app">
        app
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'App',
    }
</script>
<style lang="less">
    @import ~"@/common/style/global.less";
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: @primary-color;
        min-width:1366px;
        height: 100%;
    }
</style>
