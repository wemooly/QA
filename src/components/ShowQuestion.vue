<template>
    <div class="showQuestions">
        <h1>问题总览</h1>
        <input type="text" v-model="search" placeholder="搜索问题">
        <div class="single-question">
            <router-link to="/singleQusetion">
                <h3>问题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称</h3>
            </router-link>
            <div class="createInfo">
               <div class="left fl">
                   提问人: <span>小明</span>
                   提问时间: <span>2019:20:20</span>
               </div>
               <div class="right fr">
                   处理状态: <span>已处理</span>
                   处理人: <span>小红</span>
                   处理时间 : <span>2019-04-29 20:20:20</span>
               </div>
            </div>
            <article>
               题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名称题名
            </article>
            <div class="fr detail">点击标题查看问题详情</div>
        </div>
    </div>
   
</template>

<script>
export default {
    name:"showQuesetion",
    data(){
        return{
            search:"",
            questions:[],
        }
    },
}
</script>

<style scoped lang="less">
    .showQuestions{
        max-width:1000px;
        margin:0 auto;
        padding: 20px;
        background-color: #6677cc;
        h1{
            margin-bottom:20px;
            font-size: 20px;
        }
        .single-question{
            padding: 20px;
            margin: 20px 0;
            box-sizing: border-box;
            background: #eee;
            border: 1px dotted #aaa;         
            h3{
                margin-bottom: 10px;
                line-height: 30px;
                font-size: 16px;
            }
            .createInfo{
                overflow: hidden;
                margin:15px 0;
                span{
                    margin: 0 10px;
                    font-size: 14px;
                    color: red;
                }
            }
            article{
                line-height: 25px;
            }
            .detail{
                color: red;
            }
        }
        input[type="text"]{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
        }

    }

</style>
