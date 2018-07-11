<template>
<div>
  <div v-if="!isAuthorized()" class="login-form-wrapper">
    <input type="text" v-model="login" class="login-form-input" name="login" id="login" placeholder="Your login">
    <input type="password" v-model="password" class="login-form-input" name="password" id="password" placeholder="Your password">
    <div class="btn-wrapper">
      <button v-on:click="logOn" class="login-btn">log in</button>
      <button v-if="!isAuthorized()" v-on:click="registerNewUser" class="register-btn">register</button>
    </div>
  </div>
  <div>
    <span v-if="!isAuthorized() && authError">
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
      authError: "",
      password: "",
      login: ""
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
    },
    isAuthorized() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style scoped>
.login-btn{
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
  border: none;
}
.login-btn:hover{ 
  background: rgb(53, 167, 110); 
}
.login-btn:active{ 
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset; 
}
.register-btn{
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: #FFE200;
  box-shadow: 0 -3px rgb(255,169,0) inset;
  transition: 0.2s;
  border: none;
}
.register-btn:hover{ 
  background: #FFA900; 
}
.register-btn:active{ 
  background: #FF9400;
  box-shadow: 0 3px rgb(255,148,0) inset; 
}
.login-form-input{
  display: block;
  margin: 10px auto;
  height:20px;
  padding:5px 8px;
  border:1px solid #aaa;
  box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
  border-radius:2px;
  width: 100%;
}
.login-form-input:focus{
  background: #fff;
  border:1px solid #555;
  box-shadow: 0 0 3px #aaa;
}
.login-form-wrapper{
  width: 250px;
  padding: 25px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}
.btn-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
