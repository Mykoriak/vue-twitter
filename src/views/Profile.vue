<template>
  <div class="profile">
    <h1>Профиль пользователя {{ userName }}</h1>
    <p>Твитов написано: {{ postsCount }}</p>
    <ShowPosts :username="userName" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ShowPosts from "@/components/ShowPosts.vue";

@Component({
  components: {
    ShowPosts
  }
})
export default class Profile extends Vue {
  get userName() {
    return this.$store.getters.userName;
  }
  get postsCount() {
    return this.$store.getters.postCount;
  }
}
</script>
