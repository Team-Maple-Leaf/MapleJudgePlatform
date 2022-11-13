<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="4" class="d-flex align-center mr-auto">
      <v-row>
        <v-btn variant="tonal">전체</v-btn>
      </v-row>
    </v-col>
    <!--
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
        @click:append-inner="searchProblem(search)"
      ></v-text-field>
    </v-col>
  -->
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
        <tr v-for="problem in problems" :key="problem.no">
          <td>{{ problem.no }}</td>
          <td>
            <v-btn
              flat
              variant="plain"
              class="problem-title"
              :to="'/problem/' + problem.no"
            >
              {{ problem.title }}
            </v-btn>
          </td>
          <td>{{ problem.reference ?? "Not Set" }}</td>
          <td>{{ problem.category ?? "Not Set" }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import type { Problem } from "@/structs/Problem";
import { getAsync } from "@/utils/api";
import { ref } from "vue";

const receivedProblems = await getAsync<any>("/problemset");
const problems = ref(receivedProblems.data as Array<Problem>);
</script>

<style scoped>
.problem-title {
  background-color: transparent;
}
</style>
