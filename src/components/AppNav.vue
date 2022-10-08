<template>
  <v-app-bar color="bg-amber-darken-1">
    <v-hover>
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </v-hover>

    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn flat to="/problemset">문제보기</v-btn>
    <v-btn flat to="/result">결과</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  logo: String,
});
</script>

<style scoped></style>
