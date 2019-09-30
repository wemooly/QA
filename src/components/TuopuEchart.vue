<template>
  <div>
    <div id="test"></div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    init() {
      // 节点数据
      var nodes = [
        {
          x: "1",
          y: "12",
          name: "DNS",
          img: "guest.png"
        },
        {
          x: "1",
          y: "3",
          name: "爬虫数据",
          img: "guest.png"
        },
        {
          x: "2",
          y: "12",
          name: "域名缓存",
          img: "server.png"
        },
        {
          x: "3",
          y: "8",
          name: "DPI用户面",
          img: "server.png"
        },
        {
          x: "3",
          y: "5",
          name: "场景特征",
          img: "server.png"
        },
        {
          x: "3",
          y: "1",
          name: "终端特征",
          img: "guest.png"
        },
        {
          x: "5",
          y: "10",
          name: "增强特征",
          img: "nginx.png"
        },
        {
          x: "7",
          y: "12",
          name: "HTTP",
          img: "database.png"
        },
        {
          x: "7",
          y: "8",
          name: "通用",
          img: "database.png"
        },
        {
          x: "9",
          y: "10",
          name: "用户中间表",
          img: "guest.png"
        },
        {
          x: "9",
          y: "6",
          name: "网元信息表",
          img: "guest.png"
        },
        {
          x: "11",
          y: "8",
          name: "质差网元",
          img: "guest.png"
        }
      ];

      var links = [
        {
          source: "DNS",
          target: "域名缓存",
          name: "访问"
        },
        {
          source: "爬虫数据",
          target: "场景特征",
          name: "访问"
        },
        {
          source: "爬虫数据",
          target: "终端特征",
          name: "访问"
        },
        {
          source: "域名缓存",
          target: "增强特征",
          name: "访问"
        },
        {
          source: "DPI用户面",
          target: "增强特征",
          name: "访问"
        },
        {
          source: "场景特征",
          target: "增强特征",
          name: "访问"
        },
        {
          source: "终端特征",
          target: "增强特征",
          name: "访问"
        },
        {
          source: "增强特征",
          target: "HTTP",
          name: "访问"
        },
        {
          source: "增强特征",
          target: "通用",
          name: "访问"
        },
        {
          source: "HTTP",
          target: "用户中间表",
          name: "访问"
        },
        {
          source: "通用",
          target: "用户中间表",
          name: "访问"
        },
        {
          source: "用户中间表",
          target: "质差网元",
          name: "访问"
        },
        {
          source: "网元信息表",
          target: "质差网元",
          name: "访问"
        },
        {
          source: "终端特征",
          target: "网元信息表",
          name: "访问"
        },
        {
          source: "终端特征",
          target: "HTTP",
          name: "访问"
        }
      ];
      var charts = {
        nodes: [],
        links: [],
        linesData: []
      };
      var dataMap = new Map();
      for (var j = 0; j < nodes.length; j++) {
        var x = parseInt(nodes[j].x);
        var y = parseInt(nodes[j].y);
        var node = {
          name: nodes[j].name,
          value: [x, y],
          symbolSize: 50,
          alarm: nodes[j].alarm,
          symbol: "circle",
          symbol: "image:///static/img/" + nodes[j].img,
          itemStyle: {
            normal: {
              color: "#12b5d0"
            }
          },
          addd: `我传递的${j}`
        };
        dataMap.set(nodes[j].name, [x, y]);
        charts.nodes.push(node);
      }
      for (var i = 0; i < links.length; i++) {
        var link = {
          source: links[i].source,
          target: links[i].target,
          label: {
            normal: {
              show: true,
              formatter: links[i].name
            }
          },
          lineStyle: {
            normal: {
              color: "#12b5d0"
            }
          }
        };

        charts.links.push(link);
        // 组装动态移动的效果数据
        var lines = [
          {
            coord: dataMap.get(links[i].source)
          },
          {
            coord: dataMap.get(links[i].target)
          }
        ];
        // var lines = [
        //   [dataMap.get(links[i].source)]
        //   ,
        //   [dataMap.get(links[i].target)]

        // ];

        charts.linesData.push(lines);
      }

      let option = {
        backgroundColor: "#404a59",
        title: {
          text: "网络拓扑图"
        },
        tooltip: {
          trigger: "none",
          formatter: "{b}"
        },
        // backgroundColor: "#F5F5F5",
        xAxis: {
          min: 0,
          max: 12,
          show: false,
          type: "value"
        },
        yAxis: {
          min: 0,
          max: 12,
          show: false,
          type: "value"
        },
        series: [
          {
            type: "graph",
            layout: "none",
            id: "a",
            focusNodeAdjacency: true,
            coordinateSystem: "cartesian2d",
            edgeSymbol: ["", "arrow"],
            // symbolSize: 50,
            label: {
              normal: {
                show: true,
                position: "bottom",
                color: "#12b5d0"
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                shadowColor: "none"
              }
            },
            xAxis: {
              min: 0,
              max: 12,
              show: false,
              type: "value"
            },
            yAxis: {
              min: 0,
              max: 12,
              show: false,
              type: "value"
            },
            // edgeSymbolSize: 8,
            draggable: true,
            data: charts.nodes,
            links: charts.links,
            z: 4,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function(item) {
                    return item.data.name;
                  }
                }
              }
            }
          },
          {
            type: "lines",
            name: "A",
            coordinateSystem: "cartesian2d",
            z: 4,
            effect: {
              show: true, // 开启线条的动态效果
              trailLength: 0,
              symbol: "arrow",
              color: "#12b5d0",
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                curveness: 0
              }
            },
            data: charts.linesData
          }
        ]
      };

      let myChart = echarts.init(document.getElementById("test"));
      myChart.setOption(option);

    

      myChart.setOption({
        graphic: echarts.util.map(charts.nodes, function(item, dataIndex) {
          return {
            type: "circle",
            position: myChart.convertToPixel("grid", item.value),
            shape: {
              cx: 5,
              cy: 5,
              r: 20
            },
            invisible: true,
            draggable: true,
            slient:true,
            ondrag: echarts.util.curry(onPointDragging, dataIndex),
            onmousemove: echarts.util.curry(showTooltip, dataIndex),
            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
            z: 100
          };
        })
      });

      function onPointDragging(dataIndex, dx, dy) {
        console.log("tempV-----");
        var tempV = myChart.convertFromPixel("grid", this.position);
        console.log("tempV", tempV);
        charts.nodes[dataIndex].value = [tempV[0], tempV[1]];
        // Update data
        myChart.setOption({
          series: [
            {
              id: "a",
              data: charts.nodes
            }
          ]
        });
      }

      function showTooltip(dataIndex) {
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: dataIndex
        });
      }

      function hideTooltip(dataIndex) {
        myChart.dispatchAction({
          type: "hideTip"
        });
      }

      window.addEventListener("resize", function() {
        myChart.resize();
        myChart.setOption({
          series: [
            {
              id: "a",
              data: charts.nodes
            }
          ]
        });
      });

      // var that = this;
      // myChart.on("click",function(param){
      //   console.log(param,"paramparam");
      //   that.dialogVisible = true;
      // })
    },
    handleClose() {}
  },

  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="less">
#test {
  width: 100%;
  height: 600px;
}
</style>
