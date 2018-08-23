<template>
 <div>
  <div v-if="isLogged">
    <button>
      Edit
    </button>
    <button v-on:click="removeArticle()">
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
import { router } from "../common/routerModule.js";

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
  },
  methods: {
    removeArticle() {
      this.$store.dispatch("removeArticle", this.$route.params._id);
      router.push("/");
    }
  },
  destroyed() {
    this.$store.dispatch("clearCurrentArticle");
  }
};
</script>

<style lang="scss" scoped>
</style>
