<template>
  <div class="container">
    <div>
      <label for="nickname">Nick-нейм</label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />
    </div>
    <div>
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button @click="createUser">Зарегистрироваться</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class RegisterUser extends Vue {
  email = "";
  password = "";
  nickname = "";

  createUser() {
    const user = {
      nickname: this.nickname,
      email: this.email,
      password: this.password
    };

    axios
      .post("http://localhost:3004/users", user)
      .then(response => {
        this.$router.push("/login");
      })
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>
.container {
  border: 1px solid #000;
  padding: 20px;
}
</style>
