import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/login.vue";
import Home from "../views/home.vue";

export const routes= [
  { name: 'login', path: '/', component: Login},
  { name: 'home', path: '/home', component: Home},
  // { path: '/registro', component: registro},
  // { path: '/:pathMatch(.*)*', component: PageNotFound},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
