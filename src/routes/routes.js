import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/login.vue";
import Home from "../views/home.vue";
import Register from "../views/register.vue";
import Profile from "../views/profile.vue";

const checkAuth = async (to, from, next) => {
  const isAuthenticated = await JSON.parse(localStorage.getItem("user"));
  console.log("isAuthenticated", isAuthenticated);

  if (isAuthenticated && isAuthenticated.email && isAuthenticated.rol) {
    next();
  } else {
    next("/");
  }
}



export const routes = [
  {
    name: "login",
    path: "/",
    component: Login,
    
  },
  {
    name: "home",
    path: "/home",
    component: Home,
    beforeEnter: checkAuth,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    name: "profile",
    path: "/profile",
    component: Profile,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
