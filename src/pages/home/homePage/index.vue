<template>
    <div>
        <el-button type="success" plain @click="go">其他layout</el-button>
        <el-button type="primary"  @click="getData">getData By mockJs </el-button>
        <ul>
            <li v-for="(item,index) in list " :key="index">{{item.user_name}}</li>
        </ul>
    </div>
</template>
<script>
    import {getAllCard} from "@/service/api";
    export default {
        name: "homePage",
        data(){
            return {
                list:[]
            }
        },
        methods: {
            go() {
                this.$router.push({name: 'echartsPage'})
            },
            getData(){
                getAllCard().then((res)=>{
                    console.log(res);
                    this.list =res.card_list
                })
            }
        }
    }
</script>
<style scoped lang="less">

</style>