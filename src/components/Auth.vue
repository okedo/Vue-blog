<template>
<div>
  <div v-if="isLogged !== true">
   <input type="text" v-model="login" name="login" id="login">
   <input type="password" v-model="password" name="password" id="password">
   <button v-on:click="logOn">log in</button>
   <button v-if="isLogged !== true" v-on:click="registerNewUser">register</button>
  </div>
  <div>
    <span v-if="!isLogged && authError">
      {{authError}}
    </span>
  </div>
</div>
</template>

<script>
import { router } from "../common/routerModule.js";
export default {
  name: "Auth",
  data() {
    return {
      isLogged: this.$store.getters.isLogged,
      authError: this.$store.getters.authError,
      password: this.$store.getters.userData.password,
      login: this.$store.getters.userData.login
    };
  },
  methods: {
    logOn() {
      this.$store.dispatch("logOn", {
        login: this.login,
        password: this.password
      });
    },
    registerNewUser() {
      router.push('/register');
    }
  }
};
</script>

<style scoped>
</style>
