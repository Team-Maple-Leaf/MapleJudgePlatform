<template>
  <v-row align="center" justify="center">
    <v-img class="image" width="300px" height="300px" :src="imageUrl"></v-img>
  </v-row>

  <v-row align="center" justify="center">
    <h1 class="header">Internal Error</h1>
  </v-row>

  <v-row v-if="envMgr.isDevMode" align="center" justify="center">
    <h2 class="body">{{ status }}</h2>
  </v-row>
</template>

<script setup lang="ts">
import imageUrl from "@/assets/error.png";
import envMgr from "@/env";

defineProps({
  status: Object,
});
</script>

<style>
.image {
  margin: 15px;
}

.header {
  text-align: center;
  margin: 15px;
  color: #8366dd;
}

.body {
  text-align: center;
  margin: 15px;
  color: #9c84e4;
}
</style>
