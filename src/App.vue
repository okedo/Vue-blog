<template>
  <div id="app">
    <Auth/>
    <router-view/>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import { store } from "./common/store.js";
import Auth from "./components/Auth.vue";

export default {
  name: "app",
  store,
  components: {
    MainPage,
    Auth
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
