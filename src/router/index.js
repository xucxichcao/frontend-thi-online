import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    props: true,
    meta: {
      requireAuth: true,
      name: "Trang chủ",
      breadcrumb: "Trang chủ",
    },
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home core",
        props: true,
        meta: {
          requireAuth: true,
          sideBar: "Home core",
        },
        component: () => import("../components/home/core.vue"),
      },
      {
        path: "/exam",
        props: true,
        meta: {
          requireAuth: true,
          name: "Bài thi",
          breadcrumb: "Phòng thi",
        },
        component: () => import("../components/exam/core.vue"),
        children: [
          {
            path: "/exam",
            name: "Exam list",
            props: true,
            meta: {
              requireAuth: true,
              name: "Bài thi",
              sideBar: "Exam list",
              breadcrumb: "Danh sách phòng thi",
            },
            component: () => import("../components/exam/examList.vue"),
          },
          {
            path: "/exam/create",
            name: "Create exam",
            props: true,
            meta: {
              requireAuth: true,
              requireRole: "Giảng viên",
              name: "Tạo đề thi",
              sideBar: "Create exam",
              breadcrumb: "Tạo đề thi",
            },
            component: () => import("../components/exam/createExam.vue"),
          },
          {
            path: "/exam/:examId",
            props: true,
            meta: {
              requireAuth: true,
              breadcrumb() {
                return store.getters["attempt/getTenPhongThi"];
              },
              sideBar: "Exam list",
            },
            component: () => import("../components/exam/examDetail.vue"),
            children: [
              {
                path: "/exam/:examId",
                name: "Exam detail",
                props: true,
                meta: {
                  requireAuth: true,
                  breadcrumb: "Thông tin",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/index.vue"),
              },
              {
                path: "/exam/:examId/attempt",
                name: "Exam",
                props: true,
                meta: {
                  requireAuth: true,
                  breadcrumb: "Làm bài thi",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/exam.vue"),
              },
              {
                path: "/exam/:examId/all",
                name: "All exam",
                props: true,
                meta: {
                  requireAuth: true,
                  requireRole: "Giảng viên",
                  breadcrumb: "Tất cả câu hỏi",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/allQuestion.vue"),
              },
              {
                path: "/exam/:examId/point",
                name: "Point exam",
                props: true,
                meta: {
                  requireAuth: true,
                  breadcrumb: "Điểm sinh viên",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/point.vue"),
              },
              {
                path: "/exam/:examId/essay",
                name: "Essay exam",
                props: true,
                meta: {
                  requireAuth: true,
                  requireRole: "Giảng viên",
                  breadcrumb: "Bài thi tự luận",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/essay.vue"),
              },
              {
                path: "/exam/:examId/upload",
                name: "Upload Point",
                props: true,
                meta: {
                  requireAuth: true,
                  requireRole: "Giảng viên",
                  breadcrumb: "Upload điểm",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/upload.vue"),
              },
              {
                path: "/exam/:examId/finish",
                name: "Finish exam",
                props: true,
                meta: {
                  requireAuth: true,
                  name: "Hoàn thành bài thi",
                  breadcrumb: "Hoàn thành bài thi",
                  sideBar: "Exam list",
                },
                component: () =>
                  import("../components/exam/examDetail/finish.vue"),
              },
              {
                path: "/exam/:examId/monitor",
                props: true,
                meta: {
                  requireAuth: true,
                  name: "Monitor exam",
                  requireRole: "Giảng viên",
                  breadcrumb: "Quản lý giờ thi",
                  sideBar: "Exam list",
                },
                component: () => import("../components/camera/core.vue"),
                children: [
                  {
                    path: "/exam/:examId/monitor",
                    name: "Monitor exam default",
                    props: true,
                    meta: {
                      requireAuth: true,
                      requireRole: "Giảng viên",
                      name: "Monitor exam",
                      breadcrumb: "Quản lý giờ thi",
                      sideBar: "Exam list",
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
        meta: {
          requireAuth: true,
          breadcrumb: "Tùy chỉnh tài khoản",
        },
        component: () => import("../components/settings/core.vue"),
        children: [
          {
            path: "/setting",
            name: "Setting default",
            props: true,
            meta: {
              requireAuth: true,
              breadcrumb: "Thông tin cá nhân",
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
              breadcrumb: "Thay đổi mật khẩu",
              sideBar: "Setting default",
            },
            component: () =>
              import("../components/settings/settingPassword.vue"),
          },
        ],
      },
      {
        path: "/school",
        props: true,
        meta: {
          requireRole: "Trường",
          requireAuth: true,
          breadcrumb: "Nhà trường",
          name: "Nhà trường",
        },
        component: () => import("../components/school/core.vue"),
        children: [
          {
            path: "/school",
            name: "School default",
            props: true,
            meta: {
              requireAuth: true,
              requireRole: "Trường",
              name: "Nhà trường",
              breadcrumb: "Nhà trường",
              sideBar: "School default",
            },
          },
          {
            path: "/school/add",
            name: "Add student",
            props: true,
            meta: {
              requireAuth: true,
              requireRole: "Trường",
              name: "Thêm sinh viên",
              breadcrumb: "Tạo tài khoản",
              sideBar: "Add student",
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters["account/getAuthen"]) {
      next({
        name: "Signin",
      });
    } else {
      if (to.matched.some((record) => record.meta.requireRole)) {
        if (
          to.matched.some(
            (record) =>
              record.meta.requireRole === store.getters["account/getRole"]
          )
        )
          next();
        else {
          next({ name: "Home core" });
        }
      } else next(); // go to wherever I'm going
    }
  } else if (
    to.matched.some((record) => record.name == "Signin") ||
    to.matched.some((record) => record.name == "Signup")
  ) {
    if (store.getters["account/getAuthen"]) {
      next({
        name: "Home core",
      });
    } else {
      next();
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
