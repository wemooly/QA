<template>
  <div class="search">
    <el-autocomplete
      class="inline-input"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
      :disabled="editFlag"
      @input.native="add"
      
    >
    <!-- @input.native="textInput"
      @click.native="clickInput"
      @keyup.native="keyupInput" -->
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
      </template>
    </el-autocomplete>

    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      :visible.sync="centerDialogVisible"
      width="100%"
      :append-to-body="true"
      center>
      <router-view></router-view>

    </el-dialog>
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
    },
    // 接受父组件的值 回显在input框中
    showDefaultValue: {
      type: String
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      state: "", // input中显示的值
      oldArr: [], // 存储前一次的值的数组
      newArr: [], // 存储最新值的数组
      index: 0,
      signArr: [" ", "()", "(", ")", "+", "-", "*", "/"], // 需要分隔匹配的特殊字符
      //  总的供搜索选择的数据 (address可选 展示结构内可设置)
      restaurants: [
        { value: "max", address: "max" },
        { value: "min", address: "min" },
        { value: "avg", address: "avg" },
        { value: "count", address: "count" },
        { value: "sum", address: "sum" }
      ],
      cursurPositionIndex: "", //记录光标在input框的位置
      sign: "", // 输入的符号
      inputVal: "", // 记录的input中的值
      editFlag: false // 是否可编辑的标识
    };
  },
  methods: {
    add(e) {
      console.log(e, "native事件");
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants; //初始为空
      // 返回得到匹配的结果集
      var results = queryString
        ? restaurants.filter(this.createFilter(this.newArr[this.index] || " "))
        : restaurants;
      cb(results);
      this.inputVal = this.state;
    },
    // 对最新输入的值进行筛选匹配
    createFilter(key) {
      return restaurant => {
        return restaurant.value.toLowerCase().indexOf(key.toLowerCase()) === 0;
      };
    },
    // 处理点击供选择的值 展示state
    handleSelect(item) {
      if (this.sign) {
        let start = this.inputVal.slice(0, this.cursurPositionIndex);
        let end = this.inputVal.slice(this.cursurPositionIndex);

        if (item.value.includes(end)) {
          this.state = start + item.value;
        } else {
          this.state =
            start + item.value + end.slice(this.newArr[this.index].length);
        }
      } else {
        this.state = item.value;
      }
      // 跟新新数组的对应位置的值
      this.newArr[this.index] = item.value;
      // this.state = this.newArr.join(" ");

      // 只要选择了匹配到的值也马上同意一下  就同步状态
      this.oldArr = this.newArr;

      // 统一处理一下显示出来的东西只能有一个空格
      this.state = this.state.split(/\s+/g).join(" ");
      // this.$emit("父组件的方法名",this.state);   // 将值传递给父组件
    },
    // 处理光标和供搜索的值
    // onInput() {
    //   var $input = document.querySelector(".inline-input .el-input__inner");
    //   var cursurPosition = 0;
    //   // 输入的文字的时候监听光标的位置
    //   $input.oninput = e => {
    //     this.newArr = e.target.value.trim().split(/[\s+,(,),\-,\/,\*]/g);
    //     this.newArr = this.cleanArray(this.newArr);

    //     // 如果我将 newArr 清空了  也要统一 oldArr
    //     if (this.oldArr.length >= this.newArr.length) {
    //       this.oldArr = this.newArr;
    //       this.cursurPositionIndex = cursurPosition - 1; // 删除的时候重置光标的位置
    //     }
    //     //找出不同的哪一个位置的索引
    //     for (let i = 0, len = this.newArr.length - 1; i <= len; i++) {
    //       if (this.oldArr[i] != this.newArr[i]) {
    //         this.index = i;
    //         break;
    //       } else {
    //         this.index = i + 1;
    //       }
    //     }
    //     // 光标位置的函数
    //     if ($input.selectionStart) {
    //       //非IE
    //       cursurPosition = $input.selectionStart;
    //     } else {
    //       //IE
    //       try {
    //         var range = document.selection.createRange();
    //         range.moveStart("character", -$input.value.length);
    //         cursurPosition = range.text.length;
    //       } catch (e) {
    //         cursurPosition = 0;
    //       }
    //     }
    //     if (this.signArr.includes(e.data)) {
    //       this.oldArr = this.newArr;
    //       this.sign = e.data;
    //       this.cursurPositionIndex = cursurPosition;
    //     }
    //   };
    //   // 点击的时候也跟新光标的位置
    //   $input.onclick = e => {
    //     if ($input.selectionStart) {
    //       //非IE
    //       cursurPosition = $input.selectionStart;
    //     } else {
    //       //IE
    //       try {
    //         var range = document.selection.createRange();
    //         range.moveStart("character", -$input.value.length);
    //         cursurPosition = range.text.length;
    //       } catch (e) {
    //         cursurPosition = 0;
    //       }
    //     }
    //     this.cursurPositionIndex = cursurPosition;
    //   };
    //   $input.onkeyup = e => {
    //     e = e || window.event;
    //     if (e.keyCode == 37) {
    //       this.cursurPositionIndex--;
    //       if (this.cursurPositionIndex <= 0) {
    //         this.cursurPositionIndex = 0;
    //       }
    //     } else if (e.keyCode == 39) {
    //       this.cursurPositionIndex++;
    //       if (this.cursurPositionIndex >= this.inputVal.length) {
    //         this.cursurPositionIndex = this.inputVal.length;
    //       }
    //     }
    //   };
    // },
    textInput(e){
      // 输入的文字的时候监听光标的位置
        var $input = document.querySelector(".inline-input .el-input__inner");

        this.newArr = e.target.value.trim().split(/[\s+,(,),\-,\/,\*]/g);
        this.newArr = this.cleanArray(this.newArr);
        console.log(3213);
        // 如果我将 newArr 清空了  也要统一 oldArr
        if (this.oldArr.length >= this.newArr.length) {
          this.oldArr = this.newArr;
          this.cursurPositionIndex = this.cursurPosition - 1; // 删除的时候重置光标的位置
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
          this.cursurPosition = $input.selectionStart;
        } else {
          //IE
          try {
            var range = document.selection.createRange();
            range.moveStart("character", -$input.value.length);
            this.cursurPosition = range.text.length;
          } catch (e) {
            this.cursurPosition = 0;
          }
        }
        console.log(this.cursurPosition,"this.cursurPosition");
        
        if (this.signArr.includes(e.data)) {
          this.oldArr = this.newArr;
          this.sign = e.data;
          this.cursurPositionIndex = this.cursurPosition;
        }
    },
    clickInput(e){
       var $input = document.querySelector(".inline-input .el-input__inner");

        //点击的时候也跟新光标的位置
        if ($input.selectionStart) {
          //非IE
          this.cursurPosition = $input.selectionStart;
        } else {
          //IE
          try {
            var range = document.selection.createRange();
            range.moveStart("character", -$input.value.length);
            this.cursurPosition = range.text.length;
          } catch (e) {
            this.cursurPosition = 0;
          }
        }
        this.cursurPositionIndex = this.cursurPosition;
    },
    keyupInput(e){
        e = e || window.event;
        if (e.keyCode == 37) {
          this.cursurPositionIndex--;
          if (this.cursurPositionIndex <= 0) {
            this.cursurPositionIndex = 0;
          }
        } else if (e.keyCode == 39) {
          this.cursurPositionIndex++;
          if (this.cursurPositionIndex >= this.inputVal.length) {
            this.cursurPositionIndex = this.inputVal.length;
          }
        }
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
    if (this.showDefaultValue) {
      this.state = this.showDefaultValue;
      this.editFlag = true;
    }

    // this.restaurants = (this.restaurants.push(this.acceptRestaurants)).flat();
    // 每次 按下空格键/特殊字符就统一 oldArr 和 newArr/
    // this.onInput();
  }
};
</script>

<style scoped lang="less">
.el-autocomplete {
  width: 400px;
}
</style>
