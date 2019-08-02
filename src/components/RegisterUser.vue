<template>
  <div class="container">
    <div>
      <label for="nickname">Nick-нейм</label>
      <input
        type="text"
        id="nickname"
        name="nickname"
        v-validate="'required|min:3'"
        v-model="nickname"
      />
      <br />
      <span>{{ errors.first("nickname") }}</span>
    </div>
    <div>
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        v-validate="'required|email'"
        v-model="email"
      />
      <br />
      <span>{{ errors.first("email") }}</span>
    </div>
    <div>
      <label for="password">Пароль</label>
      <input
        type="password"
        id="password"
        name="password"
        v-validate="'required|min:3'"
        v-model="password"
      />
      <br />
      <span>{{ errors.first("password") }}</span>
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
    this.$validator.validate().then(result => {
      if (result) {
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
