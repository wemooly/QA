<template>
    <div class="chart-wrap">
        <div :id="'main'+chartIndex" class="main"></div>
    </div>
</template>

<script>
import echarts from "echarts"
export default {
    props: {
        chartIndex:Number
    },
    data() {
        return {
           myChart:'',
        };
    },
    methods: {
        init(){
            this.myChart = echarts.init(document.getElementById(`main${this.chartIndex}`));

                // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(option);  
        },
        chartResize(){
            this.myChart.resize();
        }
    },
    created() {

    },
    mounted() {
        this.init();
    },
};
</script>

<style scoped lang="less">
    .main{
        width: 600px;
        height: 300px;
        // overflow: auto;
    }
    .chart-wrap{
        width: 100%;
        height: calc(100% - 31px) ;
        overflow: auto;
    }
</style>
