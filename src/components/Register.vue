<template>
  <div class="registration-container">
    <div class="registration-form-container" v-if="!registrationSuccess()">
      <div class="registration-form">
        <div>
          <span class="form-label">Enter your login</span>
          <input class="registration-form-login registration-form-common" type="text" v-model="newLogin" name="login" id="newLogin">
        </div>
        <div>
          <span class="form-label">Enter your password</span>          
          <input class="registration-form-password registration-form-common" type="password" v-model="newPassword" name="newPassword" id="newPassword" placeholder="password">
        </div>
        <div>
          <span class="form-label">Confirm your password</span>          
          <input class="registration-form-password-confirmation registration-form-common" type="password" v-model="newPasswordConfirmation" name="newPasswordConfirmation" id="newPasswordConfirmation" placeholder="repeat password">
        </div>
        <div>
          <button class="registration-form-register-button registration-form-common" v-on:click="registerNewUser">Register</button>
        </div>
      </div>
    </div>
    <div class="registration-notification-container">
      <span class="registration-success" v-if="registrationFail() && !registrationSuccess()">
        Registration error! - {{registrationFail()}}
      </span>
      <span class="registration-fail" v-if="!registrationFail() && registrationSuccess()">
        Registration completed!
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

<style lang="scss" scoped>
.registration-container {
  .registration-form-container {
    display: block;
    width: 100%;

    .registration-form {
      margin: auto;

      .form-label {
        margin: 0 10px;
        font-size: 1.5em;
      }

      .registration-form-common {
        height: 2em;
        width: 20em;
        font-size: 1.5em;
        display: inline-block;
        margin: 4px 10px;
      }
      .registration-form-login {
      }
      .registration-form-password {
      }
      .registration-form-password-confirmation {
      }
      .registration-form-register-button {
      }
    }
  }

  .registration-notification-container {
    .registration-fail {
      color: red;
    }
    .registration-success {
      color: red;
    }
  }
}
</style>

