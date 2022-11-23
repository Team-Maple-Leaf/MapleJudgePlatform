<template>
  <div>
    <v-btn :to="'/submit/' + problemNo">제출</v-btn>

    <div class="text-h3 pa-4">문제번호: {{ problemNo }}</div>

    <v-divider></v-divider>

    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-2">
          <div class="text-h6">문제</div>
          <p>{{ problem.problem_desc }}</p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-2">
          <v-table>
            <thead>
              <tr>
                <th>메모리 제한</th>
                <th>시간 제한</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ problem.limit_info?.memory ?? "-" }} (MB)</td>
                <td>{{ problem.limit_info?.time ?? "-" }} 초</td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-2">
          <div class="text-h6">입력</div>
          <p>{{ problem.input_desc }}</p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-2">
          <div class="text-h6">출력</div>
          <p>{{ problem.output_desc }}</p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row v-for="ex in problem.io_examples" :key="ex.input">
      <v-col>
        <v-sheet class="pa-2">
          <div class="text-h6">입력</div>
          <p v-if="ex.input !== undefined && ex.input !== ''">{{ ex.input }}</p>
          <p v-else>없음</p>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2">
          <div class="text-h6">출력</div>
          <p v-if="ex.output !== undefined && ex.output !== ''">
            {{ ex.output }}
          </p>
          <p v-else>없음</p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { Problem } from "@/structs/Problem";
import { useRoute } from "vue-router";
import { getAsync } from "@/utils/api";
import { ref } from "vue";

const route = useRoute();
const problemNo = route.params.no;

const receivedProblems = await getAsync<any>("/problem/" + problemNo);
const problem = ref(receivedProblems.data as Problem);
</script>

<style scoped></style>
