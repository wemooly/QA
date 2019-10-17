<template>
<div>
  <el-row type="flex" justify="center">
    <el-col :span="20" :offset="2">
      <div>
        <input type="text" name="" id="" @input="putVal" v-model="searchWord" />
        <ul>
          <li
            v-for="(item, index) in searchList"
            :key="index"
            @click="addVal(item)"
          >
            {{ item.name }} {{ item.age }}
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>

  <iframe style="width:80%;height:1000px;margin:auto;" src="http://localhost:8080/addQuestion/studentInfo" frameborder="0" ></iframe>
</div>
</template>
<script>
export default {
  data() {
    return {
      searchWord: "",
      value: "",
      list: [
        { name: "wemoo", age: 20 },
        { name: "hello", age: 21 },
        { name: "world", age: 22 },
        { name: "console", age: 23 }
      ]
    };
  },
  methods: {
    putVal(e) {
      this.value = e.data;
      console.log(e);
    },
    addVal(item) {
      this.searchWord += item.name;
    }
  },
  computed: {
    searchList() {
      return this.list.filter(item => {
        return item.name.includes(this.value);
      });
    }
  }
};
</script>

<style >
</style>

