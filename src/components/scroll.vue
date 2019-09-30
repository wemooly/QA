<script>
export default {
    
        //   this.$nextTick(()=>{
        //       this.scroll = new BScroll('.map-wrapper', {
        //         scrollY: true,
        //         click: true,
        //         probeType: 1,
        //         // pullUpLoad:{
        //         //   threshold:-30,
        //         //   stop:20,
        //         // }
        //       })
        //     // this.scroll.on('pullingDown',this.loadTop);
        //     // this.scroll.on('pullingUp',this.loadBottom);
        //     //  监听滚动事件
        //       this.scroll.on('scroll', (pos) => {
        //           console.log(pos,"pos22");
        //           if(pos.y > 0 && pos.y <= 50) {
        //             this.pullDownMsg = '下拉刷新';
        //           }else if(pos.y > 50) {
        //             this.pullDownMsg = "释放更新"
        //           }
        //       })
        //       this.scroll.on('touchEnd', (pos) => {
        //           // 下拉动作
        //           if (pos.y > 50) {
        //               util.throttle(this.loadTop,1000)();
        //           }
        //           // 上拉加载 总高度>下拉的高度+数值(20仅供参考) 触发加载更多
        //           if (pos.y < this.scroll.maxScrollY - 30) { 
        //               //使用refresh 方法 来更新scroll 解决无法滚动的问题
                      
        //               util.throttle(this.loadBottom,1000)();
        //           }
        //       })
        //   })
        // }
}
</script>