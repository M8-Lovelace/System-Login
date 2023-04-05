import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/login.vue";

export const routes= [
  { path: '/', component: Login},
  // { path: '/perfil', component: perfil},
  // { path: '/registro', component: registro},
  // { path: '/:pathMatch(.*)*', component: PageNotFound},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
