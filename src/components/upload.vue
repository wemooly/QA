<template >
    <div>
        <el-upload
            action="http://47.102.133.136:8090/ctfbe/pic/upload"
            list-type="picture-card"
            :http-request="uploadImg"
            :on-success="uploadImgSuccess"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
    </div>
</template>
<script>
  import axios from "axios"
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
        uploadImg (f) {
            console.log(f,"fffffff");
            let param = new FormData(); //创建form对象
            param.append('pic',f.file);//通过append向form对象添加数据
            let config = {
            headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头
            axios.post(f.action,param,config)//上传图片
            .then(response=>{
                console.log(response,"成功");
                
                // onSuccess(response.data)
            })
            .catch(({err}) => {
                f.onError()
            })   
        },
        uploadImgSuccess(response, file, fileList) {
                // 缓存接口调用所需的文件路径
                console.log('文件上传成功')
        },
        handleRemove(file, fileList) {
                // 更新缓存文件
                console.log('文件删除')
                console.log(fileList,"文件列表");
                
        }
    }

    
  }
</script>