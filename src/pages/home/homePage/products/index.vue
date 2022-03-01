<template>
    <div class="productsContainer">
        <div class="title">
            <span style="font-family: 幼圆; font-size: 24px;color:white"><strong
                    style="font-weight: bold">产品鉴赏</strong></span>
            <span style="font-size: 20px; color: rgb(190, 167, 139); text-transform: uppercase;">NEW PRODUCT APPRECIATION</span>
            <span class="line"></span>
            <ul class="prouductslist clearfix">
                <li v-for="(item,index) in productsList" :key="index" class="productItem" >
                    <img :src="item.src" alt="">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "products",
        data() {
            return {
                productsList: [
                    {
                        src: require("@/assets/list1.jpg"),
                        name: "塔琳娜抗菌鹅绒春秋被/冬被",
                    },

                    {
                        src: require("@/assets/list2.jpg"),
                        name: "白鹭晨曦四件套",
                    },
                    {
                        src: require("@/assets/list3.jpg"),
                        name: "静沐暖阳四件套",
                    },
                    {
                        src: require("@/assets/list4.jpg"),
                        name: "情定法兰西四/六/十件套",
                    },
                    {
                        src: require("@/assets/list5.jpg"),
                        name: "爱尔柏塔四件套",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/common/style/minxs";

    .productsContainer {
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        user-select: none;
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .line {
        width: 100px;
        height: 2px;
        background-color: white;
        /*background-color: #bea78b;*/
        border-radius: 1px;
        position: relative;
        margin: 5px;
    }

    .line::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        left: 50%;
        top: 50%;
        background-color: white;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .prouductslist {
        margin: 40px 0;
        width: 100%;

        & > .productItem:not(:last-child) {
            margin-right: 25px;
        }
    }

    .productItem {
        width: calc(~"( 100% - 100px ) / 5");
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > span {
            color: white;
            transition: color .5s linear;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            line-height: 140%;
        }
        &>img {
            width: 100%;
            margin-bottom: 15px;
            border-radius: 50%;
            transition: transform .5s linear;
        }

    }
    .productItem:hover{
        & > span{
            color: #cda976;
        }
        & > img{
            transform:scale(1.1) translateY(-10px);
        }
    }
</style>