<template>
  <div>
    <p>A-B</p>

    <hr />

    <v-table></v-table>

    <p>문제</p>
    <p>두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.</p>

    <p>입력</p>
    <p>첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10)</p>

    <p>출력</p>
    <p>첫째 줄에 A-B를 출력한다.</p>

    <div v-for="item in items" :key="item.id">
      <p>{{ item.input.title }}</p>
      <p>{{ item.input.value }}</p>

      <p>{{ item.output.title }}</p>
      <p>{{ item.output.value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import ApiWrapper from "@/api/resources/ApiWrapper";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const model = ref({});
    const no = route.params.no;

    // todo: no를 이용해 서버에 문제 가져오기 질의
    ApiWrapper.get("/problem/" + no)
      .then((response) => (model.value = response))
      .catch((error) => {
        const status =
          typeof error === "number"
            ? "HTTP response code: " + error
            : (error as TypeError)?.message;

        router.push({
          name: "Error",
          params: { status },
        });
      });

    const items = [
      {
        input: {
          title: "예제 입력 1",
          value: "2 1",
        },
        output: {
          title: "예제 출력 1",
          value: "1",
        },
      },
    ];

    return { model, items };
  },
};
</script>

<style scoped></style>
