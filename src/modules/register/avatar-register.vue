<script setup>
import { ref } from "vue";

const avatarSelected = ref("./images/avatar1.png");
</script>

<template>
  <div class="col-12 col-sm-4 col-md-6 justify-center items-center flex">
    <div class="row justify-center">
      <q-avatar class="bg-grey-2">
        <q-img :src="avatarSelected" />
      </q-avatar>

      <q-list class="justify-center flex col-12 q-mt-lg q-mb-md">
        <q-item class="q-pa-none" v-for="(avatar, index) in 5" :key="index">
          <q-avatar
            class="q-mx-xs"
            @click="avatarSelected = '/images/avatar' + (index + 1) + '.png'"
          >
            <q-img :src="'/images/avatar' + (index + 1) + '.png'" />
          </q-avatar>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<style scoped>
.q-avatar {
  width: 200px;
  height: 200px;
}

.q-icon {
  font-size: 200px;
}
.q-item {
  width: 20%;
  cursor: pointer;
}
.q-item .q-avatar {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.q-item .q-avatar .q-icon {
  font-size: 100%;
}
</style>
