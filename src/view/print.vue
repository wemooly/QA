<template>
<div>
  <el-button @click="printPdf" >打印</el-button>
  <div class="print-container" :class="mobileFlag ? 'mobileFlag-print-container' : ''" id="form1">
    <div class="print-wrapper">
      <div class="bill-title">店铺消费清单</div>
      <ul class="ord-info">
        <li>
          <span>联系人</span>
          <span>张三</span>
        </li>
        <li >
          <span>联系电话</span>
          <span>18627732311</span>
        </li>
        <li >
          <span>下单时间</span>
          <span>2019-10-17 10:10:10</span>
        </li>
        <li >
          <span>配送地址</span>
          <span>上海市杨浦区江浦路尚凯商务大厦1000号</span>
        </li>
      </ul>
      <ul class="goods-list">
        <li>
          <span>商品</span>
          <span>数量</span>
          <span>单价</span>
        </li>
        
        <li v-for="(goods, i) in 5" :key="i">
          <span>{{ 111 }}</span>
          <span>x{{ 222}}</span>
          <span>{{ 0 }}</span>
        </li>
        <li v-for="(good, i) in 3" :key="`${i}_${good.name}`">
          <span>{{ 555 }}</span>
          <span>x{{6666 }}</span>
          <span>{{ 1.00 }}</span>
        </li>
      </ul>
      <div class="account-wrapper">
        <ul >
            <li class="account-item">
                <span>总价格</span>
                <span>2000</span>
            </li>
            <li class="account-item">
                <span>折扣</span>
                <span>-1000</span>
            </li>
            <li class="account-item">
                <span>实付金额</span>
                <span>1000元</span>
            </li>
            <li class="account-item">
                <span>付款方式</span>
                <span>微信付款</span>
            </li>
            <li class="account-item">
                <span>收银人</span>
                <span>admin</span>
            </li>
            <li class="account-item">
                <span>打单时间</span>
                <span>2019-10-17 10:10:10</span>
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>


<script>
  import { getLodop } from './../components/data/LodopFuncs'

  export default {
    data() {
      return {
        ordList: [
          {key: 'nun', title: '账单号'},
          {key: 'room', title: '包间号'},
          {key: 'startTime', title: '下单时间'},
          {key: 'vip', title: '会员'},
          {key: 'balance', title: '余额'}
        ],
         printOptions: [],
          printValue: '-1',
          a:10,
          activeName:'second'
      }
    },
  
    methods: {
      // 查询数据
      printPdf() {
        
        let  LODOP = getLodop();
        LODOP.PRINT_INIT("打印小票");
        LODOP.SET_PRINT_STYLE("FontSize", 18);
        LODOP.SET_PRINT_STYLE("Bold", 1);
        LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "打印页面部分内容");
        LODOP.SET_PRINT_PAGESIZE(3,580,20,"CreateCustomPage")
        LODOP.ADD_PRINT_HTM(30,20,450,600,
          document.getElementById("form1").innerHTML);
        // LODOP.PRINT();
        LODOP.PREVIEW();
      },

      getLodopData() {
        let LODOP = getLodop();
        let arr = []
        let iPrinterCount = LODOP.GET_PRINTER_COUNT();
        for (let i = 0; i < iPrinterCount; i++) {
          arr.push({
            label: LODOP.GET_PRINTER_NAME(i),
            value: i
          })
        }
        let defaultName = LODOP.GET_PRINTER_NAME('-1')  //GET_PRINTER_NAME(intPrinterIndex);用序号获得打印机名，一般序号从0开始，-1特指默认打印机；
        arr.forEach(item => {
          if (item.label === defaultName) {
            item.value = '-1'
            item.label += '-默认打印机'
          }
        })

        console.log(arr)
        this.printOptions = arr
      }
    },
    filters: {
     
    },
    watch: {
      
    },
    components: {
     
    }
  }
</script>

<style lang="less" scoped>
  .print-container {
    display: flex;
    justify-content: center;
  }
  .print-wrapper {
    width: 10cm;
    border: 1px solid red;
    background: #fff;
    left: 10px;
    right: 10px;
    top: 0px;
    bottom: 10px;
    padding: 20px 10px 10px 20px;
    font-size: 12px;
    overflow: auto;
    .bill-title {
      padding-bottom: 10px;
      font-size: 16px;
      text-align: center;
    }

    .goods-list, .ord-info {
      li {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        &:first-child {
          span {
            font-weight: bold;
          }
        }
        span {
          flex: 1;
          line-height: 16px;
          text-align: right;
          &:first-child {
            text-align: left;
          }
        }
      }
    }

    .ord-info {
      margin: 10px 0;
      padding: 10px 0;
      border-top: 2px dashed #dcdcdc;
      border-bottom: 2px dashed #dcdcdc;
      span {
        font-weight: bold;
      }
      .order-vip {
        color: blue;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .order-vip-operate {
        color: blue;
        cursor: pointer;
        padding: 0 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .account-wrapper {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 2px solid red;
      .account-item {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .money-origin {
          color: blue;
          font-weight: bold;
        }
        .money-discount {
          color: green;
          font-weight: bold;
        }
        .money-pay {
          color: #f40;
          font-weight: bold;
        }
        .money-paymethos {
          cursor: pointer;
          span {
            margin-right: 5px;
            color: blue;
          }
        }
      }
    }
    .print-order {
      button {
        width: 100%;
      }
    }
  }
  .mobileFlag-print-container {
    height: auto;
    min-height: 100%;
    .print-wrapper {
      padding: 10px;
    }
    .mobile-back {
      text-align: left;
    }
    .mobile-roominfo {
      text-align: left;
      margin-top: 10px;
      p {
        padding: 3px 0;
      }
    }
  }
</style>
