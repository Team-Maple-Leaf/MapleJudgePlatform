<template>
  <v-app>
    <app-nav
      title="단풍이파리"
      :logo="logoPath"
      v-model:user="user"
      @on-logout="onLogout"
    ></app-nav>

    <v-main>
      <v-container fill-height fluid>
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>

    <app-footer team-name="Team - Maple-Leaf"></app-footer>
  </v-app>
</template>

<script setup lang="ts">
import type { Emitter, EventType } from "mitt";
import { ref, shallowRef, watchEffect } from "vue";
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppNav from "./components/AppNav.vue";
import { UserInfo } from "./UserInfo";
import { injectStrict } from "./utils/injecter";

const logoPath = ref("");
const user = shallowRef(UserInfo.default());

const emitter: Emitter<Record<EventType, any>> = injectStrict("emitter");

const onLogout = () => {
  user.value = UserInfo.default();
};

watchEffect(async () => {
  logoPath.value = (await import("@/assets/logo.png")).default;
});

emitter.on("onUserChanged", (info: UserInfo) => {
  user.value = info;
});
</script>

<style scoped></style>
