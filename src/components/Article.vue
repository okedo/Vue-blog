<template>
<div>
  <div class="article-container">
    <img class="preview-image" src="https://secure.i.telegraph.co.uk/multimedia/archive/03600/potd-squirrels_3600130k.jpg"/>
    <div>
      <router-link :to=getUrl() class="article-title">
        {{article.title}}
      </router-link>
      <div>
        {{article.description}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  methods: {
    getUrl() {
      return "/article/" + this.article._id;
    }
  }
};
</script>

<style lang="scss" scoped>
.article-container {
  padding: 20px 10px 20px 10px;
  margin: 10px 10%;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  .preview-image {
    max-width: 75%;
  }

  .article-title {
    text-decoration: none;
    font-size: 24px;
    font-family: Arial;
    color: #000000;
    padding: 20px 0 10px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
