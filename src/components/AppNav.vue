<template>
  <v-app-bar color="bg-amber-darken-1">
    <v-hover>
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </v-hover>

    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn flat to="/problemset"> 문제보기 </v-btn>
    <v-btn flat to="/result"> 결과 </v-btn>
    <v-btn flat to="/signin" v-if="user.isEmpty()"> 로그인 </v-btn>
    <v-menu v-else bottom min-width="200px" rounded offset-y>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar size="large">
            <v-img :src="user.picture" :alt="user.name"></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar>
              <v-img :src="user.picture" :alt="user.name"></v-img>
            </v-avatar>
            <h3>{{ user.name }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text" @click="onLogout"> Logout </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { UserInfo } from "@/UserInfo";
import { googleLogout } from "vue3-google-login";

const emit = defineEmits<{
  (e: "onLogout"): void;
}>();

const onLogout = () => {
  googleLogout();
  emit("onLogout");
};

defineProps({
  title: String,
  logo: String,
  user: UserInfo,
});
</script>

<style scoped></style>
