<template>
  <div class="app-container">
    <el-row :gutter="20">
        <el-col :xs="24" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <h3 class="title">招聘信息查询表</h3>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <div class="c-search fr">
                    <el-input v-model="name" placeholder="请输入名称"
                            suffix-icon="el-icon-search"></el-input>
                </div>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="container">
        <el-col :xs="24" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
            <el-table
            id="table"
            v-loading="listLoading"
            :data="newList"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
            >
            <el-table-column align="center" label="ID" width="95">
                <template slot-scope="scope">
                {{ scope.$index }}
                </template>
            </el-table-column>
            <el-table-column label="Title">
                <template slot-scope="scope">
                {{ scope.row.title }}
                </template>
            </el-table-column>
            <el-table-column label="Author" width="110" align="center">
                <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Pageviews" width="110" align="center">
                <template slot-scope="scope">
                {{ scope.row.pageviews }}
                </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="Status" width="110" align="center">
                <template slot-scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="Display_time" width="200">
                <template slot-scope="scope">
                <i class="el-icon-time" />
                <span>{{ scope.row.display_time }}</span>
                </template>
            </el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-row>
        <el-col :xs="24" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
            <div class="pagination fr">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[2,10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="8">
                </el-pagination>
            </div>
        </el-col>
    </el-row>
    <el-button type="primary" @click="exportExcel">导出excel</el-button>

    <el-button type="primary" style="width:100%;" @click="$router.go(-1)">上一步</el-button>
    <el-button type="primary" style="width:100%;" @click="$router.push('/studentInfo')">完成</el-button>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [
          {title:'你好1',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好2',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好3',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好4',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好5',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好6',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好7',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
          {title:'你好8',author:"李四",pageviews:"王五",status:"赵六",display_time:'周六'},
      ],
      listLoading: true,
      name:'',
      pageSize:2,
      pageNum:1,
    }
  },
  computed:{
    newList(){
      return this.list.slice((this.pageNum - 1) * this.pageSize,this.pageNum * this.pageSize)
    }
  },
  created() {
    this.fetchData()
    this.listLoading = false
  },
  methods: {
    fetchData() {
      this.listLoading = true
    //   getList().then(response => {
    //     // this.list = response.data.items
    //     // this.listLoading = false
    //   })
    },
    handleCurrentChange(val){
      this.pageNum = val
    },
    handleSizeChange(val){
      this.pageSize = val
    },
    exportExcel(){
      this.pageSize = 30;//表格长度变长
      this.$nextTick(()=>{
        let table = document.getElementById('table');
        let workbook = XLSX.utils.table_to_book(table);
        let workboodout = XLSX.write(workbook, { bookType: 'xlsx', bookSST: true, type: 'array'});
            try {
              FileSaver.saveAs(new Blob([workboodout], { type: 'application/octet-stream'}), 'table.xlsx');
              // table.xlsx 为导出的文件名，可自定义
            } catch (e) {
              console.log(e, workboodout);
            }
            
            this.pageSize = 2;//表格还原
            return workboodout;
      })
    }
  },
  
}
</script>
<style lang="less" scoped>
    /deep/.pagination .el-input .el-input__inner{
        border-radius: 50px!important;
    }
    .container{
        margin: 20px 0;
    }
    .title{
        line-height: 40px;
    }
</style>
