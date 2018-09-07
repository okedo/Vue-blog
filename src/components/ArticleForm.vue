<template>
  <div class="article-form-container">
    <router-link :to="'/'" class="main-page-link">Main page</router-link>
    <div class="article-form">
      <div>
        <input v-model="articleData.title" class="article-form-title-input" type="text" placeholder="Enter aricle name here:"/>
      </div>
      <div>
        <textarea v-model="articleData.description" class="article-form-description-input" placeholder="Description"></textarea>
      </div>
      <div>
        <textarea v-model="articleData.text" class="article-form-text-input" placeholder="Enter text here"></textarea>
      </div>
      <div>
        <button :disabled="!isAuthorized()" v-on:click="save" class="article-form-save article-form-buttons">Save</button>
      </div>
      <div>
        <button v-on:click="undo" class="article-form-undo article-form-buttons">Undo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleForm",
  props: [],
  created() {
    if (this.$route.params.id) {
      this.$store.dispatch("loadSeparateArticle", {
        id: this.$route.params.id
      });
    } else {
      this.$store.dispatch("clearCurrentArticle");
    }
  },
  computed: {
    userToken: function() {
      return this.$store.getters.userToken;
    },
    articleData: {
      get() {
        return this.$store.getters.articleData;
      },
      set(value) {
        this.$store.commit("updateArticleDataFromForm", value);
      }
    }
  },
  methods: {
    save() {
      if (this.$route.params.id) {
        this.$store.dispatch("updateArticle", this.articleData);
      } else {
        this.$store.dispatch("addArticle", {
          title: this.articleData.title,
          text: this.articleData.text,
          description: this.articleData.description,
          userToken: this.userToken
        });
      }
    },
    undo() {
      this.$store.commit("updateArticleDataFromForm", {});
    },
    isAuthorized() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style lang="scss" scoped>
.article-form-container {
  .main-page-link {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  .article-form {
    .article-form-title-input {
      min-width: 300px;
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
    }
    .article-form-text-input {
      margin: 10px;
      min-width: 300px;
      width: 70%;
      font-size: 16px;
      resize: none;
      height: 300px;
    }
    .article-form-save {
      margin: 10px;
    }
    .article-form-description-input {
      margin: 10px;
      min-width: 240px;
      width: 75%;
      padding: 10px;
      font-size: 16px;
    }
    .article-form-undo {
    }

    .article-form-buttons {
      height: 30px;
      width: 200px;
      font-size: 20px;
    }
  }
}
</style>
