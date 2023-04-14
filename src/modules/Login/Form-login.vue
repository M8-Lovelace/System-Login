<template>
  <div class="q-pa-md" style="max-width: 900px">
    <q-form class="q-gutter-md">
      <q-input filled v-model="mail" label="Correo electronico *" lazy-rules />

      <q-input filled type="password" v-model="password" label="Contraseña *" lazy-rules :rules="[
                  (val) => (val !== null && val !== '') || 'Ingrese su contraseña',
                ]" />

      <div v-if="!isLoading">
        <q-btn label="Iniciar Sesión" @click="onSubmit($event)" color="primary" />
        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" @click="cleanInputs()" />
      </div>
      <div v-else class="justify-center flex ">
        <q-spinner-ios color="primary" size="2.5em" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { menuState } from "@/stores/menu";
import { ctrlUser } from "@/stores/firebase";

const $q = useQuasar();
const storage = ctrlUser();
const router = useRouter();
const menu = menuState();

const isLoading = ref(false)
let mail = ref();
let password = ref();

onMounted(() => {
  if (menu.menuIsOpen) {
    menu.toggleMenu();
  }
});

function isInputsValidate() {
  return false;
}

function cleanInputs() {
  mail.value = "";
  password.value = "";
}

async function onSubmit(e) {
  e.preventDefault();
  if (isInputsValidate()) {
    $q.dialog({
      message: "Faltan campos por diligenciar u opciones por seleccionar",
      timeout: 2000,
      color: "orange",
      timeout: 2000,
      persistent: true,
    });
  } else {

    isLoading.value = true
    const newSesion = {
      email: mail.value,
      password: password.value,
    };

    if (await storage.signIn(newSesion)) {
      $q.notify({
        message: "Bienvenido",
        color: "green",
        position: "top",
        timeout: 2000,
      });
      router.replace({
        name: "home",
      });
    } else {
      $q.notify({
        message: "Usuario o contraseña incorrectos",
        color: "red",
        position: "top",
        timeout: 2000,
      });
    }
    isLoading.value = false
  }
}
</script>
