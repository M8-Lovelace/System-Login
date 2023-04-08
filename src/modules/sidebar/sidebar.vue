<template>
  <div class="sidebar">
    <div v-for="(item, i) in paths">
      <RouterLink class="item" :to="item.path">
        <h5 class="name">{{ item.name }}</h5>
      </RouterLink>
      <q-separator />
    </div>
  </div>
</template>

<script setup>
const paths = [
  {
    name: "Home",
    path: "/home",
    rol: "user",
  },
  {
    name: "Perfil",
    path: "/profile",
    rol: "user",
  },
  {
    name: "Registrar",
    path: "/register",
    rol: "admin",
  },
];
</script>

<style scoped>
.sidebar {
  /* background-color: #f5f5f5; */
  background-color: #1976d2e8;
  margin-top: 50px;
  height: calc(100vh - 100px);
}

.item {
  margin: 10px;
  text-decoration: none;
  color: white;
}

.name {
  margin-left: 30px !important;
  margin: 0;
  color: white;
  font-size: 20px;
}
</style>
