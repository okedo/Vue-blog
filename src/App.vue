<template>
  <div id="app">
    <Auth class="auth-component"/>
    <router-view class="routed-component"/>
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

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;

  .auth-component {
    flex-grow: 0;
  }

  .routed-component {
    flex-grow: 2;
  }
}
</style>
