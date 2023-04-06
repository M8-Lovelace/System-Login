<template>
  <div class="row justify-center items-center">
    <div class="column items-center form-container">
      <img src="../assets/image.png" alt="user" width="120" />
      <Form></Form>
    </div>
  </div>
</template>

<script setup>
import Form from "../modules/form-login.vue";
</script>

<style>
.form-container {
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
}
</style>
