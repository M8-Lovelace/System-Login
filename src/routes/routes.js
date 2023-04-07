import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/login.vue";
import Home from "../views/home.vue";
import Register from "../views/register.vue";

export const routes= [
  { name: 'login', path: '/', component: Login},
  { name: 'home', path: '/home', component: Home},
  { name: 'registro', path: '/registro', component: Register},
  // { path: '/:pathMatch(.*)*', component: PageNotFound},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
