<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.h-layout {
  background: #f0f2f5;
}
.layout-logo {
  height: 34px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px;
}
.h-layout-footer {
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
.breadcrumb {
  padding: 5px 8px;
  margin: 10px 0;
}
.breadcrumb .breadcrumb-item {
  display: inline;
  font-size: 15px;
}
.breadcrumb li + li::before {
  padding-left: 8px;
  color: #249eff;
  content: "/\00a0";
}
.breadcrumb li a:hover {
  text-decoration: none;
}
</style>
<script>
import { setAxiosAuthToken } from "./helpers/auth-header";
import store from "./store/index";
import http from "./http-common";
export default {
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    },
  },
  created: async function () {
    if (!this.isEmpty(localStorage.getItem("token"))) {
      setAxiosAuthToken(localStorage.getItem("token"));
      await http.get("/auth/user/").then((response) => {
        store.dispatch("account/setRole", response.data.role);
      });
    }
  },
};
</script>
