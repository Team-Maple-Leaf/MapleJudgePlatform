<template>
  <div class="submitPage">
    <v-container>
      <h2>{{ problem.no }}. {{ problem.title }}</h2>
      <v-form ref="form" @submit.prevent="gotoResultPage">
        <v-select
          label="언어 선택"
          class="selectBox"
          v-model="selected"
          :items="languageList"
        ></v-select>

        <v-textarea
          ref="textarea"
          rows="13"
          @keydown.tab.prevent="useTab($event)"
          v-model="textareaCode"
          label="코드를 작성해 주세요."
          :rules="checkTextareaCode"
          required
        ></v-textarea>
        <v-btn class="“mb-30”" width="100px" type="submit">제출</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import type { userDetail } from "@/structs/userDetail";
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import { postAsync } from "@/utils/api";
import { getAsync } from "@/utils/api";
import { userUserStore } from "../stores/user.store";
import type { Problem } from "@/structs/Problem";

export interface sendDataSet {
  code: string;
  language: string;
  user_id: string;
}

const router = useRouter();
const route = useRoute();

const problemNo = route.params.no;
const receivedProblems = await getAsync<any>("/problem/" + problemNo);
const problem = ref(receivedProblems.data as Problem);

const languageList: string[] = ["C99", "C++17"];
const selectedLanguage = ref(languageList[0]);
const selected = computed(() => {
  return selectedLanguage;
});

const form = ref();
const textarea = ref();

const textareaCode = ref("");
const checkTextareaCode = ref([
  (v: any) => !!v || "코드는 필수 입력사항입니다.",
]);

const userDataStore = userUserStore();
userDataStore.load();
const userId = userDataStore.user.maple;

const useTab = (event: KeyboardEvent) => {
  const start: number = textarea.value.selectionStart;
  const end: number = textarea.value.selectionEnd;

  textareaCode.value = textareaCode.value =
    textareaCode.value.substring(0, start) +
    "    " +
    textareaCode.value.substring(end, textareaCode.value.length);

  setTimeout(() => {
    (textarea.value as HTMLTextAreaElement).setSelectionRange(
      start + 4,
      start + 4
    );
  }, 0);
};

const gotoResultPage = async () => {
  const result = await form.value.validate();

  if (result.valid) {
    if (!userId) {
      alert("로그인을 먼저 해야합니다.");
      router.push("/signin");
    } else {
      const sendData: sendDataSet = {
        code: textareaCode.value,
        language: selectedLanguage.value,
        user_id: userId,
      };

      const responseData = postAsync<any, sendDataSet>(
        "/submit/" + problemNo,
        sendData,
        userDataStore.user
      );

      router.push("/result/" + problemNo);
    }
  }
};
</script>

<style scoped>
.submitPage {
  margin-left: 50px;
}

.selectBox {
  width: 90px;
  padding-top: 20px;
}
</style>
