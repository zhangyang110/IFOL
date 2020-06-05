<template>
    <div class="basiclayout">
        <header class="header">
            <img :src="require('@/assets/logo.jpg')" alt="">
            <span>阿里图标库 demo <span style="font-size:30px">☞☞</span></span>
            <span class="iconfont iconshandian iconOtherstyle"></span>
            <span style="margin-left: 30px">basicLayout</span>
        </header>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: "basicLayout"
    }
</script>
<style scoped lang="less">
    .basiclayout {
        height: 100%;
        width: 100%;
    }

    .header {
        width: 100%;
        height: 50px;
        vertical-align: middle;

        img {
            vertical-align: middle;
            width: 80px;
            height: 100%;
        }

        .iconOtherstyle {
            font-size: 25px;
            color: #f5326a;
            vertical-align: middle;
        }
    }

    .main {
        height: calc(~"100% - 50px");
        width: 100%;
    }


</style>