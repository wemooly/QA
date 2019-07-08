<template>
  <div class="search">
    <el-autocomplete
      class="inline-input"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
      </template>
    </el-autocomplete>
  </div>
</template>
<script>
export default {
  name: "searchSQL",
  props: {
    acceptRestaurants: {
      // 传递过来 供搜索选择的数据
      type: Array
      // required: true,
    }
  },
  data() {
    return {
      state: "", // input中显示的值
      oldArr: [], // 存储前一次的值的数组
      newArr: [], // 存储最新值的数组
      index: 0,
      signArr: [" ", "()", "(", ")", "+", "-", "*", "/"], // 需要分隔匹配的特殊字符
      //  总的供搜索选择的数据
      restaurants: [
        { value: "max", address: "max" },
        { value: "min", address: "min" },
        { value: "avg", address: "avg" },
        { value: "count", address: "count" },
        { value: "sum", address: "sum" }
      ],
      cursurPositionIndex: "", //记录鼠标在input框的位置
      sign: "", // 输入的符号
      inputVal: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      console.log(queryString, "输入的单词");
      console.log(this.newArr[this.index], "最新搜索的词");

      var restaurants = this.restaurants; //初始为空
      // 返回得到匹配的结果集
      var results = queryString
        ? restaurants.filter(this.createFilter(this.newArr[this.index] || " "))
        : restaurants;

      // console.log(results, "得到的结果");
      cb(results);
      this.inputVal = this.state;

      // let start = this.inputVal.slice(0, this.cursurPositionIndex);
      // let end = this.inputVal.slice(this.cursurPositionIndex);
      // console.log(start, "开始");
      // console.log(end, "结尾的");
      // console.log(
      //   end.slice(this.newArr[this.index] ? this.newArr[this.index].length : 0),
      //   "去除后的"
      // );
    },
    // 对最新输入的值进行筛选匹配
    createFilter(key) {
      return restaurant => {
        return restaurant.value.toLowerCase().indexOf(key.toLowerCase()) === 0;
      };
    },
    // 处理点击供选择的值 展示state
    handleSelect(item) {
      // if (this.sign) {
      //   let start = this.inputVal.slice(0, this.cursurPositionIndex);
      //   let end = this.inputVal.slice(this.cursurPositionIndex);

      //   if (item.value.includes(end)) {
      //     this.state = start + item.value;
      //   } else {
      //     this.state =
      //       start + item.value + end.slice(this.newArr[this.index].length);
      //   }
      // } else {
      //   this.state = item.value;
      // }
      // 跟新新数组的对应位置的值

      this.state = this.inputVal.replace(
        new RegExp(this.newArr[this.index], "g"),
        item.value
      );
      this.newArr[this.index] = item.value;
      // this.state = this.newArr.join(" ");

      // 只要选择了匹配到的值也马上同意一下  就同步状态
      this.oldArr = this.newArr;
      console.log(this.inputVal, "输入的词");
    },
    onInput() {
      var $input = document.querySelector(".el-input__inner");
      var cursurPosition = 0;
      $input.oninput = e => {
        this.newArr = e.target.value.trim().split(/[\s+,(,),\-,\/,\*]/g);
        this.newArr = this.cleanArray(this.newArr);
        // this.newArr = queryString.trim().split(/\s+/g);
        console.log(this.newArr, "新");
        console.log(this.oldArr, "旧");
        // 如果我将 newArr 清空了  也要统一 oldArr
        if (this.oldArr.length > this.newArr.length) {
          this.oldArr = this.newArr;
        }
        //找出不同的哪一个位置的索引
        for (let i = 0, len = this.newArr.length - 1; i <= len; i++) {
          if (this.oldArr[i] != this.newArr[i]) {
            this.index = i;
            break;
          } else {
            this.index = i + 1;
          }
        }
        // 光标位置的函数
        if ($input.selectionStart) {
          //非IE
          cursurPosition = $input.selectionStart;
        } else {
          //IE
          try {
            var range = document.selection.createRange();
            range.moveStart("character", -$input.value.length);
            cursurPosition = range.text.length;
          } catch (e) {
            cursurPosition = 0;
          }
        }
        if (this.signArr.includes(e.data)) {
          this.oldArr = this.newArr;
          this.sign = e.data;
          this.cursurPositionIndex = cursurPosition;
          // console.log(this.cursurPositionIndex, "光标的位置");
        }
      };
      // 点击的时候也跟新光标的位置
      $input.onclick = e => {
        if ($input.selectionStart) {
          //非IE
          cursurPosition = $input.selectionStart;
        } else {
          //IE
          try {
            var range = document.selection.createRange();
            range.moveStart("character", -$input.value.length);
            cursurPosition = range.text.length;
          } catch (e) {
            cursurPosition = 0;
          }
        }
        this.cursurPositionIndex = cursurPosition;
      };
    },
    // 数组去空
    cleanArray(actual) {
      const newArray = [];
      for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
          newArray.push(actual[i]);
        }
      }
      return newArray;
    }
  },
  mounted() {
    // 如果有传数据过来就 将数据加入  共选择的数据
    if (this.acceptRestaurants) {
      this.acceptRestaurants.forEach(item => {
        this.restaurants.push(item);
      });
    }
    // this.restaurants = (this.restaurants.push(this.acceptRestaurants)).flat();
    // 每次 按下空格键/特殊字符就统一 oldArr 和 newArr/
    this.onInput();
  }
};
</script>

<style scoped lang="less">
.el-autocomplete {
  width: 400px;
}
</style>
