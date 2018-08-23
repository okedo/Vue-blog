<template>
 <div>
  <div v-if="isLogged">
    <button>
      Edit
    </button>
    <button>
      Delete
    </button>
  </div>
  <img src="articleData.imgSrc"/>
  <Article v-bind:article = "articleData" v-bind:key="articleData._id"></Article>
  <div>
    Comments
  </div>
</div>
</template>

<script>
import Article from "./Article.vue";

export default {
  props: ["article"],
  name: "ArticleDetail",
  components: {
    Article
  },
  data() {
    return {
      isLogged: this.$store.getters.isLogged
    };
  },
  created() {
    this.$store.dispatch("loadSeparateArticle", this.$route.params._id);
  },
  computed: {
    articleData: function() {
      return this.$store.getters.articleData;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
