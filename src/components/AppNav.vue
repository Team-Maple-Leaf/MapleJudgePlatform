<template>
  <v-app-bar color="bg-amber-darken-1">
    <v-hover>
      <v-img class="bg-white" :aspect-ratio="1" :src="logo"></v-img>
    </v-hover>

    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    logo: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
