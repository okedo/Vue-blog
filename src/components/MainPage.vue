<template>
  <div>
    <div>
      {{title}}
    </div>
    <Article></Article>
  </div>
</template>

<script>
import Article from "./Article.vue";

export default {
  name: "MainPage",
  components: {
    Article
  },
  data() {
    let data = { title: "Title" };
    return data;
  }
};
</script>

<style scoped>
</style>
