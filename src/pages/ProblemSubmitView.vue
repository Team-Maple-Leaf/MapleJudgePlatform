<template>
  <div class="submitPage">
    <v-container>
      <h2>{{ problemNo }}</h2>
      <v-form ref="form" @submit.prevent="gotoResultPage">
        <v-select
          class="selectBox"
          v-model="programmingLanguage"
          label="PL"
          :items="pl"
        ></v-select>

        <v-textarea
          v-model="Code"
          label="코드를 작성해 주세요."
          rows="13"
        ></v-textarea>
        <v-btn width="100px" style="margin-bottom: 30px" type="submit"
          >제출</v-btn
        >
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
const pl = ["c", "java"];

const programmingLanguage = ref(String(""));
const Code = ref(String(""));

const gotoResultPage = () => {
  router.push("/result/" + problemNo);
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
