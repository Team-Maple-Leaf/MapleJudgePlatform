<template>
  <v-app>
    <app-nav title="단풍이파리" :logo="logoPath" :user="user"></app-nav>

    <v-main>
      <suspense>
        <v-container fill-height fluid>
          <router-view :key="$route.path"></router-view>
        </v-container>
      </suspense>
    </v-main>

    <app-footer team-name="Team - Maple-Leaf"></app-footer>
  </v-app>
</template>

<script setup lang="ts">
import type { Emitter, EventType } from "mitt";
import type { UserInfo } from "./structs/UserInfo";
import { onMounted, reactive, ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppNav from "./components/AppNav.vue";
import { injectStrict } from "./utils/injecter";
import { userUserStore } from "./stores/user.store";
import { SignInRequest } from "./structs/SignInRequest";
import { userDetail } from "./structs/userDetail";

const logoPath = ref("");
const user = reactive(userDetail.Empty());
const userStore = userUserStore();
const emitter: Emitter<Record<EventType, any>> = injectStrict("emitter");

watchEffect(async () => {
  logoPath.value = (await import("@/assets/logo.png")).default;
});

onMounted(async () => {
  userStore.load();
  user.update(userStore.user);
});

emitter.on("onUserChanged", async (info: UserInfo) => {
  if (info !== null && info !== undefined) {
    await userStore.signIn(new SignInRequest(info));
  } else {
    await userStore.signOut();
  }

  user.update(userStore.user);
});
</script>

<style scoped></style>
