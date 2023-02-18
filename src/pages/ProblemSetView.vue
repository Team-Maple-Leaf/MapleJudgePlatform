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
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="receivedProblems.data.totalPages"
        :total-visible="5"
        circle
        color="primary"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Problem } from "@/structs/Problem";
import { getAsync } from "@/utils/api";
import { computed, ref, watch } from "vue";

const setRequestUrl = (
  size: number | null,
  page: number | null,
  sort: string | null
) => {
  let url = "/problemset";
  if (size !== null) url += "?size=" + size;
  else url += "?size=10";
  if (page !== null) url += "&page=" + page;
  if (sort !== null) url += "&sort=" + sort;
  return url;
};

const size = ref(10);
const page = ref(1);
const sort = ref("id,ASC");
const url = computed(() =>
  setRequestUrl(size.value, page.value - 1, sort.value)
);

const receivedProblems = ref(await getAsync<any>(url.value));
const problems = ref(receivedProblems.value.data.content as Array<Problem>);

watch(
  () => url.value,
  async () => {
    receivedProblems.value = await getAsync<any>(url.value);
    problems.value = receivedProblems.value.data.content as Array<Problem>;
  }
);
</script>

<style scoped>
.problem-title {
  background-color: transparent;
}
</style>
