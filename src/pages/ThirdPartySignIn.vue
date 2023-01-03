<template>
  <v-col />
  <v-col />
  <v-col />
  <v-row fluid class="d-flex text-center flex-column">
    <v-col cols="auto">
      <v-card
        class="mx-auto pa-2"
        width="300"
        height="127"
        elevation="0"
        id="loginBtn"
      >
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
import router from "@/router";
import { UserInfo } from "@/structs/UserInfo";
import { injectStrict } from "@/utils/injecter";
import type { Emitter, EventType } from "mitt";
import { onMounted } from "vue";
import { decodeCredential } from "vue3-google-login";

const emitter: Emitter<Record<EventType, any>> = injectStrict("emitter");

const handleCredentialResponseAsync = async (response: any) => {
  const userData = new UserInfo(decodeCredential(response.credential));
  emitter.emit("onUserChanged", userData);

  router.push("/");
};

onMounted(() => {
  const recaptchaScript = document.createElement("script");

  recaptchaScript.setAttribute("src", "https://accounts.google.com/gsi/client");
  recaptchaScript.setAttribute("async", "");
  recaptchaScript.setAttribute("defer", "");

  document.head.appendChild(recaptchaScript);
});
</script>

<style scoped>
#loginBtn {
  border-width: 1.5px;
  border-style: solid;
  border-color: rgb(223, 223, 223);
  border-radius: 5px;
}
</style>
