<template>
    <div class="markdown">
        <mavon-editor v-model="value" ></mavon-editor>
    </div>
</template>

<script>

import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import axios from "axios"

export default {
    data() {
        return {
          value:""  
        }
    },
    methods: {
        readFile(filePath) {
            return new Promise((resolve,reject)=>{
                axios.get(filePath).then(res=>{
                   resolve(res)
                }).catch((err)=>{
                    reject(err)
                }) 
            })
           
        },
    },
    components:{
        mavonEditor
    },
    created(){
        this.readFile('/static/data.txt').then(res=>{
            console.log(res);
            this.value = res.data
        })
    }
}
</script>

<style lang="less" scoped>
@import "./../assets/css/markdown.less";


</style>