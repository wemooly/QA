<template>
 <div class="app-container">
   <div class="filter-container">
     <el-button type="primary" @click="init()" icon="el-icon-circle-plus">add</el-button>
   </div>
   <el-dialog title="表单Table" :visible.sync="dialogFormVisible">
     <el-form :model="fromData" ref="from">
       <el-table :data="fromData.domains">
         <el-table-column label="姓名">
           <template slot-scope="scope">
             <el-form-item :prop="'domains.'+scope.$index+'.name'" :rules="fromaDataRules.name">
               <el-input v-model="scope.row.name"></el-input>
             </el-form-item>
           </template>
         </el-table-column>
         <el-table-column label="地址">
           <template slot-scope="scope">
             <el-form-item :prop="'domains.'+scope.$index+'.desc'" :rules="fromaDataRules.desc">
               <el-input v-model="scope.row.desc"></el-input>
             </el-form-item>
           </template>
         </el-table-column>
       </el-table>
     </el-form>
     <el-button type="warning" @click="submit('from')">submit</el-button>
   </el-dialog>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible:false,
        fromData:{
          domains:[
                    {
                        name: undefined,
                        desc: undefined
                    },
                    {
                        name:undefined,
                        desc:undefined
                    }
                ]
        },
        fromaDataRules:{
          name:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
          desc:[ { required: true, message: '请填写活动形式', trigger: 'blur' }]
        },
        domains:[],
      }
    },
    mounted(){
    //   this.initDomains()
    },
    methods:{
    //   initDomains(){
    //     this.domains=[
    //       {
    //         name: undefined,
    //         desc: undefined
    //       },
    //       {
    //         name:undefined,
    //         desc:undefined
    //       }
    //     ]
    //   },
      init(){
        this.dialogFormVisible = true
        // this.$set(this.fromData,'domains',this.domains)
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
