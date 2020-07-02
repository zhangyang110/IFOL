<template>
    <div class="footContainer">
        <div style="display: flex;justify-content: space-around">
            <ul v-for="(d,i) in footList" :key="i" class="allUls">
                <li v-for="(item,index) in d"
                    :key="index">
                    <span>{{item}}</span>
                </li>
            </ul>
            <ul class="allUls focusus">
                <li>
                    <span>关注我们</span>
                </li>
                <li class="wechat">
                    <i class="iconfont icon-wechat"></i>
                    <span>微信</span>
                </li>
                <li class="weibo">
                    <i class="iconfont icon-weibo"></i>
                    <span>微博</span>
                </li>
                <li class="douyin">
                    <i class="iconfont icon-douyin1"></i>
                    <span>抖音</span>
                </li>
                <li class="redbook">
                    <i class="iconfont icon-xiaohongshu"></i>
                    <span>小红书</span>
                </li>
                <li class="tencentvideo">
                    <i class="iconfont icon-tengxunshipin"></i>
                    <span>腾讯视频</span>
                </li>
                <li class="phone">
                    <i class="iconfont icon-dianhua"></i>
                    <span>17692708968</span>
                </li>
                <li class="myposition" @click="goMap">
                    <span class="iconfont icon-weizhi1 "></span>
                    <span>位置地图</span>
                </li>
            </ul>

        </div>
        <div class="foot-bottom">
            <div>©2020 誉蚨隆（中国）贸易有限公司 保留所有权利</div>
            <div style="display: flex;align-items: center;margin-left: 40px">
                <span class="police"></span>
                <span>冀公网安备&nbsp;&nbsp; xxxxxxxxxxxx号 </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "foot",
        data() {
            return {
                footList: [
                    ['购物帮助', '支付相关', '配送', '退货', '发票', '保养与维修'],
                    ['关于公司', '关于IFOL', '道德规范', '细则及条款', '企业信息'],
                ]
            }
        },
        methods: {
            goMap(){
                this.$router.push({name:'positionMap'})
            }
        }
    }
</script>

<style scoped lang="less">
    .footContainer {
        width: 100%;
        min-height: 300px;
        background: #1b1b1b;
        padding: 48px 15px 15px;
        display: flex;
        flex-direction: column;
    }

    .myposition {
        color: white;
        animation: moveInfinit 2s ease infinite;
        cursor: pointer;
    }

    .foot-bottom {
        margin-top: auto;
        display: flex;
        color: hsla(30, 19%, 87%, .5);
        align-items: center;
        justify-content: center;
    }

    .police {
        width: 29px;
        height: 25px;
        display: inline-block;
        color: white;
        background-image: url("~@/assets/xuebitu.png");
        background-position: -809px -130px;
        background-repeat: no-repeat;
    }

    .allUls {
        & > li {
            color: #e5dfd9;
            font-size: 12px;
            line-height: 1.2;
            margin-bottom: 10px;
        }

        & > li:hover {
            color: white;
        }

        & > :first-child {
            color: #e5dfd9;
            margin-bottom: 30px;
            font-size: 16px;
        }
    }

    .focusus {
        li {
            display: flex;
            align-items: center;
        }

        i {
            margin-right: 5px;
            font-size: 16px;
        }
    }

    .wechat:hover > i {
        color: #1aad19;
    }

    .weibo:hover > i {
        color: red;
    }

    .douyin:hover > i {
        color: darkgrey;
    }

    .redbook:hover > i {
        color: red;
    }

    .tencentvideo:hover > i {
        color: rgb(17, 165, 233);
    }

    .phone:hover > i {
        color: #fbcf00;
    }

    @keyframes moveInfinit {
        0% {
            transform: translateY(30%);
        }
        50% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(30%);
        }
    }
</style>