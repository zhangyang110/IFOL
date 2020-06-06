<template>
    <div class="menuLayout">
        <div class="menu">
            <el-menu
                    :default-active="defaultActive"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    :router="true"
                    active-text-color="#ffd04b">
                <!--                <el-submenu index="1">-->
                <!--                    <template slot="title">-->
                <!--                        <i class="el-icon-location"></i>-->
                <!--                        <span>导航一</span>-->
                <!--                    </template>-->
                <!--                    <el-menu-item-group>-->
                <!--                        <template slot="title">分组一</template>-->
                <!--                        <el-menu-item index="1-1">选项1</el-menu-item>-->
                <!--                        <el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--                    </el-menu-item-group>-->
                <!--                    <el-menu-item-group title="分组2">-->
                <!--                        <el-menu-item index="1-3">选项3</el-menu-item>-->
                <!--                    </el-menu-item-group>-->
                <!--                    <el-submenu index="1-4">-->
                <!--                        <template slot="title">选项4</template>-->
                <!--                        <el-menu-item index="1-4-1">选项1</el-menu-item>-->
                <!--                    </el-submenu>-->
                <!--                </el-submenu>-->
<!--                <el-menu-item index="2">-->
<!--                    <i class="el-icon-menu"></i>-->
<!--                    <span slot="title">导航二</span>-->
<!--                </el-menu-item>-->
                <!--                <el-menu-item index="3" disabled>-->
                <!--                    <i class="el-icon-document"></i>-->
                <!--                    <span slot="title">导航三</span>-->
                <!--                </el-menu-item>-->

<!--                <el-menu-item index="4">-->
<!--                    <i class="el-icon-setting"></i>-->
<!--                    <span slot="title">导航四</span>-->
<!--                </el-menu-item>-->
                <el-menu-item v-for="(item,index) in menus"
                              :index="`${index}`"
                              :key="index"
                              :route="item.path">
                    <i :class="item.desc.iconClassname"></i>
                    <span slot="title">{{item.desc.title}}</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main">
            <div class="content" ref="content">
                <router-view ></router-view>
            </div>
<!--            <div>{{logstate}}</div>-->
        </div>
    </div>
</template>
<script>
    import routes from "@/pages/otherPages/route.js"
    import minx from "./minx"

    export default {
        name: "menuLayout",
        mixins:[minx],
        data(){
            return {
            }
        },
        computed: {

            menus() {
                return routes
            },
            defaultActive(){
                let index= routes.findIndex(v=>v.name==this.$route.name)
                return `${index}`
            },

        }
    }
</script>

<style scoped lang="less">
    .menuLayout {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .menu {
        flex-basis: 20%;

        /deep/ .el-menu {
            height: 100%;
        }
    }

    .main {
        flex: auto;
        padding:20px;
        background: #F4F5F7;
        .content{
            width: 100%;
            height: 100%;
            background: white;
            position: relative;
        }
    }
</style>