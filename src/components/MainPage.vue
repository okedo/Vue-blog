<template>
  <div>
    <h1>
      {{title}}
    </h1>
    <div>
      {{text}}
    </div>
    <Article v-for="article in this.$store.getters.articles" v-bind:article = "article" v-bind:key="article.id"></Article>
  </div>
</template>

<script>
import Article from "./Article.vue";

export default {
  name: "MainPage",
  components: {
    Article
  },
  data() {
    return this.$store.getters.mainPageData;
  }
};
</script>

<style scoped>
</style>
