<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="toggle()" />
      <q-space></q-space>
      <q-btn flat round dense icon="search" class="q-mr-xs" />
      <q-btn flat round dense icon="group_add" to="/register" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { menuState } from "@/stores/menu";

const menu = menuState();

function toggle() {
  menu.toggleMenu();
}
</script>
