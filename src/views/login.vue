<template>
  <div class="container row justify-center items-center">
    <div class="column items-center form-container">
      <div>
        <img src="../assets/tech.png" alt="" width="300" />
      </div>
      <img src="../assets/image.png" alt="user" width="120" />
      <Form></Form>
    </div>
  </div>
</template>

<script setup>
import Form from "../modules/login/form-login.vue";
</script>

<style scoped>
.container {
  height: 100vh !important;
  background-color: #f5f5f5;
}
.form-container {
  width: 700px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
}
</style>
