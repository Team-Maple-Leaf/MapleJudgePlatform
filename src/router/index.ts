import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "@/pages/NotFoundView.vue";
import InternalServerErrorView from "@/pages/InternalServerErrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/problemset",
    },
    {
      path: "/problemset",
      name: "ProblemSet",
      component: () => import("@/pages/ProblemSetView.vue"),
    },
    {
      path: "/problem/:no",
      name: "ProblemDetail",
      component: () => import("@/pages/ProblemDetailView.vue"),
    },
    {
      path: "/submit/:no",
      name: "ProblemSubmit",
      component: () => import("@/pages/ProblemSubmitView.vue"),
    },
    {
      path: "/result/:no",
      name: "ProblemResultWithNo",
      component: () => import("@/pages/ProblemResultView.vue"),
    },
    {
      path: "/result",
      name: "ProblemResultAll",
      component: () => import("@/pages/ProblemResultView.vue"),
    },
    {
      path: "/signin",
      name: "ThirdPartySignIn",
      component: () => import("@/pages/ThirdPartySignIn.vue"),
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFoundView,
    },
    {
      path: "/error/:status",
      name: "Error",
      component: InternalServerErrorView,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;
