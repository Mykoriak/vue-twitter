<template>
  <div>
    <div class="post" v-for="(post, index) in computedPosts" :key="index">
      <h2>{{ post.userName }}:</h2>
      <p>{{ post.postText }}</p>
      <button>Comment</button>
      {{ post.likes }}<button @click="like(post)">Like</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
import { Post } from "@/types/Post";

@Component
export default class ShowPosts extends Vue {
  @Prop() private username?: string;

  get computedPosts() {
    return this.$store.getters.postList;
  }

  mounted() {
    this.$store.dispatch("loadPosts", this.username || "");
  }

  like(post: Post) {
    this.$store.dispatch("like", post);
  }
}
</script>

<style scoped>
.post {
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
</style>
