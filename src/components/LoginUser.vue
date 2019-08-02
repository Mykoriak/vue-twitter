<template>
  <div class="container">
    <div>
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        v-model="email"
        v-validate="'required|email'"
        name="email"
      />
      <br />
      <span>{{ errors.first("email") }}</span>
    </div>
    <div>
      <label for="password">Пароль</label>
      <input
        v-validate="'required|min:3'"
        type="password"
        id="password"
        v-model="password"
        name="password"
      />
      <br />
      <span>{{ errors.first("password") }}</span>
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
    this.$validator.validate().then(result => {
      if (result) {
        const data = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("loginUser", data);
        this.$router.push("/");
        return;
      }

      alert("Correct them errors!");
    });
  }
}
</script>

<style scoped>
.container {
  border: 1px solid #000;
  padding: 20px;
}

input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}
</style>
