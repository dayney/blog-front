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
    path: "/front",
    name: "Front",
    component: () => import("../views/front.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
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

router.beforeEach((to, from, next) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}
  // store.commit('updateLoadingStatus', {isLoading: true})
  // console.log(to);
  // console.log('start loading');
  next();
});

router.afterEach((to) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}
  // store.commit('updateLoadingStatus', {isLoading: false})
  console.log('end loading');
  // next();
});

export default router;
