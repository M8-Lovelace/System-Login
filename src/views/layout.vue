<template>
  <q-layout >
    <Header v-if="routeName != 'login'"></Header>
    <div class="row">
      <Sidebar class="col-2" v-if="menu.menuIsOpen  == true"></Sidebar>
      <router-view v-bind:style="routerStyle" class="router-view"></router-view>
    </div>
    <Footer v-if="routeName != 'login'"></Footer>
  </q-layout>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../modules/header.vue";
import Footer from "../modules/footer.vue";
import Sidebar from "../modules/sidebar.vue";
import { menuState } from "@/stores/menu";

const menu = menuState()

const routeName = computed(() => {
  return useRoute().name;
});

const routerStyle = computed(() =>{
  if(menu.menuIsOpen == true){
    return "width: 83vw; height: calc(100vh - 100px); overflow: hidden;"
  } else{
    return "width: 100vw; height: calc(100vh - 100px); overflow: hidden;"
  }
});

</script>

<style scoped>
</style>
