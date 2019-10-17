<template>
    <div>
        <el-input type="textarea" v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            input:'测试专用',   
        };
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
};
</script>

<style scoped lang="less">
/deep/.el-textarea{
    width: 100%;
    height: 100%;
    el-textarea__inner{
        width: 100%;
        height: calc(100% - 31px);
    }
}
</style>
