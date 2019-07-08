<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="8" :offset="8">
        <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      state2: "", // 显示的值
      valueArr: [], // 将显示的值空格 分割之后的数组
      inputArr: [], // 输入的所有值空格 分割之后的数组
      word: "", //总的inputword
      lastInputWord: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      this.indexArr = [];
      console.log(queryString, "input输入的值");
      this.valueArr = queryString.trim().split(/\s+/g);

      // const len = this.valueArr.length - 1;
      // console.log(this.valueArr[len]);

      var restaurants = this.restaurants; //初始为空
      var results;

      // 获取输入框空格之后 最后输入的收个字母

      // 根据最后输入的单词的首字母  找输入框值里面的索引 拿值去匹配
      this.index = this.valueArr.findIndex((item, index) => {
        if (item[0] == this.lastInputWord) {
          return true;
        }
      });
      console.log(this.index, "索引");

      console.log(this.valueArr[this.index], "去搜索的关键字");

      if (this.index < 0) {
        return;
      }

      results = queryString
        ? restaurants.filter(this.createFilter(this.valueArr[this.index]))
        : restaurants;

      // var results = queryString
      //   ? restaurants.filter(this.createFilter(this.valueArr[len]))
      //   : restaurants;
      // 调用 callback 返回建议列表的数据
      console.log(results, 99999);
      cb(results || []);
    },
    createFilter(key) {
      return restaurant => {
        return restaurant.value.toLowerCase().indexOf(key.toLowerCase()) === 0;
      };
    },
    loadAll() {
      return [
        { value: "t_ab", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "b_cd", address: "上海市嘉定区新郁路817号" },
        { value: "d_ga", address: "嘉定区曹安路1611号" },
        { value: "d_gaaa", address: "嘉定区曹安路1611号" },
        { value: "a_gab", address: "嘉定区曹安公路2383弄55号" },
        { value: "select", address: "select" },
        { value: "from", address: "form" },
        { value: "avg", address: "avg" }
      ];
    },
    add(e) {
      console.log(e);
    },
    handleSelect(item) {
      console.log(item);
      this.valueArr[this.index] = item.value;
      this.state2 = this.valueArr.join("  ");
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    document.querySelector(".el-input__inner").oninput = e => {
      console.log(e); // 跟新这个可以找到最新输入的那个值  根据这个首字母  去空之后的第一个值
      this.word += e.data;
      this.inputArr = this.word.trim().split(/\s+/g);
      // this.lastInputWord =
      //   this.inputArr[this.inputArr.length - 1].length == 1
      //     ? this.inputArr[this.inputArr.length - 1]
      //     : this.inputArr[this.inputArr.length - 1][0];
      this.lastInputWord =
        this.inputArr[this.inputArr.length - 1].length == 1
          ? this.inputArr[this.inputArr.length - 1]
          : this.inputArr[this.inputArr.length - 1][0];
    };
  }
};
</script>

<style scoped>
.el-autocomplete {
  width: 400px;
}
</style>
