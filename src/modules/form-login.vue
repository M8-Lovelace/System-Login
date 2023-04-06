<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md">
      <q-input filled v-model="mail" label="Correo electronico *" lazy-rules />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Contraseña *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Ingrese su contraseña',
        ]"
      />

      <div>
        <q-btn
          label="Iniciar Sesión"
          @click="onSubmit($event)"
          color="primary"
        />
        <q-btn
          label="Limpiar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ctrlUser } from "@/stores/localStorage";

const $q = useQuasar();
const storage = ctrlUser();
const router = useRouter();

let mail = ref();
let password = ref();

function isInputsValidate() {
  return false;
}

function onSubmit(e) {
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
    const newSesion = {
      mail: mail.value,
      password: password.value,
      // rol: rol.value,
    };

    storage.signIn(newSesion);

    router.push({
      name: "home",
    });
  }
}
</script>
