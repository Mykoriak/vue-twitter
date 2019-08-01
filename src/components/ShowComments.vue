<template>
  <div>
    <div
      class="comment"
      v-for="(comment, index) in computedComments"
      :key="index"
    >
      <h2>{{ comment.userName }}:</h2>
      <p>{{ comment.commentText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
import { Comment } from "@/types/Comment";

@Component
export default class ShowComments extends Vue {
  @Prop() private postId?: number;

  get computedComments() {
    return this.$store.getters.commentList.filter(
      (comment: Comment) => comment.postId === this.postId
    );
  }
}
</script>

<style scoped>
.comment {
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
p {
  white-space: pre;
}
</style>
