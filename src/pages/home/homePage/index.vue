<template>
    <div class="scrollContainer">
        <div class="header">
            <div class="title">
                <span class="haveDot">IFOL</span>
                <span>誉蚨隆家纺</span>
            </div>
            <em class="title_eng">home·textiles</em>
        </div>
        <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                <a href="javascript:;" class="banner_a">
                    <img :src="item.src" alt="" class="banner_img">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>

    export default {
        name: "homePage",
        data() {
            return {
                bannerList: [
                    {
                        src:require("@/assets/banner1.jpg")
                    },
                    {
                        src:require("@/assets/banner2.jpg")
                    },
                    {
                        src:require("@/assets/banner3.jpg")
                    },
                    {
                        src:require("@/assets/banner5.jpg")
                    },
                    {
                        src:require("@/assets/banner6.jpg")
                    }
                ]
            }
        },
        methods: {}
    }
</script>
<style scoped lang="less">
    .scrollContainer {
        height: 100%;
        width: 100%;
        overflow: scroll;
        background: url("~@/assets/bg5.jpg") white no-repeat;
    }

    .header {
        height: 80px;
        width: 100%;
        padding: 20px 0;
        font: 40px Arial, "宋体", Helvetica, sans-serif, Verdana;
        text-align: center;
        display: flex;
        flex-direction: column;
        user-select: none;
        background-color: white;
    }

    .title {
        font: inherit;
        line-height: 1em;

        .haveDot {
            padding-right: 20px;
            position: relative;
            font-family: 幼圆;
        }

        .haveDot::after {
            content: "";
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: black;
        }


    }

    .title_eng {
        font: 28px Microsoft zhenghei, "宋体", Helvetica, sans-serif, Verdana;
        font-weight: normal;
        font-style: normal;
        line-height: 1em;
    }


    .banner_a{
        width:100%;
        height: 100%;
    }
    .banner_img{
        width:100%;
        height: 100%;
    }


    .scrollContainer /deep/ {
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>