<template>
    <div id="main">
        
    </div>
</template>

<script>
import echarts from "echarts"
import 'echarts/map/js/china' // 引入中国地图数据
// import "./../utils/util"
import mapData from "./../components/data/mapData"
export default {
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
            // 北京(包头)
            var BJData = [
                [{name:'华北'}, {name:'华东',value:20}],
                [{name:'华北'}, {name:'华南',value:30}],
                [{name:'华北'}, {name:'东北',value:40}],
            ];
            // 上海
            var SHData = [
                [{name:'华东'},{name:'华南',value:20}],
                [{name:'华东'},{name:'东北',value:30}],
                [{name:'华东'},{name:'华北',value:40}],

            ];
            // 广州
            var GZData = [
                [{name:'华南'},{name:'东北',value:20}],
                [{name:'华南'},{name:'西南',value:30}],
                [{name:'华南'},{name:'华北',value:40}],

            ];
            //成都
            var CDData = [
                [{name:'西南'},{name:'东北',value:20}],
                [{name:'西南'},{name:'华南',value:30}],
                [{name:'西南'},{name:'华北',value:40}],
                [{name:'西南'},{name:'西北',value:40}],
            ]
            //青海 
            var QHData = [
                [{name:'西北'},{name:'东北',value:20}],
                [{name:'西北'},{name:'华南',value:30}],
                [{name:'西北'},{name:'华北',value:40}],
            ]
            //长春
            var CCData = [
                [{name:'东北'},{name:'东北',value:20}],
                [{name:'东北'},{name:'华南',value:30}],
                [{name:'东北'},{name:'华北',value:40}],
            ]


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
                        });
                    }
                }
                return res;
            };

            // var color = ['#a6c84c', '#ffa022', '#46bee9','#fff', 'red', 'skyblue'];
            var color = ['#ffffff', '#ffc188', '#479fd2', '#fba853', '#48c7c0', '#fa8737', '#4bbdd6', '#ff6f5b']
            var series = [];
            var cityData = [['华北', BJData], ['华东', SHData], ['华南', GZData],['西南',CDData],['西北', QHData],['东北', CCData]]
           
           cityData.forEach(function (item, i) {
                //console.log(item,i);
                series.push({
                    name: item[0] + ' Top10',
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
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15,
                        color: color[i],
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    label: {
                        show: true,
                        position: 'middle',
                        formatter: function(item){
                            console.log(item,"item");
                            if(item.data.fromName != item.data.toName){
                                return item.dataIndex
                            }else{
                                return ''
                            }
                        },
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        show: true,
                        fontWeight:"bold",
                        distance: 10,
                        position: 'bottom',
                        formatter: function(item){
                            if (item.data.fromName == item.data.name) {
                                return `${item.data.name}\naaaa`
                            } else {
                                return `${item.data.name}`
                            }
                        },
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            fromName:dataItem[0].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    }),
                });
            });
            // console.log(series)

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
                 // value  1:华北:北京   2 :西南:重庆    3:华南: 河南    4:东北 :内蒙：  5:华东:华东    6 西北:新疆   
                data: [{
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
                            },]
                }

            let option = {
                baseOption:{
                    backgroundColor: '#404a59',
                    title : {
                        text: '模拟迁徙',
                        subtext: '数据纯属虚构',
                        left: 'center',
                        textStyle : {
                            color: '#fff'
                        }
                    },
                    tooltip : {
                        show:false,
                        trigger: 'item',
                        formatter:function(params, ticket, callback){
                            // console.log(params);
                            if(params.seriesType=="effectScatter") {
                                return "线路："+params.data.name+""+params.data.value[2]+"1";
                            }else if(params.seriesType=="lines"){
                                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                            }else{
                                return params.name;
                            }
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        top: 'bottom',
                        left: 'right',
                        data:['华北 Top10', '华东 Top10', '华南 Top10','东北 Top10','西南 Top10','西北 Top10'],
                        textStyle: {
                            color: '#fff'
                        },
                        selectedMode: 'multiple',
                    },
                    tooltip: {
                        trigger: 'axis', // hover触发器
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.1)' //hover颜色
                            }
                        }
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
                    visualMap: {
                        min: 0,
                        max: 7,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        show:false,
                        inRange: {
                            color: ['#ffffff', '#ffc188', '#479fd2', '#fba853', '#48c7c0', '#fa8737', '#4bbdd6', '#ff6f5b']
                            //第一位无效  value  1:华北:北京   2 :西南:重庆    3:华南: 河南    4:东北 :内蒙：  5:华东:华东    6 西北:新疆 
                        }
                    },
                    
                },
                timeline:{
                    axisType: 'category',
                    data: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999'],  	
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
                            position:20,
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
                options: [{
                    series: [sessionMap].concat(series)
                }],  
            };

            console.log(option,"options");
            

            let myChart = echarts.init(document.getElementById("main"));
            myChart.setOption(option)

            myChart.on('mouseover', function(params) {
                var city = params.name;
                if (city == '河南' ||city == '湖北'||city == '湖南' || city == '广东' || city == '广西' || city == '海南'|| city == '香港'|| city == '澳门') {
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "河南"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "湖北"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "湖南"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "广东"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "广西"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "香港"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "海南"
                    });
                     myChart.dispatchAction({
                        type: 'highlight',
                        name: "澳门"
                    });
                }

                if (city == '上海' ||city == '江苏' || city == '浙江' || city == '安徽'|| city == '福建' || city == '江西' || city == '山东' || city == '台湾') {
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "上海"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "江苏"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "浙江"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "安徽"
                    });
                     myChart.dispatchAction({
                        type: 'highlight',
                        name: "福建"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "江西"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "山东"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "台湾"
                    });
                }
                if (city == '重庆' || city == '四川' || city == '贵州' || city == '云南'|| city == '西藏') {

                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "重庆"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "四川"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "贵州"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "云南"
                    });
                     myChart.dispatchAction({
                        type: 'highlight',
                        name: "西藏"
                    });

                }
                if (city == '北京' || city == '天津' || city == '河北'|| city == '内蒙古'|| city == '山西') {
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "北京"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "天津"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "河北"
                    });
                     myChart.dispatchAction({
                        type: 'highlight',
                        name: "内蒙古"
                    });
                     myChart.dispatchAction({
                        type: 'highlight',
                        name: "山西"
                    });
                }
                if ( city == '陕西' || city == '甘肃' || city == '青海' || city == '宁夏' || city == '新疆' ) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "陕西"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "甘肃"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "青海"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "宁夏"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "新疆"
                    });

                }
                if (city == '辽宁' || city == '吉林' || city == '黑龙江') {

                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "辽宁"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "吉林"
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        name: "黑龙江"
                    });
                }

            });

            myChart.on('mouseout', function(params) {
                var city = params.name;
                if (city == '河南' ||city == '湖北'||city == '湖南' || city == '广东' || city == '广西' || city == '海南'|| city == '香港'|| city == '澳门') {
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "河南"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "湖北"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "湖南"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "广东"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "广西"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "香港"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "海南"
                    });
                     myChart.dispatchAction({
                        type: 'downplay',
                        name: "澳门"
                    });
                }

                if (city == '上海' ||city == '江苏' || city == '浙江' || city == '安徽'|| city == '福建' || city == '江西' || city == '山东' || city == '台湾') {
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "上海"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "江苏"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "浙江"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "安徽"
                    });
                     myChart.dispatchAction({
                        type: 'downplay',
                        name: "福建"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "江西"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "山东"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "台湾"
                    });
                }
                if (city == '重庆' || city == '四川' || city == '贵州' || city == '云南'|| city == '西藏') {

                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "重庆"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "四川"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "贵州"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "云南"
                    });
                     myChart.dispatchAction({
                        type: 'downplay',
                        name: "西藏"
                    });

                }
                if (city == '北京' || city == '天津' || city == '河北'|| city == '内蒙古'|| city == '山西') {

                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "北京"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "天津"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "河北"
                    });
                     myChart.dispatchAction({
                        type: 'downplay',
                        name: "内蒙古"
                    });
                     myChart.dispatchAction({
                        type: 'downplay',
                        name: "山西"
                    });
                }
                if ( city == '陕西' || city == '甘肃' || city == '青海' || city == '宁夏' || city == '新疆' ) {
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "陕西"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "甘肃"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "青海"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "宁夏"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "新疆"
                    });

                }
                if (city == '辽宁' || city == '吉林' || city == '黑龙江') {

                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "辽宁"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "吉林"
                    });
                    myChart.dispatchAction({
                        type: 'downplay',
                        name: "黑龙江"
                    });
                }
            }); 
        }
    },
    mounted(){
        this.inite();
    }
}
</script>

<style  scoped>
    #main{
        width: 1000px;
        height: 800px;
    }
</style>