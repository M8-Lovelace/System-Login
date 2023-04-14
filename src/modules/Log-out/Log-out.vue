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
import { ctrlUser } from "@/stores/firebase";
import { useQuasar } from "quasar";

const $q = useQuasar();
const storage = ctrlUser();
const router = useRouter();

const notify = (message, color) => {
  $q.notify({
    message: message,
    color: color,
    position: "top",
    timeout: 2000,
  });
};

async function logOut() {
  await storage.signOutUser().then(() => {
    notify("Vuelve pronto", "positive");
    router.push({
    name: "login",
  });
  }).catch((error) => {
    notify('Error al cerrar sesión', 'negative');
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
