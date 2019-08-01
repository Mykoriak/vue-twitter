import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import posts from "./posts";
import comments from "./comments";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    posts,
    comments
  }
});
