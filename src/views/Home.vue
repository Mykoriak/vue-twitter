<template>
  <div class="home">
    <CreatePost />
    <hr />
    <ShowPosts />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreatePost from "@/components/CreatePost.vue"; // @ is an alias to /src
import ShowPosts from "@/components/ShowPosts.vue";

@Component({
  components: {
    CreatePost,
    ShowPosts
  }
})
export default class Home extends Vue {}
</script>
