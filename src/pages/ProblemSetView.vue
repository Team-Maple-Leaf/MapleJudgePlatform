<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="4" class="d-flex align-center mr-auto">
      <v-row>
        <v-btn-toggle v-model="idx" @click="goToProblem(idx)">
          <v-btn class="mr-2 text-center rounded-lg">전체</v-btn>
          <v-btn class="mr-2 text-center rounded-lg">출처</v-btn>
          <v-btn class="mr-2 text-center rounded-lg">분류</v-btn>
        </v-btn-toggle>
      </v-row>
    </v-col>
    <v-col cols="3" />
    <v-col cols="5" class="d-flex align-center">
      <v-text-field
        class="ma-2 mr-0"
        variant="outlined"
        v-model="search"
        placeholder="문제 제목"
        label="문제 검색"
        hide-details
        :append-inner-icon="'mdi-magnify'"
        @click:append-inner="goToProblem(search)"
      ></v-text-field>
    </v-col>
  </v-row>
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
const idx = ref(0);

function goToProblem(problemId: any) {
  console.log(problemId);
}
</script>

<style scoped>
.problem-title:hover {
  text-decoration: underline;
}
</style>
