import { baseUrl } from "@/utils/api";
import { defineStore } from "pinia";
import { userDetail } from "../structs/userDetail";
import { origin } from "@/utils/api";
import type { SignInRequest } from "../structs/SignInRequest";

/**
 * Pinia를 이용하는 User Store.
 */
export const userUserStore = defineStore({
  id: "auth",

  state: () => ({
    user: Object as unknown as userDetail,
  }),

  actions: {
    /**
     * Load from local storage.
     */
    load() {
      const user = localStorage.getItem(this.$id);

      if (user !== null) {
        this.user = JSON.parse(user);
      }
    },

    /**
     * Sign-In Request.
     * @param request request.
     */
    async signIn(request: SignInRequest) {
      const res = await fetch(baseUrl + "/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
        },
        body: JSON.stringify(request),
      });

      const response = await res.json();
      this.user = new userDetail(request, response.data?.token ?? "");
      localStorage.setItem(this.$id, JSON.stringify(this.user));
    },

    /**
     * Sign-Out.
     */
    async signOut() {
      if (this.user === null) return;

      await fetch(baseUrl + "/auth/logout", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: this.user.jwt ?? "",
          "Access-Control-Allow-Origin": origin,
        },
      });

      localStorage.removeItem(this.$id);
      this.user = userDetail.Empty();
    },
  },
});
