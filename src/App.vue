<template>
  <div id="app">
    <QHeader v-if="$route.query.flag=='underfind' || $route.query.flag!='1'"/>
    <!-- <Search :acceptRestaurants="total" :showDefaultValue="value"></Search> -->
    <router-view />
  </div>
</template>

<script>
import QHeader from "./components/Header";
import Search from "./components/SearchSQL";

export default {
  name: "App",
  components: {
    QHeader,
    Search,
  },
  data() {
    return {
      total: [
        { value: "t_ab", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "b_cd", address: "上海市嘉定区新郁路817号" },
        { value: "d_ga", address: "嘉定区曹安路1611号" },
        { value: "d_gaaa", address: "嘉定区曹安路1611号" },
        { value: "a_gab", address: "嘉定区曹安公路2383弄55号" },
        { value: "select", address: "select" },
        { value: "from", address: "form" },
        { value: "avg", address: "avg" }
      ],
      value: "",
    };
  },
  created() {
    
  },
};
</script>

<style>
</style>
