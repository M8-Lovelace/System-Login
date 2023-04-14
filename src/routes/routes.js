import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Edit from "../views/EditUser.vue";
import Profile from "../views/Profile.vue";

const checkAuth = async (to, from, next) => {
  const isAuthenticated = await JSON.parse(localStorage.getItem("user"));
  if (isAuthenticated && isAuthenticated.id && isAuthenticated.rol !== "") {
    next();
  } else {
    next("/");
  }
};

export const routes = [
  {
    name: "login",
    path: "/",
    component: Login,
    beforeEnter: async (to, from, next) => {
      const isAuthenticated = await JSON.parse(localStorage.getItem("user"));
      console.log(isAuthenticated);
      if (isAuthenticated && isAuthenticated.email && isAuthenticated.rol) {
        next("/home");
      } else {
        next();
      }
    },
  },
  {
    name: "home",
    path: "/home",
    component: Home,
    beforeEnter: checkAuth,
  },
  {
    name: "edit",
    path: "/edit",
    component: Edit,
    beforeEnter: checkAuth,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    beforeEnter: checkAuth,
  },

  {
    name: "profile",
    path: "/profile",
    component: Profile,
    beforeEnter: checkAuth,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
