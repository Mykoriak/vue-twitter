<template>
  <LoginUser />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginUser from "@/components/LoginUser.vue";

@Component({
  components: {
    LoginUser
  }
})
export default class Login extends Vue {}
</script>
