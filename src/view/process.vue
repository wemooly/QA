<template>
    <div>
        <el-progress :percentage="40" :format="format"></el-progress>
    </div>
</template>

<script>
export default {
    methods: {
        format(percentage) {
            console.log(percentage,"percentage");
            
            return percentage === 100 ? '满' : `${percentage}%`;
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>