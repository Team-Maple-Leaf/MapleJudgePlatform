<!-- 
  problem id located in the left side of the list
  problem title located in the next line of the problem id
-->
<template>
  <v-container class="problem-search d-flex flex-row">
    <v-btn-group class="mr-auto" app color="white" dense>
      <v-btn class="ma-2 pa-2">전체</v-btn>
      <v-btn class="ma-2 pa-2">출처</v-btn>
      <v-btn class="ma-2 pa-2">분류</v-btn>
    </v-btn-group>
    <v-text-field
      class="ma-2 pa-2 align-self-auto"
      v-model="search"
      placeholder="문제 제목"
      single-line
    />
    <v-btn class="ma-2 align-self-auto">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-container>
  <div class="problem-table">
    <v-table>
      <thead>
        <tr>
          <th>문제 번호</th>
          <th>문제 이름</th>
          <th>출처</th>
          <th>분류</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="problem in problems" :key="problem.id">
          <td>{{ problem.id }}</td>
          <td>
            <button class="problem-title" @click="goToProblem(problem.id)">
              {{ problem.title }}
            </button>
          </td>
          <td>{{ problem.outputDescription }}</td>
          <td>{{ problem.outputDescription }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const problems = ref([
  {
    examples: [
      {
        input: "string",
        output: "Hello World!\n",
      },
    ],
    id: 0,
    inputDescription: "이 문제는 입력이 없습니다.",
    outputDescription: "Hello World!",
    problemDescription: "Hello World를 출력해보자",
    title: "Hello World 출력",
  },
]);

for (let i = 1; i <= 10; i++) {
  problems.value.push({
    examples: [
      {
        input: "string",
        output: "Hello World!\n",
      },
    ],
    id: i,
    inputDescription: "이 문제는 입력이 없습니다.",
    outputDescription: "Hello World!",
    problemDescription: "Hello World를 출력해보자",
    title: "Hello World 출력: " + i,
  });
}

const search = ref("");

function goToProblem(problemId: number) {
  console.log(problemId);
}
</script>

<style scoped>
.problem-title:hover {
  text-decoration: underline;
}

.search-btn:hover {
  color: #3f51b5;
  background: #dddee5;
  border-radius: 5px;
}
</style>
