<template>
  <div>
    <p>Привет, {{ userName }}</p>
    <textarea
      placeholder="Что происходит?"
      v-model="postText"
      v-validate="'required|max:200'"
      name="tweet"
    ></textarea>
    <br />
    <span>{{ errors.first("tweet") }}</span>
    <br />
    <button @click="createPost">Твитнуть</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class CreatePost extends Vue {
  postText = "";

  get userName() {
    return this.$store.getters.userName;
  }

  createPost() {
    this.$validator.validate().then(result => {
      if (result) {
        const user = this.$store.getters.getUserInfo;
        const post = {
          postText: this.postText,
          likes: 0,
          userId: user.id,
          userName: user.nickname
        };
        this.$store.dispatch("addPost", post);
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
  width: 50%;
  height: 100px;
}

span {
  color: red;
  background-color: #fa8b6f;
  border-color: #c50700;
}
</style>
