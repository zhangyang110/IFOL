<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane :lazy="true">
                <span slot="label"><i class="el-icon-document"></i> HTML</span>
                <MyEditor
                        :language="'json'"
                        :codes="htmlCodes"
                        @onMounted="htmlOnMounted"
                        @onCodeChange="htmlOnCodeChange" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import MyEditor from './myEditor'
    export default {
        components:{
            MyEditor
        },
        data () {
            return {
                htmlCodes:'[{"name":"name"},{"name":"name"},{"name":"name"},{"name":"name"}]',
                javascriptCodes:'console.log("This is javascript")',
                jsonCodes:'console.log("This is javascript")',
                cssCodes:'body{}',
                htmlEditor:null,
                jsEditor:null,
                cssEditor:null,
                jsonEditor:[{"name":"name"},{"name":"name"},{"name":"name"},{"name":"name"}],
            }
        },
        methods:{
            htmlOnMounted(edit){
                this.htmlEditor = edit;
            },
            javascriptOnMounted(edit){
                this.jsEditor = edit;
            },
            cssOnMounted(edit){
                this.cssEditor = edit;
            },
            htmlOnCodeChange(){},
            // javascriptOnCodeChange(value,event){},
            // cssOnCodeChange(value,event){},
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>