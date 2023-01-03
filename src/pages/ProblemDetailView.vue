<template>
  <div class="detailPage">
    <div>
      <v-col />
      <div class="text-h4 pa-4" style="font-weight: bold">
        {{ problem.no }}<span>.</span> {{ problem.title }}

        <v-btn
          elevation="0"
          id="submitBtn"
          class="float-right"
          :to="'/submit/' + problemNo"
          >제출</v-btn
        >
      </div>

      <v-divider></v-divider>

      <v-col />
      <v-row>
        <v-col cols="3">
          <v-sheet style="border-width: 1px; border-style: solid" class="pa-0">
            <v-table>
              <thead h>
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

      <v-col />
      <v-col />

      <v-row>
        <v-col cols="12">
          <v-sheet class="pa-2">
            <div class="text-h5 pa-2" style="font-weight: bold">문제</div>
            <v-divider></v-divider>
            <p class="text-h7 pa-2">{{ problem.problem_desc }}</p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-sheet class="pa-2">
            <div class="text-h5 pa-2" style="font-weight: bold">입력</div>
            <v-divider></v-divider>
            <p class="text-h7 pa-2">{{ problem.input_desc }}</p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-sheet class="pa-2">
            <div class="text-h5 pa-2" style="font-weight: bold">출력</div>
            <v-divider></v-divider>
            <p class="text-h7 pa-2">{{ problem.output_desc }}</p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-col />

      <v-row v-for="ex in problem.io_examples" :key="ex.input">
        <v-col>
          <v-sheet class="pa-2" style="border-width: 1px; border-style: solid">
            <div class="text-h5 pa-2" style="font-weight: bold">예제 입력</div>
            <v-divider></v-divider>
            <p v-if="ex.input !== undefined && ex.input !== ''" class="pa-2">
              {{ ex.input }}
            </p>
            <p v-else class="pa-2">없음</p>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet class="pa-2" style="border-width: 1px; border-style: solid">
            <div class="text-h5 pa-2" style="font-weight: bold">예제 출력</div>
            <v-divider></v-divider>
            <p v-if="ex.output !== undefined && ex.output !== ''" class="pa-2">
              {{ ex.output }}
            </p>
            <p v-else class="pa-2">없음</p>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
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

<style scoped>
.detailPage {
  margin-left: 30px;
  margin-right: 30px;
}

#submitBtn {
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 5px;
  background-color: rgb(255, 222, 113);
}
</style>
