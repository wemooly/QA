<template>
    <div id="container">
       
    </div>
</template>

<script>
import Vue from "vue"
import jsoneditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
// import 'jsoneditor/dist/jsoneditor.min.js'
Vue.prototype.$jsoneditor = jsoneditor

export default {
    props: {

    },
    data() {
        return {
            jsonData:{
                total: 25,
                limit: 10,
                skip: 0,
                links: {
                    previous: undefined,
                    next: function () {},
                }
            }
        }
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    methods: {
        initEdit(){
            let container = document.getElementById('container')
            let options = {
                // mode: 'text',
                // indentation: 2,
                search: false
            }
            let editor = new this.$jsoneditor(container, options)
            console.log(editor);
            
            editor.set(this.jsonData)
        }
    },
    created() {
        
    },
    mounted() {
        this.initEdit();
    },
};
</script>

<style scoped lang="less">
    /deep/.el-dialog{
        max-height: 80vh;
    }
</style>
