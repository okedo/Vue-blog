<template>
  <div>
    <div>
      {{title}}
    </div>
    <Article v-bind:articleId="id"></Article>
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
