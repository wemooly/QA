<template>
    <div class="wrapper">
        <h3 class="title">安吉加加信息技术有限公司-招聘信息收集</h3>
        <div class="header">
            <img src="./../assets/infoImg/header.jpg" alt="">
        </div>
        <div class="logo">
            <img src="./../assets/infoImg/ajlogo.png" alt="">
        </div>
        <div class="container">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="姓名" prop="name">
                   <el-input
                        placeholder="请输入姓名"
                        v-model="form.name">
                        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                   <el-input
                        placeholder="请输入手机号"
                        v-model="form.phone">
                        <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="mail">
                   <el-input
                        placeholder="请输入邮箱地址"
                        v-model="form.mail">
                        <i slot="prefix" class="el-input__icon el-icon-message"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="毕业学校" prop="schoolName">
                   <el-input
                        placeholder="请输入学校名称"
                        v-model="form.schoolName">
                    </el-input>
                </el-form-item>
                <el-form-item label="专业名称" prop="majorName">
                   <el-input
                        placeholder="请输入专业名称"
                        v-model="form.majorName">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;" @click="onSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="footer">
            <el-card class="box-card">
                <h3>投递简历邮箱 :</h3>
                <p>zhaopin@anji-plus.com</p>
            </el-card>
            <img src="./../assets/infoImg/aj-shou-ye.png" alt="">
        </div>

        <el-button type="primary" style="width:100%;" @click="$router.push('/addQuestion/searchStudent')">下一步</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                phone: '',
                mail: '',
                schoolName:'',
                majorName:''
            },
            rules:{
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' }
                ], 
                phone:[
                    { required: true, message: '请填写联系方式', trigger: 'blur' }
                ],
                mail:[
                    { required: true, message: '请填写邮编', trigger: 'blur' }
                ],
                schoolName:[
                    { required: true, message: '请填写毕业学校', trigger: 'blur' }
                ],
                majorName:[
                    { required: true, message: '请填写专业名称', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
};
</script>

<style scoped lang="less">
.wrapper{
    max-width: 640px;
    margin-top: 80px;
    margin:auto;
    border: 1px solid #ccc;
    .header,
    .logo{
        max-width: 640px;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .title{
        line-height: 50px;
        text-align: center;
        font-weight: 700;
        background-color: #fff;
    }
    .header{
        height: 200px;
    }
    .logo{
        height: 80px;
    }
    .container{
        padding: 20px;
        background:url("./../assets/infoImg/bg-info.jpg") 100% 100%;
    }
    .footer{
        height:230px;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
        .box-card{
            margin-top: -20px;
            line-height: 25px;
            h3{
                font-weight: 700;
            }
        }
    }
}
</style>
