<template>
<div>
  <div>
   <input type="text" v-model="newLogin" name="login" id="login">
   <input type="password" v-model="newPassword" name="password" id="password" placeholder="password">
   <input type="password" v-model="newPasswordConfirmation" name="password" id="password" placeholder="repeat password">
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
    return this.$store.getters.registrationData;
  },
  methods: {
    isEmailValid(email) {
      const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    },

    isPasswordValid(password) {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
      return password.lengh() >= 4 && passwordPattern.test(password);
    },

    validateForm() {
      if (this.isEmailValid(this.newLogin)) {
        if (
          this.isPasswordValid(this.newPassword) &&
          this.isPasswordValid(this.newPasswordConfirmation)
        ) {
          if (this.newPassword === this.newPasswordConfirmation) {
            this.registerNewUser();
          }
        }
      }
      return false;
    },

    registerNewUser() {
      this.$store.dispatch("registerNewUser", {
        newLogin: this.newLogin,
        newPassword: this.newPassword,
        newPasswordConfirmation: newPasswordConfirmation
      });
    }
  }
};
</script>

<style scoped>
</style>
