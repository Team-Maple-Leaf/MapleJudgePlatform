import { getAsync, postAsync } from "@/utils/api";
import { defineStore } from "pinia";
import { userDetail } from "../structs/userDetail";
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
        this.user = new userDetail();
        this.user.setUserDetail(JSON.parse(user));
      }
    },

    /**
     * Sign-In Request.
     * @param request request.
     */
    async signIn(request: SignInRequest) {
      const response = await postAsync<any, any>("/auth/login", request);

      this.user = new userDetail();
      this.user.setInRequest(request);
      this.user.setJwt(response.data?.token ?? "");
      localStorage.setItem(this.$id, JSON.stringify(this.user));
    },

    /**
     * Sign-Out.
     */
    async signOut() {
      if (this.user === null) return;

      getAsync("/auth/logout", this.user);

      localStorage.removeItem(this.$id);
      this.user = userDetail.Empty();
    },
  },
});
