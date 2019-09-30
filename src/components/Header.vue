<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>问题总览</router-link>
        <router-link to="/addQuestion" exact>添加问题</router-link>
        <router-link to="/singleQusetion" exact>单独问题</router-link>
        <router-link to="/myDashBoard" exact>dashboard</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "QHeader"
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