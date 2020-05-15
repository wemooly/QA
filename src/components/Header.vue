<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>10499502030602&epsilon;10.0</router-link>
        <router-link to="/addQuestion" exact>添加问题</router-link>
        <router-link to="/singleQusetion" exact>单独问题</router-link>
        <router-link to="/myDashBoard" exact>dashboard</router-link>
        <el-button @click="reqFullScreen">全屏</el-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import screenfull from "screenfull"
import { log } from 'util';

export default {
  name: "QHeader",
  methods: {
    reqFullScreen(){
      let el = document.getElementById("boardLayout");
      console.log(el,"el");
      console.log(screenfull,"screenfull");
      
      
      if (screenfull.enabled) {
        screenfull.request(el);
      }
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav {
  background: crimson;
  padding: 30px 0;
  margin-bottom: 40px;
}

.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444;
}
</style>