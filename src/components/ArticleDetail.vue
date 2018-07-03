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
    console.log(this.$route.params.id);
    return this.$store.getters.articles[this.$route.params.id];
  }
};
</script>

<style lang="scss" scoped>
</style>
