<script setup>
import { ref } from "vue";

//components
import Avatar from "../modules/register/avatar-register.vue";
import FormRegister from "../modules/register/form-register.vue";

const avatarSelected = ref("/images/avatar1.png");

const changeAvatar = (avatar) => {
  avatarSelected.value = avatar;
};
</script>

<template>
  <q-page class="justify-center flex row items-center flex overflow-auto">
    <div class="col-6 form-container row">
      <span class="text-center col-12 text-h4 q-mb-md">Registro</span>
      <Avatar :avatarSelected="avatarSelected" :changeAvatar="changeAvatar" />
      <FormRegister
        :avatarSelected="avatarSelected"
        :changeAvatar="changeAvatar"
      />
    </div>
  </q-page>
</template>

<style scoped>
.form-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  height: 500px;
  min-width: 750px !important;
  max-width: 750px !important;
}

@media screen and (max-width: 768px) {
  .form-container {
    min-width: 100% !important;
    max-width: 100% !important;
    overflow-y: auto;
  }
}
</style>
