<template>
    <div>
        <el-button type="info" plain @click="go">其他layout</el-button>
        <el-button type="info" plain @click="getData">getData</el-button>
    </div>
</template>
<script>
    // import {getAllCard} from "@/service/api.js"
    import Fns from "@/common/apiclient";
    export default {
        name: "homePage",
        methods: {
            go() {
                this.$router.push({name: 'echartsPage'})
            },
            getData(){
                // console.log(getAllCard());
                Fns.get("/api/site/his/getAllCard",{},(res)=>{
                    console.log(res);
                })
            }
        }
    }
</script>
<style scoped lang="less">

</style>