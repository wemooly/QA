<template>
    <div>
        <div class="layout">
             <el-button type="primary" plain @click="addGridItem">添加节点</el-button>
             <el-button type="primary" @click="saveLayout">保存布局</el-button>
            <grid-layout
                :layout.sync="testLayout"
                :col-num="12"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :vertical-compact="true"
                :is-mirrored="false"
                :margin="[10, 10]"
                :use-css-transforms="false"
                class="hoverStyle">
                <grid-item v-for="(item,index) in testLayout" :key="item.i"
                        :x="item.x"
                        :y="item.y"
                        :w="item.w"
                        :h="item.h"
                        :i="item.i"
                        @resize="handlerResize"
                        style="border: 1px solid #fff">
                    <div class="container">
                        <el-dropdown @command="handleCommand($event,index)" trigger="click">
                        <span class="el-dropdown-link">
                            操作面板<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="b">查看</el-dropdown-item>
                            <el-dropdown-item command="c">编辑</el-dropdown-item>
                            <el-dropdown-item command="d">分享</el-dropdown-item>
                            <el-dropdown-item command ="a">删除</el-dropdown-item>
                            <!-- <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
                        </el-dropdown-menu>
                        </el-dropdown>
                    </div>    
                    <!-- {{item.i}} -->
                    <component :is="item.compentent" :newHeight ="newHeight"  :newWidth ="newWidth" :chartIndex="index+1"></component>
                </grid-item>
            </grid-layout> 
        </div>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="60%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>

</template>

<script>
import VueGridLayout from "vue-grid-layout"
import MyChart from './chart'
import MyText from './text'
import MyTable from './table'
import MyIframe from './iframe'

var initLayout = [
    {"x":0,"y":0,"w":6,"h":5,"i":"0",compentent:MyChart},
    {"x":2,"y":0,"w":6,"h":4,"i":"1",compentent:MyIframe},
    {"x":4,"y":0,"w":6,"h":5,"i":"2",compentent:MyTable},
    {"x":6,"y":0,"w":6,"h":3,"i":"3",compentent:MyChart},
]

export default {
    data() {
        return {
            testLayout :[
                // {"x":0,"y":0,"w":6,"h":10,"i":"0"},
                // {"x":2,"y":0,"w":6,"h":4,"i":"1"},
                // {"x":4,"y":0,"w":6,"h":5,"i":"2"},
                // {"x":6,"y":0,"w":6,"h":3,"i":"3"},
            ],
            num:'',
            dialogVisible:false,
            newHeight: 0,
            newWidth: 0,
            chartIndex:'',
        };
    },
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem : VueGridLayout.GridItem,
    },
    computed: {

    },
    watch: {

    },
    methods: {
        addGridItem(){
            this.num++;
            this.dialogVisible = true;
            // const item = {"x":0,"y":0,"w":6,"h":5,"i":this.num}
            // this.testLayout.push(item);
        },
        handleCommand(command,index){
            switch(command){
                case 'a' : this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                            this.testLayout.splice(index,1)
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });          
                    });
                break;
            }
            
        },
        saveLayout(){
            this.$message({
                type: 'success',
                message: '保存布局成功!'
            });
            initLayout = this.testLayout;
        },
        // resize事件处理
        handlerResize(i, newH, newW, newHPx, newWPx){
            console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
            console.log(newHPx);
            this.chartIndex = i,
            this.newWidth = newWPx;
            this.newHeight = newHPx;
        }
    },
    created() {
        
    },
    mounted() {
        //模拟异步服务端获取保存之后的位置数据 
        setTimeout(()=>{
            this.testLayout = initLayout;
            this.num = this.testLayout.length-1;
            // this.$nextTick(()=>{

            //     var mainContent = document.getElementById('mainContent');
            //     mainContent.src = "https://www.baidu.com"
            //     console.log(mainContent,"mainContentmainContent");
            // })
        },2000)
    },
};
</script>

<style scoped lang="less">
.layout {
        background: #999;
        min-height: calc(100vh - 76px);
}
.hoverStyle {
    border: 1px solid #999;
    // &:hover {
    //     border: 1px solid blue;
    // }
}
.container{
    text-align: center;
    background-color: #ccc;
    line-height: 30px;
}

</style>
