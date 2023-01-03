<template>
  <v-app-bar color="bg-amber-darken-1">
    <v-hover>
      <router-link to="/">
        <img
          :src="logo"
          width="40"
          height="35"
          class="align-center"
          style="margin-left: 10px"
        />
      </router-link>
    </v-hover>

    <v-app-bar-title style="margin-left: 5px">{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn flat to="/problemset"> 문제보기 </v-btn>
    <v-btn flat to="/result"> 결과 </v-btn>
    <v-btn flat to="/signin" v-if="showLogin"> 로그인 </v-btn>
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
            <v-btn rounded variant="text" @click="handleSignOut">
              Logout
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import type { userDetail } from "@/structs/userDetail";
import type { Emitter, EventType } from "mitt";
import { injectStrict } from "@/utils/injecter";
import { googleLogout } from "vue3-google-login";
import { computed, type PropType } from "vue";

const props = defineProps({
  title: String,
  logo: String,
  user: {
    type: Object as PropType<userDetail>,
    required: true,
  },
});

const showLogin = computed(() => !props.user.isValid());
const emitter: Emitter<Record<EventType, any>> = injectStrict("emitter");

const handleSignOut = () => {
  googleLogout();
  emitter.emit("onUserChanged", null);
};
</script>

<style scoped></style>
