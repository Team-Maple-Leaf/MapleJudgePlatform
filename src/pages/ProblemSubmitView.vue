<template>
  <div>
    <v-form>
      <v-container>
        <h1>제출 페이지</h1>

        <h1>{{ $route.params }} 문제 제목</h1>
        <br />
        <v-textarea></v-textarea>

        <v-btn class="text-center mr-2 left" @click="gotoResultPage">
          제출
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const no = route.params.no;

const gotoResultPage = () => {
  router.push("/result/" + no);
}
</script>

<style scoped></style>
