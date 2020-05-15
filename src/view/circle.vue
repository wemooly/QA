<template>
    <div class="circle-wrap">
        <div class="wrap">
            <div class="circle" :class="`circle${index+1}`"  v-for="(item,index) in 22" :key="index">
               <div class="img_bg"></div>
                  <div class="text">
                    <header>mirror</header>
                    <img src="../assets/katong_4.png" />
                    <h6>QPS <span>11111次</span></h6>
                    <h6>错误数 <span>11111次</span></h6>
                </div> 
            </div>
        </div>
        <!-- <div class="mask"></div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer:null,
            i: 0 
        }
    },
    methods:{
        handlerCircle(){
            if (!this.timer) {
                this.timer= setInterval(()=>{
                console.log(this.i,"i");
                   this.i++
                //    if (this.i>4) {
                //      this.i = 0
                //    }
                   $(".circle-wrap .wrap").css("transform",`rotateZ(${90*this.i}deg)`)
                   $(".wrap>div").css({"transform":`rotateZ(-${90*this.i}deg)`,"transition":'1s transform'})
               },2000)
            }
        }
    },
    mounted() {
        this.handlerCircle()
    },
    beforeDestroy(){
        clearInterval(this.timer)
        this.timer = null
    }
}
</script>

<style lang="less" scoped>
.circle-wrap{
    position: relative;
    .mask{
        width: 800px;
        height: 700px;
        position: absolute;
        background-color: #ededed;
        top: 200px;
        left: 400px;
        z-index: 3;
        
    }
    .wrap{
        border: 2px solid #ccc;
        width: 1200px;
        height: 1200px;
        margin: 100px auto;
        position: relative;
        border-radius: 50%;
        transition: 1s transform;
        //   transform: rotateZ();
        //   animation: move 5s linear forwards;
        .circle{
         position: absolute;
          z-index: 99;
          width: 214px;
          height: 214px;
          position: absolute;
          .img_bg{
            position: relative;
            width: 214px;
            height: 214px;
            background: url("../assets/katong_2.png") top left no-repeat;
            background-size:100%;
            
            // -webkit-animation:haha1 30s linear infinite;
          }
          .text{
            position: absolute;
            top:0;
            left: 57px;
            header{
              text-align: center;
              line-height: 60px;
              -webkit-animation:none;
            }
            h6{
              color: #fff;
              text-align: center;
              font-size: 14px;
              line-height: 18px;
              span{
                color: #00F1F7;
              }
            }
          }
        }
        }
        .circle1{
            top: -150px;
            left: 250px;
        }
        .circle2{
            top: 250px;
            left: -150px;
        }
        .circle3{
            top: 450px;
            left: 250px;
        }
        .circle4{
            top: 250px;
            right: -150px;
        }
    }  

//   @keyframes move {
//      0%,80%{
//         transform: rotateZ(0deg)
//      } 
//      100%{
//         transform: rotateZ(90deg)
//      }
//   }
</style>

