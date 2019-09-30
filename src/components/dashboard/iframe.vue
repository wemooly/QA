<template>

         <iframe id="mainContent"  :src= "src" ></iframe>

</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            src:'https://www.baidu.com'
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
