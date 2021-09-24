import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requireAuth: true, breadCrumb: "Home" },
    children: [
      {
        path: "",
        name: "Default home",
        props: true,
        meta: { requireAuth: true },
        component: () => import("../components/home/core.vue"),
        children: [
          {
            path: "",
            name: "Test list",
            props: true,
            meta: { requireAuth: true },
            component: () =>
              import("../components/home/dashboardTest/testList.vue"),
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
