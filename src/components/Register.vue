<template>
<div>
  <div v-if="!registrationSuccess()">
   <input type="text" v-model="newLogin" name="login" id="newLogin">
   <input type="password" v-model="newPassword" name="newPassword" id="newPassword" placeholder="password">
   <input type="password" v-model="newPasswordConfirmation" name="newPasswordConfirmation" id="newPasswordConfirmation" placeholder="repeat password">
   <button v-on:click="registerNewUser">register</button>
  </div>
  <div>
    <span v-if="registrationFail()">
      Registration error! - {{registrationFail()}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      newLogin: "",
      newPassword: "",
      newPasswordConfirmation: ""
    };
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
    },

    registerNewUser() {
      this.$store.dispatch("registerNewUser", {
        login: this.newLogin,
        password: this.newPassword
      });
    },
    registrationSuccess() {
      return this.$store.getters.registrationOk;
    },
    registrationFail() {
      return this.$store.getters.registrationError;
    }
  }
};
</script>

<style scoped>
</style>
