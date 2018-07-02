<template>
  <div>
    <input v-model="title" type="text" placeholder="Enter aricle name here:"/>
    <textarea v-model="text" placeholder=""></textarea>
    <button v-on:click="save">Save</button>
    <button>Undo</button>
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
      userId: this.$store.getters.userData.userName
    };
  },
  mounted() {
    this.data = {};
  },
  methods: {
    save() {
      this.$store.dispatch("addArticle", {
        id: this.userId,
        title: this.title,
        text: this.text
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
