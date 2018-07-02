<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import { store } from "./common/store.js";

export default {
  name: "app",
  store,
  components: {
    MainPage
  },
  created() {
    this.$store.dispatch("loadMainPage");
    this.$store.dispatch("loadArticles");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
