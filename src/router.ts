import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresLogin: true }
    },
    {
      path: "/profile",
      name: "Profile",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile.vue"),
      meta: { requiresLogin: true }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue"),
      beforeEnter(to, from, next) {
        const loggedIn = localStorage.getItem("user");
        if (loggedIn) {
          next("/");
        } else {
          next();
        }
      }
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./views/Register.vue"),
      beforeEnter(to, from, next) {
        const loggedIn = localStorage.getItem("user");
        if (loggedIn) {
          next("/");
        } else {
          next();
        }
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some(record => record.meta.requiresLogin) && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
