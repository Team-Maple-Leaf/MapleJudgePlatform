<template>
  <v-app-bar color="bg-amber-darken-1">
    <v-hover>
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </v-hover>

    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn flat>문제보기</v-btn>
    <v-btn flat>결과</v-btn>

    <router-link v-if="isDevMode" to="/problemset">Problem Set</router-link>
    <router-link v-if="isDevMode" to="/problem/1000">Detail</router-link>
    <router-link v-if="isDevMode" to="/submit/1000">Submit</router-link>
    <router-link v-if="isDevMode" to="/result/1000">Result</router-link>
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
