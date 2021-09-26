import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    meta: { requireAuth: true, name: "Trang chủ" },
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home core",
        props: true,
        meta: { requireAuth: true, name: "Trang chủ" },
        component: () => import("../components/home/core.vue"),
      },
      {
        path: "/test",
        name: "Test core",
        props: true,
        meta: { requireAuth: true, name: "Bài thi" },
        component: () => import("../components/test/core.vue"),
        children: [
          {
            path: "",
            name: "Test list",
            props: true,
            meta: { requireAuth: true, name: "Bài thi" },
            component: () => import("../components/test/testList.vue"),
          },
          {
            path: "/test/:testId",
            name: "Test detail core",
            props: true,
            meta: { requireAuth: true, name: "Chi tiết bài thi" },
            component: () => import("../components/test/testDetail.vue"),
            children: [
              {
                path: "/test/:testId",
                name: "Test detail",
                props: true,
                meta: { requireAuth: true, name: "Chi tiết bài thi" },
                component: () =>
                  import("../components/test/testDetail/index.vue"),
              },
              {
                path: "/test/:testId/attempt",
                name: "Test",
                props: true,
                meta: { requireAuth: true, name: "Làm bài thi" },
                component: () =>
                  import("../components/test/testDetail/test.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sign-in",
    name: "Signin",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
