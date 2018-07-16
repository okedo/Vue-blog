<template>
  <div>
    <router-link to="/article/new" v-if="isAuthorized()">Add new</router-link>
    <h1>
      {{pageData.title}}
    </h1>
    <div>
      {{pageData.text}}
    </div>
    <Article v-for="article in this.$store.getters.articles" v-bind:article = "article" v-bind:key="article.id"></Article>
    <div v-if="loadArticlesError()">Please reload page</div>
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
    return {
      pageData: this.$store.getters.mainPageData,
    };
  },
  methods: {
    isAuthorized() {
      return this.$store.getters.isLogged;
    },
    loadArticlesError() {
      this.$store.getters.articlesLoadError;
    }
  }
};
</script>

<style scoped>
</style>
