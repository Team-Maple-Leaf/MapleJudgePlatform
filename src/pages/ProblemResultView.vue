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
        <tr v-for="result in sampleResult" :key="result.submitId">
          <td>{{ result.submitId }}</td>
          <td>{{ result.userId }}</td>
          <td>
            <v-btn
              flat
              class="problem-title"
              @click="handleProblemClick(result.problemId)"
            >
              {{ result.problemId }}
            </v-btn>
          </td>
          <td>{{ result.result }}</td>
          <td>{{ result.memory }}</td>
          <td>{{ result.time }}</td>
          <td>{{ result.language }}</td>
          <td>{{ result.codeLength }}</td>
          <td>{{ result.submitTime }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const problemNumber = ref(Number(route.params.no));

const sampleResult = ref([
  {
    submitId: 0,
    problemId: 0,
    userId: 0,
    result: "AC",
    time: 100,
    memory: 100,
    language: "C++",
    codeLength: 500,
    submitTime: "2021-08-01",
  },
]);

for (let i = 1; i <= 20; i++) {
  sampleResult.value.push({
    submitId: i,
    problemId: i,
    userId: i,
    result: "AC",
    time: 100,
    memory: 100,
    language: "C++",
    codeLength: 500,
    submitTime: "2021-08-01",
  });
}

if (Number.isNaN(problemNumber.value)) {
  sampleResult.value;
} else {
  sampleResult.value = sampleResult.value.filter(
    (result) => result.problemId === problemNumber.value
  );
}

const handleProblemClick = (problemId: number) => {
  router.push("/problem/" + problemId);
};
</script>

<style scoped>
.problem-title {
  background-color: transparent;
}
</style>
