<template>
  <div>
    {{text}}
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["articleId"],
  data() {
    return this.$store.getters.articles[this.articleId];
  }
};
</script>

<style lang="scss" scoped>
</style>
