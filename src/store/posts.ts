import axios from "axios";
import { ActionTree } from "vuex";
import { Posts, Post } from "@/types/Post";

export default {
  state: {
    posts: []
  },
  getters: {
    postList(state: { posts: Posts }) {
      return state.posts.reverse();
    },
    postCount(state: { posts: Posts }) {
      return state.posts.length;
    }
  },
  mutations: {
    setPosts(state: { posts: Posts }, payload: Posts) {
      state.posts = payload;
    },
    addPost(state: { posts: Posts }, payload: Post) {
      state.posts.push(payload);
    }
  },
  actions: {
    loadPosts({ commit }, payload = "") {
      const urlParams = payload !== "" ? "?userName=" + payload : "";
      axios
        .get("http://localhost:3004/posts" + urlParams)
        .then(responce => {
          if (responce.data.length > 0) {
            commit("setPosts", responce.data);
          }
        })
        .catch(error => console.log(error));
    },
    addPost({ commit }, payload: Post) {
      axios
        .post("http://localhost:3004/posts", payload)
        .then(responce => {
          commit("addPost", payload);
        })
        .catch(error => console.log(error));
    },
    like({ commit }, payload: Post) {
      payload.likes += 1;
      axios
        .put("http://localhost:3004/posts/" + payload.id, payload)
        .then(responce => {})
        .catch(error => console.log(error));
    }
  } as ActionTree<any, any>
};
