import { createWebHistory, createRouter } from "vue-router";
import { ctrlUser } from "@/stores/firebase";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Edit from "../views/EditUser.vue";
import Profile from "../views/Profile.vue";






const checkAuth = async (to, from, next) => {
  const storeCtrl = ctrlUser()
  const isAuthenticated = storeCtrl.userData
  if (isAuthenticated && isAuthenticated.id && isAuthenticated.token !== "") {
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
      const storeCtrl = ctrlUser()
      const isAuthenticated = storeCtrl.userData
      console.log(isAuthenticated)
      if (isAuthenticated && isAuthenticated.email && isAuthenticated.token) {
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
