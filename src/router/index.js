import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("../views/article.vue"),
  },
  {
    path: "/dispatch",
    name: "Dispatch",
    component: () => import("../views/dispatch.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
