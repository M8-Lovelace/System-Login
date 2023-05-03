<template>
  <q-layout class="layout">
    <Header v-if="routeName != 'login'"></Header>
    <div class="row">
      <Sidebar class="col-2" v-if="menu.menuIsOpen == true"></Sidebar>
      <q-page-container>
        <router-view
          v-bind:style="routerStyle"
          class="router-view"
        ></router-view>
      </q-page-container>
    </div>
    <LogOut class="out" v-if="routeName != 'login'"></LogOut>
    <Footer v-if="routeName != 'login'"></Footer>
  </q-layout>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../modules/Header/Header.vue";
import Footer from "../modules/Footer/Footer.vue";
import Sidebar from "../modules/Sidebar/Sidebar.vue";
import LogOut from "../modules/Log-out/Log-out.vue";
import { menuState } from "@/stores/menu";

const menu = menuState();

const routeName = computed(() => {
  return useRoute().name;
});

const routerStyle = computed(() => {
  if (menu.menuIsOpen == true) {
    return "width: 83vw; height: calc(100vh - 100px); overflow: hidden;";
  } else {
    return "width: 100vw; height: calc(100vh - 100px); overflow: hidden;";
  }
});
</script>

<style scoped>
.layout {
  position: relative;
}

.out {
  position: absolute;
  right: 1.5%;
  top: calc(100vh - 130px);
}
</style>
