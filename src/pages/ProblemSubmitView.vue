<template>
  <div class="submitPage">
    <v-container>
      <h2>{{ problemNo }}</h2>
      <v-form ref="form" @submit.prevent="gotoResultPage" lazy-validation>
        <v-select
          label="언어 선택"
          class="selectBox"
          v-model="selectedLanguage"
          :items="languageList"
        ></v-select>

        <v-textarea
          rows="13"
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
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const problemNo = route.params.no;
const languageList: string[] = ["c", "java"];

const selectedLanguage = ref(languageList[0]);
const textareaCode = ref("");

const checkTextareaCode = ref([
  (v: any) => !!v || "코드는 필수 입력사항입니다.",
]);

const form = ref();

const gotoResultPage = async () => {
  const result = await form.value.validate();

  if (result.valid) {
    router.push("/result/" + problemNo);
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
