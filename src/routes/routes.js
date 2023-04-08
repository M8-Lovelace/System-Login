import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/login.vue";
import Home from "../views/home.vue";
import Register from "../views/register.vue";
import Profile from "../views/profile.vue";

export const routes = [
  { name: "login", path: "/", component: Login },
  { name: "home", path: "/home", component: Home },
  { name: "register", path: "/register", component: Register },
  { name: "profile", path: "/profile", component: Profile },
  // { path: '/:pathMatch(.*)*', component: PageNotFound},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
