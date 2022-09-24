<template>
  <v-app>
    <app-nav title="단풍이파리" :logo="logoPath"></app-nav>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <app-footer team-name="Team - Maple-Leaf"></app-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppNav from "./components/AppNav.vue";

const logoPath = ref("");

watchEffect(async () => {
  logoPath.value = (await import("@/assets/logo.png")).default;
});
</script>

<style scoped></style>
