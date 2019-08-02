import axios from "axios";
import { ActionTree } from "vuex";
import { User } from "@/types/User";

const user = localStorage.getItem("user");

export default {
  state: {
    loggedIn: user ? true : false,
    info: user ? JSON.parse(user) : null
  },
  getters: {
    getUserInfo(state: User) {
      return state.info;
    },
    userName(state: User) {
      if (state.info) {
        return state.info.nickname;
      }
      return state;
    },
    getLoggedIn(state: User) {
      return state.loggedIn;
    }
  },
  mutations: {
    setUser(state: any, payload: any) {
      state.loggedIn = true;
      state.info = payload;
    },
    logOut(state: User) {
      state.loggedIn = false;
      state.info = null;
    }
  },
  actions: {
    loginUser({ commit }, payload) {
      axios
        .get("http://localhost:3004/users?email=" + payload.email)
        .then(response => {
          if (response.data.length > 0) {
            if (response.data[0].password === payload.password) {
              const user = {
                email: response.data[0].email,
                id: response.data[0].id,
                nickname: response.data[0].nickname,
                password: response.data[0].password
              };
              commit("setUser", user);
              localStorage.setItem("user", JSON.stringify(user));
            } else {
              console.log("Incorrect password");
            }
          } else {
            console.log("User does not exist");
          }
        })
        .catch(error => console.log(error));
    }
  } as ActionTree<any, any>
};
