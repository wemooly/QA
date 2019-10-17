<template>
    <iframe id="mainContent"  :src= "src" ></iframe>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            src:'http://10.108.11.46/login'
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
#mainContent{
    width: 100%;
    height: calc(100% - 31px);
}
</style>
