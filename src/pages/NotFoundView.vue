<template>
  <div>
    <v-row align="center" justify="center">
      <v-img
        class="ml-auto"
        width="480px"
        height="480px"
        :src="imageUrl"
      ></v-img>
    </v-row>

    <v-row align="center" justify="center">
      <h1 class="header">Page Not Found</h1>
    </v-row>

    <v-row align="center" justify="center">
      <h2 class="body">주소가 올바른지 다시 확인해주세요</h2>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import imageUrl from "@/assets/404.png";
</script>

<style>
.header {
  margin: 15px;
  color: #8366dd;
}

.body {
  margin: 15px;
  color: #9c84e4;
}
</style>
