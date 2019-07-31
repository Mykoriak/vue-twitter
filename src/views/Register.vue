<template>
  <RegisterUser />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegisterUser from "@/components/RegisterUser.vue";

@Component({
  components: {
    RegisterUser
  }
})
export default class Register extends Vue {}
</script>
