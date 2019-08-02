<template>
  <div>
    <textarea
      placeholder="Добавить комментарий"
      v-model="commentText"
      v-validate="'required'"
      name="comment"
    ></textarea>
    <br />
    <span>{{ errors.first("comment") }}</span>
    <br />
    <button @click="createComment">Комментарий</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class CreateComment extends Vue {
  @Prop() private postId!: number;
  commentText = "";

  createComment() {
    this.$validator.validate().then(result => {
      if (result) {
        const user = this.$store.getters.getUserInfo;
        const comment = {
          commentText: this.commentText,
          userId: user.id,
          userName: user.nickname,
          postId: this.postId
        };
        this.$store.dispatch("addComment", comment);
        return;
      }
    });
  }
}
</script>

<style scoped>
button {
  color: #fff;
  background-color: rgb(29, 161, 242);
  font-size: 15px;
  padding-left: 1em;
  padding-right: 1em;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border: none;
}

textarea {
  width: 100%;
  height: 60px;
}
</style>
