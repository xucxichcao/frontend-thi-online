import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    props: true,
    meta: { requireAuth: true, name: "Trang chủ" },
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home core",
        props: true,
        meta: { requireAuth: true, name: "Trang chủ", sideBar: "Home core" },
        component: () => import("../components/home/core.vue"),
      },
      {
        path: "/test",
        props: true,
        meta: { requireAuth: true, name: "Bài thi" },
        component: () => import("../components/test/core.vue"),
        children: [
          {
            path: "",
            name: "Test list",
            props: true,
            meta: { requireAuth: true, name: "Bài thi", sideBar: "Test list" },
            component: () => import("../components/test/testList.vue"),
          },
          {
            path: "/test/:testId",
            props: true,
            meta: {
              requireAuth: true,
              name: "Chi tiết bài thi",
              sideBar: "Test list",
            },
            component: () => import("../components/test/testDetail.vue"),
            children: [
              {
                path: "/test/:testId",
                name: "Test detail",
                props: true,
                meta: {
                  requireAuth: true,
                  name: "Chi tiết bài thi",
                  sideBar: "Test list",
                },
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
      {
        path: "/setting",
        props: true,
        meta: { requireAuth: true, name: "Tùy chỉnh tài khoản" },
        component: () => import("../components/settings/core.vue"),
        children: [
          {
            path: "/setting",
            name: "Setting default",
            props: true,
            meta: {
              requireAuth: true,
              name: "Tùy chỉnh tài khoản",
              sideBar: "Setting default",
            },
            component: () => import("../components/settings/personal.vue"),
          },
          {
            path: "/setting/change-password",
            name: "Setting password",
            props: true,
            meta: {
              requireAuth: true,
              name: "Thay đổi mật khẩu",
              sideBar: "Setting default",
            },
            component: () =>
              import("../components/settings/settingPassword.vue"),
          },
        ],
      },
      {
        path: "/exam",
        props: true,
        meta: { requireAuth: true, name: "Danh sách bài thi" },
        component: () => import("../components/exam/core.vue"),
        children: [
          {
            path: "/exam",
            name: "Exam default",
            props: true,
            meta: {
              requireAuth: true,
              name: "Danh sách bài thi",
              sidebar: "Exam default",
            },
          },
          {
            path: "/exam/create",
            name: "Create exam",
            props: true,
            meta: {
              requireAuth: true,
              name: "Tạo đề thi",
              sidebar: "Exam default",
            },
            component: () => import("../components/exam/createExam.vue"),
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
