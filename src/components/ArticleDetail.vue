<template>
 <div class="article-detail-container">
  <div class="author-controls-container" v-if="isLogged && isAuthor">
    <button v-on:click="editArticle()" class="edit-button button-common">
      Edit
    </button>
    <button class="delete-button button-common" v-on:click="removeArticle()">
      Delete
    </button>
  </div>
  <div class="article-title-container">
    <div class="article-title">{{articleData.title}}</div>
  </div>
  <img src="articleData.imgSrc" alt="Here will be an image"/>
  <div class="article-text-container">
    <div class="article-text">{{articleData.text}}</div>
  </div>
  <div v-if="articleData.comments" class="comments-container">
    Comments
  </div>
</div>
</template>

<script>
import { router } from "../common/routerModule.js";

export default {
  props: ["article"],
  name: "ArticleDetail",
  created() {
    this.$store.dispatch("loadSeparateArticle", this.$route.params._id);
  },
  computed: {
    articleData: function() {
      return this.$store.getters.articleData;
    },
    userId: function() {
      return this.$store.getters.userData.userId;
    },
    isLogged: function() {
      return this.$store.getters.isLogged;
    },
    isAuthor: function() {
      return this.articleData.userId && this.articleData.userId === this.userId;
      // TODO resolve this at API
    }
  },
  methods: {
    removeArticle() {
      this.$store.dispatch("removeArticle", this.$route.params._id);
      router.push("/");
    },
    editArticle() {
      router.push(`/article/edit/${this.$route.params._id}`);
    }
  },
  destroyed() {
    this.$store.dispatch("clearCurrentArticle");
  }
};
</script>

<style lang="scss" scoped>
.article-detail-container {
  .author-controls-container {
    .button-common {
      font-size: 1.5em;
      padding: 0.4em 1em;
      margin: 3px;
    }
    .edit-button {
    }
    .delete-button {
    }
  }
  .article-title-container {
    margin: 10px;
    padding: 5px;
    border-bottom: 1px solid black;

    .article-title {
      font-size: 28px;
    }
  }
  .article-text-container {
    height: 60vh;
    margin: 10px;
    padding: 5px 20px;
    border-bottom: 1px solid black;

    .article-text {
      font-size: 16px;
    }
  }
}
</style>
