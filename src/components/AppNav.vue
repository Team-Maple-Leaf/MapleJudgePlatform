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

<script lang="ts">
import envMgr from "@/env";
import { computed } from "vue";

export default {
  props: {
    title: String,
    logo: String,
  },
  setup() {
    const isDevMode = computed(() => envMgr.isDevMode);

    return { isDevMode };
  },
};
</script>

<style scoped></style>
