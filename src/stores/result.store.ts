import { getAsync } from "@/utils/api";
import { defineStore } from "pinia";
import type { Results } from "../structs/Results";
import { useRouter } from "vue-router";
import type { userDetail } from "@/structs/userDetail";

export const useResultStore = defineStore("result", {
  state: () => ({
    result: null as Results | null,
    size: 10 as number,
    page: 1 as number,
    sort: "id,DESC" as string | null,
  }),

  actions: {
    async load(user: userDetail) {
      const url = setRequestUrl(this.size, this.page - 1, this.sort);
      if (user.isValid()) {
        const result = await getAsync<any>(url, user);
        this.result = result;
      } else {
        const router = useRouter();
        router.push("/signin");
      }
    },

    idFilter(id: number) {
      if (this.result === null) return;
      if (Number.isNaN(id)) return;
      const newData = this.result.data.content.filter(
        (item: any) => item.problem_id === id
      );
      this.result.data.content = newData;
    },

    sortDecreasing() {
      if (this.result === null) return;
      this.result.data.content.sort((a: any, b: any) => b.id - a.id);
    },
  },
});

const setRequestUrl = (
  size: number | null,
  page: number | null,
  sort: string | null
) => {
  let url = "/answers";
  if (size !== null) url += "?size=" + size;
  else url += "?size=10";
  if (page !== null) url += "&page=" + page;
  if (sort !== null) url += "&sort=" + sort;
  return url;
};
