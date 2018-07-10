<template>
 <div>
  <Article v-bind:article = "article" v-bind:key="article.id"></Article>
</div>
</template>

<script>
import Article from "./Article.vue";

export default {
  props: ['article'],
  name: "ArticleDetail",
  components: {
    Article
  },
  data() {
    return this.$store.getters.articles[this.$route.params._id];
  },
  created() {
    this.$store.dispatch("loadArticle", this.$route.params._id);
  }
};
</script>

<style lang="scss" scoped>
</style>
