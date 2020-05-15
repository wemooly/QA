<template>
<div>
    <div class="box"></div>
    <iframe id="myIframe"  :src= "src" ref="myIframe" name="myIframe"></iframe>
</div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            src:'https://mirror.anji-plus.com'
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
        // document.domain = "anji-plus.com"
        let dom = document.getElementById("myIframe")
        dom.onload=()=>{
          console.log("子页面加载完毕");
          console.log(window.frames['myIframe'].window);
        }
    },
};
</script>

<style scoped lang="less">
#myIframe{
    width: 100%;
    height: calc(100% - 31px);
}
</style>
