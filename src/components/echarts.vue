<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
                <div id="main"></div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                <div id="main2"></div>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import echarts from "echarts"
import 'echarts/map/js/china' // 引入中国地图数据
// import 'echarts/map/js/world' // 引入世界地图数据
import "./../utils/util"
import mapData from "./data/mapData"
import {mapMouseOver,mapMouseOut,cancelHigh} from "./data/mapEvent"
export default {
    data() {
        return {
            activeName: 'second'
        }
    },
    methods: {
        inite(){

            var geoCoordMap = {
                '华东': [121.4648,31.2891],
                '东莞': [113.8953,22.901],
                '东营': [118.7073,37.5513],
                '中山': [113.4229,22.478],
                '临汾': [111.4783,36.1615],
                '临沂': [118.3118,35.2936],
                '丹东': [124.541,40.4242],
                '丽水': [119.5642,28.1854],
                '乌鲁木齐': [87.9236,43.5883],
                '佛山': [112.8955,23.1097],
                '保定': [115.0488,39.0948],
                '兰州': [103.5901,36.3043],
                '华北': [110.3467,41.4899],
                '北京': [116.4551,40.2539],
                '北海': [109.314,21.6211],
                '南京': [118.8062,31.9208],
                '南宁': [108.479,23.1152],
                '南昌': [116.0046,28.6633],
                '南通': [121.1023,32.1625],
                '厦门': [118.1689,24.6478],
                '台州': [121.1353,28.6688],
                '合肥': [117.29,32.0581],
                '呼和浩特': [111.4124,40.4901],
                '咸阳': [108.4131,34.8706],
                '哈尔滨': [127.9688,45.368],
                '唐山': [118.4766,39.6826],
                '嘉兴': [120.9155,30.6354],
                '大同': [113.7854,39.8035],
                '大连': [122.2229,39.4409],
                '天津': [117.4219,39.4189],
                '太原': [112.3352,37.9413],
                '威海': [121.9482,37.1393],
                '宁波': [121.5967,29.6466],
                '宝鸡': [107.1826,34.3433],
                '宿迁': [118.5535,33.7775],
                '常州': [119.4543,31.5582],
                '华南': [113.5107,23.2196],
                '廊坊': [116.521,39.0509],
                '延安': [109.1052,36.4252],
                '张家口': [115.1477,40.8527],
                '徐州': [117.5208,34.3268],
                '德州': [116.6858,37.2107],
                '惠州': [114.6204,23.1647],
                '西南': [103.9526,30.7617],
                '扬州': [119.4653,32.8162],
                '承德': [117.5757,41.4075],
                '拉萨': [91.1865,30.1465],
                '无锡': [120.3442,31.5527],
                '日照': [119.2786,35.5023],
                '昆明': [102.9199,25.4663],
                '杭州': [119.5313,29.8773],
                '枣庄': [117.323,34.8926],
                '柳州': [109.3799,24.9774],
                '株洲': [113.5327,27.0319],
                '武汉': [114.3896,30.6628],
                '汕头': [117.1692,23.3405],
                '江门': [112.6318,22.1484],
                '沈阳': [123.1238,42.1216],
                '沧州': [116.8286,38.2104],
                '河源': [114.917,23.9722],
                '泉州': [118.3228,25.1147],
                '泰安': [117.0264,36.0516],
                '泰州': [120.0586,32.5525],
                '济南': [117.1582,36.8701],
                '济宁': [116.8286,35.3375],
                '海口': [110.3893,19.8516],
                '淄博': [118.0371,36.6064],
                '淮安': [118.927,33.4039],
                '深圳': [114.5435,22.5439],
                '清远': [112.9175,24.3292],
                '温州': [120.498,27.8119],
                '渭南': [109.7864,35.0299],
                '湖州': [119.8608,30.7782],
                '湘潭': [112.5439,27.7075],
                '滨州': [117.8174,37.4963],
                '潍坊': [119.0918,36.524],
                '烟台': [120.7397,37.5128],
                '玉溪': [101.9312,23.8898],
                '珠海': [113.7305,22.1155],
                '盐城': [120.2234,33.5577],
                '盘锦': [121.9482,41.0449],
                '石家庄': [114.4995,38.1006],
                '福州': [119.4543,25.9222],
                '秦皇岛': [119.2126,40.0232],
                '绍兴': [120.564,29.7565],
                '聊城': [115.9167,36.4032],
                '肇庆': [112.1265,23.5822],
                '舟山': [122.2559,30.2234],
                '苏州': [120.6519,31.3989],
                '莱芜': [117.6526,36.2714],
                '菏泽': [115.6201,35.2057],
                '营口': [122.4316,40.4297],
                '葫芦岛': [120.1575,40.578],
                '衡水': [115.8838,37.7161],
                '衢州': [118.6853,28.8666],
                '西宁': [101.4038,36.8207],
                '西安': [109.1162,34.2004],
                '贵阳': [106.6992,26.7682],
                '连云港': [119.1248,34.552],
                '邢台': [114.8071,37.2821],
                '邯郸': [114.4775,36.535],
                '郑州': [113.4668,34.6234],
                '鄂尔多斯': [108.9734,39.2487],
                '重庆': [107.7539,30.1904],
                '金华': [120.0037,29.1028],
                '铜川': [109.0393,35.1947],
                '银川': [106.3586,38.1775],
                '镇江': [119.4763,31.9702],
                '东北': [125.8154,44.2584],
                '长沙': [113.0823,28.2568],
                '长治': [112.8625,36.4746],
                '阳泉': [113.4778,38.0951],
                '青岛': [120.4651,36.3373],
                '韶关': [113.7964,24.7028],
                '西北': [101.80 ,36.62]
            };
            // 定义航道数组
            var BJData = [],SHData = [],GZData = [],QHData = [],CDData = [],CCData = [];
            var i = 0, m= 0,n=0,j=0,k=0,p=0;

            // 格式化后台返回的数据  得到航道
            mapData.repData.legendData.forEach((formitem,index)=>{
                var fromCoord  = formitem.split('-')[0];
                var toCoord = formitem.split('-')[1];
                console.log(toCoord);
                
                if (fromCoord=="华北") {
                    i++;
                    BJData.push(
                        [{name:fromCoord},{name:toCoord,value:10}]
                    )
                }else if(fromCoord=="华东"){
                    m++
                    SHData.push(
                        [{name:fromCoord},{name:toCoord,value:10}]
                    )
                }else if(fromCoord=="华南"){
                    n++
                    GZData.push(
                        [{name:fromCoord},{name:toCoord,value:10}]
                    )
                }else if(fromCoord=="西北"){
                    j++
                    QHData.push(
                        [{name:fromCoord},{name:toCoord,value:10}]
                    )
                }
                else if(fromCoord=="西南"){
                    k++
                    CDData.push(
                        [{name:fromCoord},{name:toCoord,value:10}]
                    )
                }
                else if(fromCoord=="东北"){
                    p++
                    CCData.push(
                        [{name:fromCoord},{name:toCoord,value:10}]
                    )
                }
            })
     
            console.log(CDData);


            var result = [];
            var timeLine = mapData.repData.xAxisData;
            var toolValue = mapData.repData.seriesData;
            
            // 往数组中塞每一天的 显示在航道上的数据
            for (let i = 0; i < timeLine.length; i++) {
                var newBJData = JSON.parse(JSON.stringify(BJData))
                var newSHData = JSON.parse(JSON.stringify(SHData))
                var newGZData = JSON.parse(JSON.stringify(GZData))
                var newQHData = JSON.parse(JSON.stringify(QHData))
                var newCDData = JSON.parse(JSON.stringify(CDData))
                var newCCData = JSON.parse(JSON.stringify(CCData))
                result[i] = {};
                toolValue.forEach((formitem,index)=>{
                    var fromCoord  = formitem.name.split('-')[0];
                    var toCoord = formitem.name.split('-')[1]
                    if (fromCoord=="华北") {
                        newBJData.forEach((val,k)=>{
                            if (toCoord == val[1].name) {
                                val[2] = {toolValue :formitem.data[i]}
                            }
                        })
                    }else if(fromCoord=="华东"){
                        newSHData.forEach((val,k)=>{
                            if (toCoord == val[1].name) {
                                val[2] = {toolValue :formitem.data[i]}
                            }
                        })
                        
                    }else if(fromCoord=="华南"){
                        newGZData.forEach((val,k)=>{
                            if (toCoord == val[1].name) {
                                val[2] = {toolValue :formitem.data[i]}
                            }
                        })
                        
                    }else if(fromCoord=="西北"){
                        newQHData.forEach((val,k)=>{
                            if (toCoord == val[1].name) {
                                val[2] = {toolValue :formitem.data[i]}
                            }
                        })
                        
                    }else if(fromCoord=="西南"){
                        newCDData.forEach((val,k)=>{
                            if (toCoord == val[1].name.trim()) {
                                val[2] = {toolValue :formitem.data[i]}
                            }
                        })
                        
                    }else if(fromCoord=="东北"){
                        newCCData.forEach((val,k)=>{
                            if (toCoord == val[1].name ) {
                                val[2] = {toolValue :formitem.data[i]}
                            }
                        })
                        
                    }
                })
                result[i].BJData = newBJData;
                result[i].SHData = newSHData;
                result[i].GZData = newGZData;
                result[i].QHData = newQHData;
                result[i].CDData = newCDData;
                result[i].CCData = newCCData;
            } 
            
            console.log(result);


            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

            var convertData = function (data) {
                // console.log(data,"data");
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord],
                            value: dataItem[1].value,
                            toolValue: dataItem[2].toolValue
                        });
                    }
                }
                return res;
            };

            // var color = ['#a6c84c', '#ffa022', '#46bee9','#fff', 'red', 'skyblue'];
           
            var color = ['#ffffff', '#ffc188', '#479fd2', '#fba853', '#ff6f5b', '#fa8737', '#4bbdd6', '#ff6f5b']

            // 地图颜色分块配置
            let sessionMap = {
                type: 'map',
                mapType: 'china',
                geoIndex: 0,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                 // value  1:华北:北京   2 :西南:重庆    3:华南: 河南    4:东北 :内蒙：  5:华东:上海    6 西北:新疆   
                data: [
                        {
                        name: '北京',
                        value: 1,
                        }, {
                            name: '天津',
                            value: 1,
                        }, {
                            name: '河北',
                            value: 1,
                        }, {
                            name: '山西',
                            value: 1,
                        },{
                            name: '重庆',
                            value: 2,
                        }, {
                            name: '云南',
                            value: 2,
                        }, {
                            name: '贵州',
                            value: 2,
                        }, {
                            name: '四川',
                            value: 2,
                        }, {
                            name: '西藏',
                            value: 2,
                        }, {
                            name: '河南',
                            value: 3,
                        }, {
                            name: '湖北',
                            value: 3,
                        }, {
                            name: '湖南',
                            value: 3,
                        }, {
                            name: '广西',
                            value: 3,
                        }, {
                            name: '广东',
                            value: 3,
                        }, {
                            name: '香港',
                            value: 3,
                        }, {
                            name: '澳门',
                            value: 3,
                        }, {
                            name: '南海诸岛',
                            value: 3,
                        },{
                            name: '海南',
                            value: 3,
                        },{
                            name: '辽宁',
                            value: 4,
                        }, {
                            name: '黑龙江',
                            value: 4,
                        }, {
                            name: '内蒙古',
                            value: 1,
                        }, {
                            name: '吉林',
                            value: 4,
                        },{
                            name: '华东',
                            value: 5,
                        },{
                            name: '江苏',
                            value: 5,
                        },{
                            name: '浙江',
                            value: 5,
                        },{
                            name: '安徽',
                            value: 5,
                        },{
                            name: '福建',
                            value: 5,
                        },{
                            name: '江西',
                            value: 5,
                        },{
                            name: '山东',
                            value: 5,
                        },{
                            name: '台湾',
                            value: 5,
                        },{
                            name: '陕西',
                            value: 6,
                        },{
                            name: '甘肃',
                            value: 6,
                        },{
                            name: '青海',
                            value: 6,
                        },{
                            name: '宁夏',
                            value: 6,
                        },{
                            name: '新疆',
                            value: 6,
                        },
                       ]
            }

            let option = {
                baseOption:{
                    // backgroundColor: '#404a59',
                    title : {
                        text: '模拟迁徙',
                        subtext: '数据纯属虚构',
                        left: 'center',
                        textStyle : {
                            color: '#fff'
                        }
                    },
                    tooltip : {
                        show:true,
                        trigger: 'item',
                        formatter:function(params, ticket, callback){
                            if(params.seriesType=="effectScatter") {
                                console.log(params,"paramsparams");
                                
                                if (params.data.fromName) {
                                    return "线路："+params.data.fromName+"-->"+params.data.name+":" + params.data.toolValue;
                                }else{
                                    return ''
                                }
                            }else if(params.seriesType=="lines"){
                                return params.data.fromName+"-->"+params.data.toName+":"+params.data.toolValue;
                            }else{
                                return params.name;
                            }
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        top: 'bottom',
                        left: 'right',
                        data:['华北', '华东', '华南','东北','西南','西北'],
                        // data:['华北', '华东', '华南','东北'],
                        textStyle: {
                            color: '#fff'
                        },
                        selectedMode: 'multiple',
                    },
                    geo: {
                        map: 'china',
                        label: {
                            normal: {
                                show: false,
                                color: 'red'
                            },
                            emphasis: {
                                show: false,
                                color:'#fff'
                            }
                        },
                        roam: false,
                        zoom:1,
                        layoutCenter: ["50%", "50%"], //地图位置
                        layoutSize: "100%",
                        itemStyle: {
                            normal: {
                                areaColor: '#323c48',
                                borderColor: '#404a59',
                            },
                            emphasis: {
                                areaColor: '#3574c8'
                            }
                        }
                    },
                    visualMap: [{
                            show: false,
                        min: 0,
                                        max: 7,
                            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
                        },{
                        min: 0,
                        max: 7,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        show:false,
                        
                        inRange: {
                            // color: ['#ffffff', '#ffc188', '#479fd2', '#fba853', '#48c7c0', '#fa8737', '#4bbdd6', '#ff6f5b']
                            color: ['#ffffff', '#479fd2', '#39AB37', '#FCDB00', '#48c7c0', '#7FC123', '#4bbdd6', '#ff6f5b']
                            //第一位无效  value  1:华北:北京   2 :西南:重庆    3:华南: 河南    4:东北 :内蒙：  5:华东:华东    6 西北:新疆 
                        }
                    }],
                    // series: [sessionMap].concat(series)
                },
                timeline:{
                    axisType: 'category',
                    data: timeLine,  	
                    playInterval: 1000,
                    loop: false,
                    bottom: "2.5%",
                    symbolSize: 10,
                    autoPlay: false,
                    left:10,
                    right:100,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            },
                            rotate:-45,
                            position:30,
                            interval:0,
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },
                },
                options: [],  
            };

            // 循环生成每一天都 series
            const isEquel = (value,arr)=>{
                let equelFlag = false;
                arr.forEach(city=>{
                    if(value==city[1].name){
                        equelFlag = true
                    }
                }) 
                return equelFlag
            }
            
            for (let i = 0; i < result.length; i++) {
                var series = [];
                var cityData = [['华北',result[i].BJData], ['华东', result[i].SHData], ['华南', result[i].GZData],['西南',result[i].CDData],['西北', result[i].QHData],['东北', result[i].CCData]]
                cityData.forEach(function (item, index) {
                    series.push(
                            {
                                name: item[0],
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                zlevel: 2,
                                symbolSize:10,
                                label: {
                                    normal: {
                                        show: true,
                                        fontWeight:"blod",
                                        position: 'right',
                                        distance:10,
                                        formatter: '{b}',
                                    }
                                },
                                data: [{
                                    name: item[0],
                                    value: geoCoordMap[item[0]].concat([20])
                                }]
                            }, 
                           {
                            name: item[0],
                            type: 'lines',
                            zlevel: 1,
                            effect: {
                                show: true,
                                period: 6,
                                trailLength: 0.7,
                                color: '#fff',
                                symbolSize: 3,
                            },
                            lineStyle: {
                                normal: {
                                    color: color[index],
                                    width: 0,
                                    curveness: 0.2
                                }
                            },
                            label: {
                                show: true,
                                position: 'start',
                                formatter: '',
                                textStyle: {
                                    color: 'red'
                                },
                            },
                            data: convertData(item[1])
                        },
                        {
                            name: item[0],
                            type: 'lines',
                            zlevel: 2,
                            symbol: ['none'],
                            symbolSize: 10,
                            effect: {
                                show: true,
                                period: 6,
                                trailLength: 0,
                                symbol: planePath,
                                symbolSize: 20,
                                color: color[index],
                            },
                            lineStyle: {
                                normal: {
                                    color: color[index],
                                    width: 2,
                                    opacity: 0.6,
                                    curveness: 0.2
                                }
                            },
                            label: {
                                show: true,
                                position: 'middle',
                                formatter: function(item){
                                    if(item.data.fromName != item.data.toName){
                                        return item.data.toolValue
                                    }else{
                                        return ''
                                    }
                                },
                                textStyle: {
                                    color: 'red'
                                },
                            },
                            data: convertData(item[1])
                        },
                        {
                            name: item[0],
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            symbolSize: function(val) {
                                let equelFlag = isEquel(item[0],item[1])
                                    if (equelFlag) {
                                        return val[2]+10;
                                    } else {
                                        return val[2];
                                    }
                                },
                            label: {
                                show: true,
                                fontWeight:"bold",
                                distance: 10,
                                position: 'bottom',
                                formatter: function(item){
                                    if (item.data.fromName == item.data.name) {
                                        return `\naaaa`
                                    } else {
                                        return ``
                                    }
                                },
                            },
                            data: item[1].map(function (dataItem) {
                                return {
                                    name: dataItem[1].name,
                                    fromName:dataItem[0].name,
                                    toolValue:dataItem[2].toolValue,
                                    value: geoCoordMap[dataItem[1].name] ? geoCoordMap[dataItem[1].name].concat([dataItem[1].value]):''
                                };
                            }),
                        }
                    );
                });
                option.options.push({series: [sessionMap].concat(series)})
            }
          
            console.log(option,"dsadsa")
            
            return option
            // 鼠标移上移出色块效果
            
        },
        handleClick(tab, event) {
            console.log("tab, event");
            setTimeout( () => {
                let myChart = echarts.init(document.getElementById("main"));
                myChart.setOption(this.inite())
                myChart.on('mouseover', mapMouseOver);
                myChart.on('mouseout', mapMouseOut); 
           
            },0)

        }
    },
    mounted(){
        console.log(navigator ,"navigator ");
        
         let myChart2 = echarts.init(document.getElementById("main2"));
         myChart2.setOption(this.inite())
         myChart2.on('touchstart', mapMouseOver);
         myChart2.on('touchend', mapMouseOut); 
    }
}
</script>

<style  scoped>
    .el-tab-pane{
        width: 100%;
        height: 800px;
    }
    #main{
        width: 100%;
        height: 100%;
        background-image: url("./../assets/infoImg/bg-info.jpg");
    }
    #main2{
        width: 100%;
        height: 100%;
        background-image: url("./../assets/infoImg/bg-info.jpg");
        background-size: contain;
    }
</style>