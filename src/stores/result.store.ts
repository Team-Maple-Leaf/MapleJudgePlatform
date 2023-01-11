import { getAsync } from "@/utils/api";
import { defineStore } from "pinia";
import type { Result } from "../structs/Result";
import { useRouter } from "vue-router";
import type { userDetail } from "@/structs/userDetail";

export const useResultStore = defineStore("result", {
  state: () => ({
    result: null as Result | null,
  }),

  actions: {
    async load(user: userDetail) {
      if (user.isValid()) {
        const result = await getAsync<any>("/answers", user);
        this.result = result;
      } else {
        const router = useRouter();
        router.push("/signin");
      }
    },

    idFilter(id: number) {
      if (this.result === null) return;
      const newData = this.result.data.filter(
        (item: any) => item.problem_id === id
      );
      this.result.data = newData;
    },

    sortDecreasing() {
      if (this.result === null) return;
      this.result.data.sort((a: any, b: any) => b.id - a.id);
    },
  },
});
