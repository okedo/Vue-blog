<template>
  <div class="article-form-container">
    <div class="article-form">
      <div>
        <input v-model="title" class="article-form-title-input" type="text" placeholder="Enter aricle name here:"/>
      </div>
      <div>
        <textarea v-model="text" class="article-form-text-input" placeholder=""></textarea>
      </div>
      <div>
        <button v-on:click="save" class="article-form-save article-form-buttons">Save</button>
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
  data() {
    return {
      title: "",
      text: "",
      userId: this.$store.getters.userData.userId
    };
  },
  mounted() {
    this.data = {};
  },
  methods: {
    save() {
      this.$store.dispatch("addArticle", {
        title: this.title,
        text: this.text,
        userId: this.userId
      });
    },
    undo() {
      this.title = "";
      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.article-form-container {
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
