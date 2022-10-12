<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-card class="mx-auto" width="460" prepend-icon="mdi-home">
        <template v-slot:title>로그인</template>

        <GoogleLogin
          :callback="handleCredentialResponseAsync"
          prompt
          auto-login
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { UserInfo } from "@/UserInfo";
import { injectStrict } from "@/utils/injecter";
import type { Emitter, EventType } from "mitt";
import { onMounted } from "vue";
import { decodeCredential } from "vue3-google-login";

const emitter: Emitter<Record<EventType, any>> = injectStrict("emitter");

const handleCredentialResponseAsync = async (response: any) => {
  const userData = new UserInfo(decodeCredential(response.credential));
  emitter.emit("onUserChanged", userData);
};

onMounted(() => {
  const recaptchaScript = document.createElement("script");

  recaptchaScript.setAttribute("src", "https://accounts.google.com/gsi/client");
  recaptchaScript.setAttribute("async", "");
  recaptchaScript.setAttribute("defer", "");

  document.head.appendChild(recaptchaScript);
});
</script>

<style scoped></style>
