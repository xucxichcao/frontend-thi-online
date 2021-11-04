import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store/index";
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
                meta: {
                  requireAuth: true,
                  name: "Làm bài thi",
                  sideBar: "Test list",
                },
                component: () =>
                  import("../components/test/testDetail/test.vue"),
              },
              {
                path: "/test/:testId/all",
                name: "Test",
                props: true,
                meta: {
                  requireAuth: true,
                  name: "Tất cả câu hỏi",
                  sideBar: "All question test list",
                },
                component: () =>
                  import("../components/test/testDetail/allQuestion.vue"),
              },
              {
                path: "/test/:testId/finish",
                name: "Finish test",
                props: true,
                meta: {
                  requireAuth: true,
                  name: "Hoàn thành bài thi",
                  sideBar: "Test list",
                },
                component: () =>
                  import("../components/test/testDetail/finish.vue"),
              },
              {
                path: "/test/:testId/monitor",
                props: true,
                meta: {
                  requireAuth: true,
                  name: "Monitor test",
                  requireTeacher: true,
                  sideBar: "Test list",
                },
                component: () => import("../components/camera/core.vue"),
                children: [
                  {
                    path: "/test/:testId/monitor",
                    name: "Monitor test default",
                    props: true,
                    meta: {
                      requireAuth: true,
                      name: "Monitor test",
                      sideBar: "Test list",
                    },
                    component: () => import("../components/camera/camera.vue"),
                  },
                ],
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
            component: () => import("../components/exam/listExam.vue"),
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
      {
        path: "/school",
        props: true,
        meta: { requireAuth: true, name: "Nhà trường" },
        component: () => import("../components/school/core.vue"),
        children: [
          {
            path: "/school",
            name: "School default",
            props: true,
            meta: {
              requireAuth: true,
              name: "Nhà trường",
              sidebar: "School default",
            },
          },
          {
            path: "/school/add",
            name: "Add student",
            props: true,
            meta: {
              requireAuth: true,
              name: "Thêm sinh viên",
              sidebar: "School default",
            },
            component: () => import("../components/school/addStudent.vue"),
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

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requireAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters["account/getAuthen"]) {
//       next({ name: "Signin" });
//     } else {
//       next(); // go to wherever I'm going
//     }
//   } else {
//     next(); // does not require auth, make sure to always call next()!
//   }
// });

export default router;
