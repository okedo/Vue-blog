<template>
<div>
  <div>
   <input type="text" v-model="newLogin" name="login" id="login">
   <input type="password" v-model="newPassword" name="password" id="password">
   <button v-on:click="registerNewUser">register</button>
  </div>
  <div>
    <span v-if="registerError">
      {{registerError}}
    </span>
  </div>
</div>
</template>

<script>
import { router } from "../common/routerModule.js";
export default {
  name: "Register",
  data() {
    return {};
  },
  methods: {
    register() {
      this.$store.dispatch("registerNewUser", {
        login: this.login,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>
