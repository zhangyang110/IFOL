<template>
    <div class="footContainer">
        <ul class="head">
            <li class="myposition">
                <span class="iconfont icon-weizhi1 "></span>
            </li>
            <li style="margin-left:8px">
                <span class="iconfont icon-dianhua"></span>
                <span>&nbsp;13483960611</span>
            </li>
        </ul>
        <div class="foot-bottom">
            <span>©2020 誉蚨隆（中国）贸易有限公司 保留所有权利</span>
            <span><span class="police"></span>沪公网安备 31010602001727号 </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "foot"
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

    .head {
        display: flex;

        & > li > span {
            color: #e5dfd9;
            cursor: pointer;
        }

        & > li > span:hover {
            /*color:#e5dfd9*/
            color: white;
        }
    }

    .myposition {
        color: white;
        animation: moveInfinit 2s ease infinite;
    }

    .foot-bottom {
        margin-top: auto;
        display: flex;
        color: hsla(30, 19%, 87%, .5);
        /*&:hover{*/
        /*    color:white;*/
        /*}*/
    }

    .police {
        width: 100px;
        height: 100px;
        display: inline-block;
        color: white;
        background-image: url("~@/assets/xuebitu.png");
        background-position: 659px 159px;
        background-repeat: no-repeat;
    }

    @keyframes moveInfinit {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-30%);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>