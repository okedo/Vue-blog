<template>
  <div>
    <router-link to="/article/new" v-if="isLogged">Add new</router-link>
    <h1>
      {{pageData.title}}
    </h1>
    <div>
      {{pageData.text}}
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
    return {
      pageData: this.$store.getters.mainPageData,
      isLogged: this.$store.getters.isLogged
    };
  }
};
</script>

<style scoped>
</style>
