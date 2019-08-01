<template>
  <div class="main">
    <button @click="showHideComments">Comments</button>
    <div v-if="commentsSwitch">
      <CreateComment :postId="postId" />
      <hr />
      <ShowComments :postId="postId" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CreateComment from "@/components/CreateComment.vue";
import ShowComments from "@/components/ShowComments.vue";

@Component({
  components: {
    CreateComment,
    ShowComments
  }
})
export default class Comments extends Vue {
  @Prop() private postId!: number;
  commentsSwitch = false;

  showHideComments() {
    this.commentsSwitch = !this.commentsSwitch;
  }
}
</script>

<style scoped>
.main {
  padding-left: 35%;
}
</style>
