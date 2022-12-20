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
      <tbody>
        <tr v-for="result in results" :key="result.state.answer_id">
          <td>{{ result.state.answer_id }}</td>
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
          <td>{{ result.state.memory }}</td>
          <td>{{ result.state.time }}</td>
          <td>{{ result.language }}</td>
          <td>{{ result.code_length }}</td>
          <td>{{ dateTimeFormatter.format(new Date(result.date)) }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { getAsync } from "@/utils/api";

export interface Result {
  code: string;
  code_length: number;
  date: string;
  id: number;
  language: string;
  problem_id: number;
  state: {
    answer_id: number;
    memory: number;
    result: string;
    time: number;
  };
  user_id: string;
}

const dateTimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZone: "UTC",
} as Intl.DateTimeFormatOptions;

const dateTimeFormatter = new Intl.DateTimeFormat("ko-KR", dateTimeOptions);

const exampleResult = ref([
  {
    code: '#include <stdio.h>\nint main() {\n\tprintf("Hello World!");\n\treturn 0;\n}',
    code_length: 0,
    date: "2022-12-19T00:38:33.770Z",
    id: 0,
    language: "C",
    problem_id: 1,
    state: {
      answer_id: 0,
      memory: 0,
      result: "ACCEPTED",
      time: 0,
    },
    user_id: "1",
  },
]);

const route = useRoute();
const router = useRouter();
const problemNumber = ref(Number(route.params.no));

const resultData = await getAsync<any>("/answers");
const results = ref(resultData.data as Result[]);

if (Number.isNaN(problemNumber.value)) {
  results.value;
} else {
  results.value = results.value.filter(
    (result) => result.problem_id === problemNumber.value
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
