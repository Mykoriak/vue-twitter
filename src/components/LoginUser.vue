<template>
  <div class="container">
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />
    </div>
    <div>
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button @click="loginUser">Войти</button>
    <router-link tag="button" to="/register">Регистрация</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginUser extends Vue {
  email = "";
  password = "";

  loginUser() {
    const data = {
      email: this.email,
      password: this.password
    };
    this.$store.dispatch("loginUser", data);
    this.$router.push("/");
  }
}
</script>

<style scoped>
.container {
  border: 1px solid #000;
  padding: 20px;
}
</style>
