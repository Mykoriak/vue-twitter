import { ActionTree } from "vuex";
import axios from "axios";
import { Comment, Comments } from "@/types/Comment";

export default {
  state: {
    comments: []
  },
  getters: {
    commentList(state: { comments: Comments }) {
      return state.comments.reverse();
    }
  },
  mutations: {
    addComment(state: { comments: Comments }, payload: Comment) {
      state.comments.push(payload);
    },
    setComments(state: { comments: Comments }, payload: Comments) {
      state.comments = payload;
    }
  },
  actions: {
    addComment({ commit }, payload: Comment) {
      axios
        .post("http://localhost:3004/comments", payload)
        .then(responce => {
          commit("addComment", payload);
        })
        .catch(error => console.log(error));
    },
    loadComments({ commit }) {
      axios
        .get("http://localhost:3004/comments")
        .then(responce => {
          if (responce.data.length > 0) {
            commit("setComments", responce.data);
          }
        })
        .catch(error => console.log(error));
    }
  } as ActionTree<any, any>
};
