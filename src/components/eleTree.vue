<template>
  <div>
    <el-button type="text" @click="dialogTableVisible = true"
      >打开嵌套表格的 Dialog</el-button
    >
    <el-button type="primary" @click="dialogTableVisible2 = true"
      >打开编辑器</el-button
    >
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-tree
        :data="data3"
        show-checkbox
        node-key="flag"
        :default-checked-keys="[3,7]"
      >
      </el-tree>
    </el-dialog>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible2">
      
    </el-dialog>

    <el-select v-model="value" placeholder="请选择" :disabled="flag">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
   </el-select>

   <a href="./../assets/logo.png" download="./../assets/logo.png">下载fiddler</a>
   <span id="press">我的点击使劲</span>
   <htmlEdit v-model="aa"></htmlEdit>
  </div>
</template>

<script>
import htmlEdit from "./htmlEdit" 
$(function(){
  $("#press").on("click",function(){
    alert(1)
    this.aa = "你好吗"

  })
})
export default {
  data() {
    return {
      data3: [
        {
          id:1,
          flag:1,
          label: "一级 2",
          children: [
            {
              id:2,
              flag:2,
              label: "二级 2-1",
              children: [
                {
                  id: 3,
                  flag:3,
                  label: "三级 3-1-1"
                },
                {
                  id: 4,
                  flag:4,
                  label: "三级 3-1-2",
                }
              ]
            },
            {
              id: 5,
              flag:5,
              label: "二级 2-2",
              children: [
                {
                  id: 6,
                  flag:6,
                  label: "三级 3-2-1"
                },
                {
                  id: 6,
                  flag:7,
                  label: "三级 3-2-2",
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      dialogTableVisible:false,
      dialogTableVisible2:false,
      options: [{
          value: "1",
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        flag:false,
        aa:"",
    };
  },
  components:{
    htmlEdit
  },
  created(){
    this.value = 1
    this.flag = true
  }
};
</script>