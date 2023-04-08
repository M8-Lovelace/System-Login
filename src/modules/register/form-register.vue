<script setup>
import { ref, defineProps } from "vue";
import { useQuasar } from "quasar";

//state
import { ctrlUser } from "@/stores/localStorage";

const props = defineProps({
  avatarSelected: String,
  changeAvatar: Function,
});

const $q = useQuasar();
const storage = ctrlUser();

const formRegister = ref(null);
const name = ref("");
const email = ref("");
const pass1 = ref("");
const pass2 = ref("");
const rol = ref({ value: 1, label: "Operador" });
const options = [
  {
    value: 0,
    label: "Administrador",
  },
  {
    value: 1,
    label: "Operador",
  },
];
const showPass1 = ref(false);
const showPass2 = ref(false);

const resetValues = () => {
  name.value = "";
  email.value = "";
  pass1.value = "";
  pass2.value = "";
  rol.value = { value: 1, label: "Operador" };
  props.changeAvatar("./images/avatar1.png");

  formRegister.value.resetValidation();
};


const registerUser = async () => {
  const data = {
    name: (name.value).trim().toUpperCase(),
    email: (email.value).trim(),
    password: pass1.value.trim(),
    rol: rol.value.value,
    avatar : props.avatarSelected,
  };

  if(await storage.setUser(data)){
    $q.notify({
      message: "Usuario registrado correctamente",
      color: "green",
      position: "top",
      timeout: 2000,
    });
    resetValues();
    
  }else{
    $q.notify({
      message: "EL usuario ya existe",
      color: "red",
      position: "top",
      timeout: 2000,
    });
  }
};

</script>

<template>
  <div class="col-sm-8 col-md-6 col-12 items-center flex">
    <q-form
    ref="formRegister"
      class="full-width"
      @submit.prevent.stop="registerUser"
      id="form-register"
    >
      <q-input
        filled
        v-model="name"
        label="Nombre"
        lazy-rules
        :rules="[(val) => val.length > 0 || 'El nombre es requerido']"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        v-model="email"
        filled
        label="Correo"
        color="primary"
        lazy-rules
        :rules="[
          (val) =>
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val) ||
            'El correo no es válido',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input
        v-model="pass1"
        filled
        :type="showPass1 ? 'text' : 'password'"
        label="Contraseña"
        color="primary"
        lazy-rules
        :rules="[
          (val) =>
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/g.test(val) ||
            'La contraseña débil',
        ]"
      >
        <template v-slot:append>
          <q-icon
            name="visibility"
            class="cursor-pointer"
            @click="showPass1 = !showPass1"
          />
        </template>
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <q-input
        v-model="pass2"
        filled
        :type="showPass2 ? 'text' : 'password'"
        label="Confirmar contraseña"
        color="primary"
        lazy-rules
        :rules="[
          (val) => val.length > 0 || 'La contraseña es requerida',
          (val) => val === pass1 || 'Las contraseñas no coinciden',
        ]"
      >
        <template v-slot:append>
          <q-icon
            name="visibility"
            class="cursor-pointer"
            @click="showPass2 = !showPass2"
          />
        </template>
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <q-select
        filled
        v-model="rol"
        :options="options"
        label="Rol"
        options-dense
        lazy-rules
        :rules="[(val) => val !== undefined || 'El rol es requerido']"
      >
        <template v-slot:prepend>
          <q-icon name="supervisor_account" />
        </template>
      </q-select>
    </q-form>
  </div>
  <div class="justify-center flex full-width q-mt-lg q-gutter-md">
    <q-btn color="primary" type="submit" form="form-register">
      <q-icon name="save" />
      <span class="q-ml-xs">Registrar</span>
    </q-btn>
  </div>
</template>
