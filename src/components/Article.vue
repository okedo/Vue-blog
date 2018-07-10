<template>
<div>
  <router-link :to=getUrl() class="article-title">
    {{article.title}}
  </router-link>
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
  },
  methods: {
    getUrl() {
      return "/article/" + this.article.id;
    }
  }
};
</script>

<style lang="scss" scoped>
.article-title{
  text-decoration: none;
  font-size: 24px;
  font-family: Arial;
  color: #000000;
  padding: 20px 0 10px;
  display: inline-block;
}
</style>
