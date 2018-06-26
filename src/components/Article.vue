<template>
<div>
  <h1>{{article.title}}</h1>
  <div>
    {{article.text}}
  </div>
</div>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  data() {
    return this.$store.getters.articles[this.articleId];
  }
};
</script>

<style lang="scss" scoped>
</style>
