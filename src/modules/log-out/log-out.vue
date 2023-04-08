<template>
  <div class="q-pa-md posicion">
    <q-btn
      flat
      round
      dense
      icon="logout"
      class="logout"
      @click="logOut()"
    ></q-btn>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logOut() {
  router.push({
    name: "login",
  });
}
</script>

<style>
.posicion {
  color: #fff;
  background-color: #1976d2;
  border-color: #1976d2;
  border-radius: 50%;
}
</style>
