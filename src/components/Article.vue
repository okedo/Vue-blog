<template>
  <div>
    {{text}}
  </div>
</template>

<script>
export default {
  name: "Article",
  template: "./article.component.html",
  data() {
    let data = { text: "text" };
    return data;
  }
};
</script>

<style lang="scss" scoped>
</style>
