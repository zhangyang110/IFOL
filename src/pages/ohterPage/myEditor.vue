<template>
    <div class="myEditor">
        <p>
            <el-button type="success" icon="el-icon-check" circle @click="RunResult"></el-button>
            <span class="theme" style="float:right">
                <el-select v-model="theme" size="mini" @change="themeChange" placeholder="请选择主题">
                    <el-option
                            v-for="item in themeOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </span>
        </p>
        <div id="editor" ref="container" style="height:600px"></div>
    </div>
</template>
<script>
    import * as monaco from 'monaco-editor';
    // import * as monaco from 'monaco-editor/esm/vs/editor/editor.all.js';
    // import 'monaco-editor/esm/vs/editor/editor.main.js';
    // import 'monaco-editor/dev/vs/editor/editor.main.nls.js';
    // require('monaco-editor/esm/vs/editor/editor.main.js')

    export default {
        props: {
            codes: {
                type: String,
                default: function () {
                    return '<div>请编辑html内容</div>'
                }
            },
            language: {
                type: String,
                default: function () {
                    return 'json'
                }
            },
            editorOptions: {
                type: Object,
                default: function () {
                    return {
                        selectOnLineNumbers: true,
                        roundedSelection: false,
                        readOnly: false,        // 只读
                        cursorStyle: 'line',        //光标样式
                        automaticLayout: false, //自动布局
                        glyphMargin: true,  //字形边缘
                        useTabStops: false,
                        fontSize: 28,       //字体大小
                        autoIndent: true,//自动布局
                        //quickSuggestionsDelay: 500,   //代码提示延时
                    }
                }
            }
        },
        data() {
            return {
                themeOption: [
                    {
                        value: 'vs',
                        label: '默认'
                    },
                    {
                        value: 'hc-black',
                        label: '高亮'
                    },
                    {
                        value: 'vs-dark',
                        label: '深色'
                    },
                ],
                theme: 'hc-black',
                codesCopy: null,//内容备份
            }
        },
        mounted() {
            this.initEditor()
            // let  MODES = (function () {
            //     let modesIds = monaco.languages.getLanguages().map(function (lang) {
            //         return lang.id;
            //     });
            //     modesIds.sort();
            //     return modesIds.map(function (modeId) {
            //         return {
            //             modeId: modeId,
            //         };
            //     });
            // })();
            // console.log(MODES);
            this.setModel()
            monaco.editor.setTheme("'vs-dark' ");
        },
        methods: {
            RunResult() {
                // console.log(this.monacoEditor.getValue());
            },
            themeChange() {
                // this.initEditor();
            },
           initEditor(){
               this.editor = monaco.editor.create(document.getElementById('editor'), {
                   ...this.editorOptions,
                   codes:this.codes,
                   model: null,
               });
           },
            setModel(){
                let oldModel = this.editor.getModel();
                let newModel = monaco.editor.createModel(this.codes, "json");
                this.editor.setModel(newModel);
                if (oldModel) {
                    oldModel.dispose();
                }
            }
        }
    }
</script>
<style scoped>
    #container {
        height: 100%;
        text-align: left;
    }
</style>