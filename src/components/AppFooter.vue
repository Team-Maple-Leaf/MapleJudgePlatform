<template>
  <v-footer class="bg-amber-darken-1 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <div>
      {{ year }} — <strong>{{ teamName }}</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons: string[] = ["mdi-github", "mdi-email"];
const year = new Date().getFullYear();

defineProps({
  teamName: String,
});
</script>

<style scoped></style>
