<template>
 <div class="article-detail-container">
    <router-link :to="'/'" class="main-page-link">Main page</router-link>
  <div class="author-controls-container" v-if="isLogged && isAutor">
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
    this.$store.dispatch("loadSeparateArticle", {
      id: this.$route.params._id
    });
  },
  computed: {
    userToken: function() {
      return this.$store.getters.userToken;
    },
    articleData: function() {
      return this.$store.getters.articleData;
    },
    userId: function() {
      return this.$store.getters.userData.userId;
    },
    isLogged: function() {
      return this.$store.getters.isLogged;
    },
    isAutor: function() {
      return this.articleData.isAutor;
    }
  },
  methods: {
    removeArticle() {
      this.$store.dispatch("removeArticle", {
        id: this.$route.params._id
      });
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
  .main-page-link {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

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
