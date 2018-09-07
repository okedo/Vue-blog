<template>
  <div class="mainpage-container">
    <div class="add-new-article-link-container">
      <router-link class="add-new-article-link" to="/article/new" v-if="isAuthorized()">Add new</router-link>
    </div>
    <h1>
      {{pageData.title}}
    </h1>
    <div>
      {{pageData.text}}
    </div>
      <Article v-for="article in this.$store.getters.articles" v-bind:key="article.id" v-bind:id="article.id" v-bind:article = "article"></Article>
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
      pageData: this.$store.getters.mainPageData
    };
  },
  created() {
    this.$store.dispatch("loadArticles");
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

<style lang="scss" scoped>
.mainpage-container {
  .add-new-article-link-container {
    width: 100%;

    .add-new-article-link {
      color: black;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      text-align: right;
    }
  }
}
</style>
