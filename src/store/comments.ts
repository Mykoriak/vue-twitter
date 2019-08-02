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
        .then(response => {
          commit("addComment", payload);
        })
        .catch(error => console.log(error));
    },
    async loadComments({ commit }, payload) {
      try {
        const response = await axios.get(
          "http://localhost:3004/comments?postId=" + payload
        );
        if (response.data.length > 0) {
          commit("setComments", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  } as ActionTree<any, any>
};
