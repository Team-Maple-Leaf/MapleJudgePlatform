<template>
  <div class="result-table">
    <v-table>
      <thead>
        <tr>
          <th>제출 번호</th>
          <th>아이디</th>
          <th>문제</th>
          <th>결과</th>
          <th>메모리</th>
          <th>시간</th>
          <th>언어</th>
          <th>코드 길이</th>
          <th>제출 시간</th>
        </tr>
      </thead>
      <tbody v-if="results.code === 200 && results.data.length !== 0">
        <tr v-for="result in results.data" :key="result.id">
          <td>{{ result.id }}</td>
          <td>{{ result.user_id }}</td>
          <td>
            <v-btn
              flat
              class="problem-title"
              @click="handleProblemClick(result.problem_id)"
            >
              {{ result.problem_id }}
            </v-btn>
          </td>
          <td>{{ result.state.result }}</td>
          <td>{{ result.state.memory }} KB</td>
          <td>{{ result.state.time }} ms</td>
          <td>{{ result.language }}</td>
          <td>{{ result.code_length }} B</td>
          <td>{{ dateTimeFormatter.format(new Date(result.date)) }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="9" class="text-center">제출된 답안이 없습니다.</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { getAsync } from "@/utils/api";
import { userUserStore } from "@/stores/user.store";

interface Result {
  code: number;
  message: string;
  data: {
    id: number;
    code: string;
    state: {
      result: string;
      time: number;
      memory: number;
      answer_id: number | null;
    };
    language: string;
    date: number;
    user_id: string;
    problem_id: number;
    code_length: number;
  }[];
}

const userStore = userUserStore();
userStore.load();

const dateTimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZone: "Asia/Seoul",
} as Intl.DateTimeFormatOptions;

const dateTimeFormatter = new Intl.DateTimeFormat("ko-KR", dateTimeOptions);

const route = useRoute();
const router = useRouter();
const problemNumber = ref(Number(route.params.no));

const resultData = await getAsync<any>("/answers", userStore.user);
const results = ref(resultData as Result);

if (Number.isNaN(problemNumber.value)) {
  results.value.data;
} else {
  results.value.data = results.value.data.filter(
    (data) => data.problem_id === problemNumber.value
  );
}

const handleProblemClick = (problem_id: number) => {
  router.push("/problem/" + problem_id);
};
</script>

<style scoped>
.problem-title {
  background-color: transparent;
}
</style>
