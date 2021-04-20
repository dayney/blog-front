import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index.vue"),
    meta: {
      title: '首页',
    }
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("../views/article.vue"),
    meta: {
      title: '文章列表',
    }
  },
  {
    path: "/front",
    name: "Front",
    component: () => import("../views/front.vue"),
    meta: {
      title: '前端',
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin.vue"),
    meta: {
      title: '后端',
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about.vue"),
    meta: {
      title: '关于作者',
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      title: '404',
    }
  },
  {
    path: "/dispatch",
    name: "Dispatch",
    component: () => import("../views/dispatch.vue"),
    meta: {
      title: 'demo分发页面',
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  
  // 设置page title
  if(to.meta?.title) {
    document.title = to.meta.title;
  }

  next();
});

router.afterEach((to) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}
  // store.commit('updateLoadingStatus', {isLoading: false})
  // console.log('end loading');
  // next();
});

export default router;
