<script setup></script>

<template>
  <div class="col-sm-8 col-md-6 col-12 items-center flex">
    <q-form class="q-gutter-md full-width">
      <q-input filled v-model="password" label="Nombre" />
      <q-input v-model="p" filled label="Apellido" color="primary"></q-input>
      <q-input v-model="p" filled label="Correo" color="primary"></q-input>
      <q-input v-model="p" filled label="Contraseña" color="primary"></q-input>
      <q-input
        v-model="p"
        filled
        label="Confirmar contraseña"
        color="primary"
      ></q-input>
    </q-form>
  </div>
  <div class="justify-center flex full-width q-mt-lg q-gutter-md">
    <q-btn color="primary">
      <q-icon name="save" />
      <span class="q-ml-xs">Registrar</span>
    </q-btn>
    <q-btn color="red">
      <q-icon name="arrow_back" />
      <span class="q-ml-xs">Volver</span>
    </q-btn>
  </div>
</template>
