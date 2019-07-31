<template>
  <div id="app">
    <h1 id="header">Twitter</h1>
    <div id="container">
      <div id="nav">
        <div v-if="!LoggedIn">
          <router-link to="/login">Войти</router-link><br />
          <router-link to="/register">Регистрация</router-link><br />
        </div>
        <div v-else>
          <router-link to="/">Главная</router-link><br />
          <router-link to="/profile">Профиль</router-link><br />
          <button @click="logOut">Выйти</button>
        </div>
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {
  logOut() {
    localStorage.removeItem("user");
    this.$store.commit("logOut");
    this.$router.push("/login");
  }

  get LoggedIn() {
    return this.$store.getters.getLoggedIn;
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  color: rgb(29, 161, 242);
}

#container {
  display: flex;
}

#nav {
  width: 20%;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(29, 161, 242);
}

#content {
  width: 80%;
}
</style>
