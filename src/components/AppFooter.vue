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
      {{ new Date().getFullYear() }} — <strong>{{ teamName }}</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
export default {
  props: {
    teamName: String,
  },
  setup() {
    const icons: string[] = ["mdi-github", "mdi-email"];

    return { icons };
  },
};
</script>

<style scoped></style>
