<template>
    <div>
        <el-button type="success" plain @click="go">其他layout</el-button>
        <el-button type="primary"  @click="getData">getData By mockJs and default axios </el-button>
        <el-button type="primary"  @click="getDataByPerfectApiclient">getDataByPerfectApiclient </el-button>
        <el-button type="primary"  >  <!--@click="uploadFormdata"--> uploadFormdata </el-button>
        <ul>
            <li v-for="(item,index) in list " :key="index">{{item.user_name}}</li>
        </ul>
    </div>
</template>
<script>
    import {getAllCard} from "@/service/api";
    import {_getAllCard} from "@/service/perfectApi";
    import axios from "axios"
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
            },
            getDataByPerfectApiclient(){
                _getAllCard().then((res)=>{
                    console.log(res);
                    this.list =res.card_list
                })
            },
            uploadFormdata(){
                const config={
                    timeout:60000,
                    responseType:'json',
                    headers:{
                        'Content-Type':'application/-x-www-form-urlencoded',
                        'X-Requested-With':'XMLHttpRequest'
                    },
                    withCredentials:true,
                };
                const request=axios.create(config);
                let formdata=new FormData();
                let file='从form表单获取的file文件'
                formdata.append('file',file);
                formdata.append('other','other')
                request.post('url',formdata).then((res)=>{
                    console.log(res);
                })
            }
        }
    }
</script>
<style scoped lang="less">

</style>