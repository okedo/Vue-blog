<template>
  <div>
    <div>
      {{title}}
    </div>
    <Article></Article>
  </div>
</template>

<script>
import Article from "./Article.vue";
import { store } from "../common/store";

export default {
  name: "MainPage",
  components: {
    Article
  },
  data() {
    let mainPageData = store.loadMainPageData();
    return mainPageData;
  }
};
</script>

<style scoped>
</style>
