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
      <tbody
        v-if="
          results !== null &&
          results.code === 200 &&
          results.data.content.length !== 0
        "
      >
        <tr v-for="result in results.data.content" :key="result.id">
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
          <td :class="result.state.result">{{ result.state.result }}</td>
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
    <div class="text-center">
      <v-pagination
        v-model="resultStore.page"
        :length="resultStore.result?.data.totalPages"
        :total-visible="5"
        circle
        color="primary"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useResultStore } from "@/stores/result.store";
import { userUserStore } from "@/stores/user.store";
import dateTimeFormatter from "@/structs/TimeFormat";

const route = useRoute();
const router = useRouter();

const resultStore = useResultStore();
const userStore = userUserStore();

const problemNumber = ref(Number(route.params.no));
const intervalId = ref<number | null>(null);

userStore.load();
resultStore.load(userStore.user);

const results = computed(() => {
  resultStore.idFilter(problemNumber.value);
  resultStore.sortDecreasing();
  return resultStore.result;
});

const handleProblemClick = (problem_id: number) => {
  router.push("/problem/" + problem_id);
};

onMounted(() => {
  intervalId.value = window.setInterval(() => {
    resultStore.load(userStore.user);
  }, 1000);
});
onUnmounted(() => {
  if (intervalId.value !== null) {
    window.clearInterval(intervalId.value);
  }
});
</script>

<style scoped>
.problem-title {
  background-color: transparent;
}
.Accepted {
  color: #4caf50;
}

.WrongAnswer {
  color: #f44336;
}

.Proceeding {
  color: #ff9800;
}

.TimeLimitExceeded {
  color: #f44336;
}

.MemoryLimitExceeded {
  color: #f44336;
}

.CompileError {
  color: #f44336;
}

.RuntimeError {
  color: #f44336;
}
</style>
