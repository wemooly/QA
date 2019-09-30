<template >
  <div>
    <el-upload
      action="http://47.102.133.136:8090/ctfbe/pic/upload"
      list-type="picture-card"
      :http-request="uploadImg"
      :on-preview="handlePictureCardPreview"
      :on-success="uploadImgSuccess"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :file-list="fileList"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="600" height="400" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
import { throws } from "assert";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      aa: "",
      fileList: []
    };
  },
  computed: {
    picArr() {
      return this.fileList.map(item => item.response.data.data.id);
    }
  },
  methods: {
    uploadImg(f) {
      console.log(f, "fffffff");
      let param = new FormData(); //创建form对象
      param.append("pic", f.file); //通过append向form对象添加数据
      let config = {
        headers: {}
      }; //添加请求头
      axios
        .post(f.action, param, {
          "Content-Type": "multipart/form-data",
          onUploadProgress: function(event) {
            console.log(event, "进度事件");
            let val = parseInt((event.loaded / event.total) * 100).toFixed(0);
            f.onProgress(f.file);
            console.log(val, "val");
            this.aa = val;
            console.log(this.aa, "aa");
          }
        }) //上传图片
        .then(response => {
          console.log(response, "成功");
          f.onSuccess(response); //自定义上传会导致 on-success失效  通过参数的 f.onSuccess(response); 调用
        })
        .catch(({ err }) => {
          f.onError();
        });
    },
    uploadImgSuccess(response, file, fileList) {
      // 缓存接口调用所需的文件路径
      console.log(file, "文件上传成功");
      console.log(fileList, "成功文件列表");
      this.fileList = fileList; //实时同步 形参 file
    },
    handleRemove(file, fileList) {
      // 更新缓存文件
      console.log("文件删除");
      console.log(fileList, "文件列表");
      this.fileList = fileList;
    },
    beforeUpload(file) {
      let _this = this;
      const is1M = file.size / 1024 / 1024 < 1; // 限制小于1M
      if (!is1M) {
        _this.$message.error("图片尺寸限制为654 x 270，大小不可超过1MB");
        return false;
      }
      const isSize = new Promise(function(resolve, reject) {
        let width = 654; // 限制图片尺寸为654X270
        let height = 270;
        let _URL = window.URL || window.webkitURL;
        let img = new Image();
        img.onload = function() {
          let valid = img.width === width && img.height === height;
          valid ? resolve() : reject();
        };
        img.src = _URL.createObjectURL(file);
      }).then(
        () => {
          return file;
        },
        () => {
          // _this.$message.error('图片尺寸限制为654 x 270，大小不可超过1MB')
          return Promise.reject();
        }
      );
      console.log(typeof (isSize & is1M));

      return true;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  mounted() {
    
    this.fileList = [
      {
        name: "food.jpeg",
        url:
          "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "food2.jpeg",
        url:
          "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      }
    ];
  }
};
</script>