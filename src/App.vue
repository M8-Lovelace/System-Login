<template>
  <Layout></Layout>
</template>
<script setup>
import Layout from "./views/Layout.vue";
</script>

<style>
/* Set border box for all elements, delete padding and margin */
html,
body {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
</style>
