<template>
  <div class="article-form-container">
    <div class="article-form">
      <div>
        <input v-model="title" class="article-form-title-input" type="text" placeholder="Enter aricle name here:"/>
      </div>
      <div>
        <textarea v-model="description" class="article-form-description-input" placeholder="Description"></textarea>
      </div>
      <div>
        <textarea v-model="text" class="article-form-text-input" placeholder="Enter text here"></textarea>
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
      description: "",
    };
  },
  mounted() {
    this.data = {};
  },
  computed: {
    userId: function(){
      return this.$store.getters.userData.userId;
    }
  },
  methods: {
    save() {
      this.$store.dispatch("addArticle", {
        title: this.title,
        text: this.text,
        userId: this.userId,
        description: this.description
      });
    },
    undo() {
      this.title = "";
      this.text = "";
      this.description = "";
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
