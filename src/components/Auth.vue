<template>
  <div>
   <input type="text" v-model="login" name="login" id="login">
   <input type="password" v-model="password" name="password" id="password">
   <button v-on:click="logOn">log in</button>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return { login: "", password: "" };
  },
  methods: {
    logOn() {
      this.$store.dispatch("logOn", {
        login: this.login,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>
