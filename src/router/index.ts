import { createRouter, createWebHistory } from "vue-router";
import ProblemSetView from "@/pages/ProblemSetView.vue";
import NotFoundView from "@/pages/NotFoundView.vue";
import ProblemDetailView from "@/pages/ProblemDetailView.vue";
import ProblemSubmitView from "@/pages/ProblemSubmitView.vue";
import ProblemResultView from "@/pages/ProblemResultView.vue";
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
      component: () => ProblemSetView,
    },
    {
      path: "/problem/:no",
      name: "ProblemDetail",
      component: () => ProblemDetailView,
    },
    {
      path: "/submit/:no",
      name: "ProblemSubmit",
      component: () => ProblemSubmitView,
    },
    {
      path: "/result/:no",
      name: "ProblemResult",
      component: () => ProblemResultView,
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFoundView,
    },
    {
      path: "/error",
      name: "Error",
      component: InternalServerErrorView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;
