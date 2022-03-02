<template>
  <div class="scrollContainer">
    <div class="header">
      <div class="title">
        <span class="haveDot">IFOL</span>
        <span>誉蚨隆家纺</span>
      </div>
      <em class="title_eng">home·textiles</em>
    </div>
    <div class="carouselContainer">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <a href="javascript:;" class="banner_a" @click="goDetail">
            <img :src="item.src" alt="" class="banner_img" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="descContainer" style="user-select: none">
      <span style="font-family: 幼圆; font-size: 24px; color: rgb(89, 59, 35)"
        ><strong style="font-weight: bold">匠心精神</strong></span
      >
      <span
        style="
          font-size: 20px;
          color: rgb(190, 167, 139);
          text-transform: uppercase;
        "
        >INGENUITY</span
      >
      <span class="line"></span>
      <div class="ingenuity clearfix">
        <div class="ingenuity_left">
          <span
            style="
              color: rgb(51, 51, 51);
              font-family: '微软雅黑';
              font-size: 20px;
            "
            >二十年打磨，一颗品牌的匠人心</span
          >
          <div class="ingenuity_main clearfix">
            <div class="Cable">
              <span class="rectangle" style="top: 13px"></span>
              <span class="rectangle" style="top: 100px"></span>
              <span class="rectangle" style="top: 258px"></span>
            </div>
            <div class="history">
              <span>
                即使在效率至上的大工业生产时代，总还有些坚持，不能“以快取胜”
                2006年至今，一条被子从原料到成品，誉蚨隆家纺用了十五年
              </span>
              <span>
                5000多个夜以继日，一针复一线，一绒又一格
                誉蚨隆人带着心无旁骛的执念，和将制被当作一生信仰的坚决
                磨砺技艺，穷尽修炼，坚持赋予每一条被子生而不凡的品质感
                哪怕对一些细节的苛求，在外人看来是钻牛角尖、是死磕到底
                而于誉蚨隆人而言，如何让睡眠更舒适更精致，才是一贯的坚持
              </span>
              <span>
                为山者基于篑土，以成千丈之峭；凿井者起于寸坎，以就万仞之深
                十五年从小作坊到大品牌，时间的利刃在匠心面前也变得顿挫
                誉蚨隆家纺，制被十五年怕是还不够，十五年只是开了个头
              </span>
            </div>
          </div>
        </div>
        <div class="ingenuity_right">
          <div class="masker">
            <img src="~@/assets/jijianshenghuo.png" alt="" />
            <span style="margin-top: 20px">简色生活，我们追求的目标</span>
            <span>家纺行业的新贵一族。回归自然与纯粹</span>
            <span>享受高品质生活，深受年轻人士的喜爱</span>
            <span>摒弃琐碎的极简主义，呈现现代雅痞风貌</span>
          </div>
        </div>
      </div>
    </div>
    <Products />
    <el-backtop target=".scrollContainer">
      <i class="el-icon-arrow-up"></i>
    </el-backtop>
    <Foot />
  </div>
</template>
<script>
import Products from "./products";
import Foot from "./foot";
import { getHomeCarousel } from "@/service/ifolApi.js";
import axios from "axios";

export default {
  name: "homePage",
  mounted() {
    this.getImgList();
  },
  components: {
    Products,
    Foot,
  },
  data() {
    return {
      bannerList: [
        {
          src: require("@/assets/banner1.jpg"),
        },
        {
          src: require("@/assets/banner2.jpg"),
        },
        {
          src: require("@/assets/banner3.jpg"),
        },
        {
          src: require("@/assets/banner4.jpg"),
        },
        {
          src: require("@/assets/banner5.jpg"),
        },
      ],
    };
  },
  methods: {
    goDetail() {
      this.$router.push({ path: "/productDetail" });
    },
    getImgList() {
      getHomeCarousel({
          a:1,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/common/style/minxs";

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
  font: 40px "幼圆", Arial, "宋体", Helvetica, sans-serif, Verdana;
  text-align: center;
  display: flex;
  flex-direction: column;
  user-select: none;
  background-color: white;
}

.title {
  font: inherit;
  line-height: 1em;
  font-weight: 1000;

  .haveDot {
    padding-right: 20px;
    position: relative;
    font: inherit;
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

.banner_a {
  width: 100%;
  height: 100%;
}

.banner_img {
  width: 100%;
  height: 100%;
}

.carouselContainer {
  width: 100%;
  background-color: white;
}

.descContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 40px 0;

  & > span {
    line-height: 140%;
  }
}

.line {
  width: 100px;
  height: 2px;
  background-color: #bea78b;
  border-radius: 1px;
  position: relative;
  margin: 5px;
}

.line::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  left: 50%;
  top: 50%;
  background-color: #bea78b;
  transform: translate(-50%, -50%) rotate(45deg);
}

.ingenuity {
  width: 100%;
  padding: 20px 30px 0 30px;
  box-sizing: border-box;
}

.ingenuity_left,
.ingenuity_right {
  width: 50%;
  float: left;
  height: 400px;
}

.ingenuity_right {
  background: url("~@/assets/associated_brand_bg1.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}

.ingenuity_right:hover > .masker {
  left: 0;
  opacity: 1;
}

.masker {
  width: 100%;
  height: 100%;
  background-color: rgb(190, 167, 139);
  left: -100%;
  opacity: 0;
  /*opacity: 1;*/
  /*left: 0;*/
  position: absolute;
  transition: left 1s, opacity 1s;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 190px;
    height: 70px;
  }

  span {
    color: white;
    font: 18px "幼圆", "宋体", Helvetica, sans-serif, Verdana;
    line-height: 2.6em;
  }
}

.ingenuity_main {
  height: calc(~"100% - 26px - 20px");
  padding: 20px 30px 0 0;
  overflow: hidden;
}

.Cable {
  float: left;
  height: 100%;
  width: 1px;
  position: relative;
  border-right: 1px dashed #cab9a3;
  margin-left: 10px;

  .rectangle {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: #cab9a3;
    transform: rotate(45deg) translateX(-50%);
    left: 0;
  }
}

.history {
  float: left;
  display: flex;
  flex-direction: column;
  width: calc(100% - 82px);
  padding: 0 35px;

  & > span {
    line-height: 2.4em;
    color: #616161;
  }

  & > span:not(:last-child) {
    padding-bottom: 20px;
  }
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

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>