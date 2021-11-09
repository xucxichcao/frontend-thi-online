import store from "../store/index";
import http from "../http-common";
import { setAxiosAuthToken } from "../helpers/auth-header";

export const userService = {
  login,
  logout,
};

function login(email, password, router) {
  const userData = {
    email,
    password,
  };
  return http
    .post("/auth/login/", userData)
    .then((response) => {
      const authToken = response.data["key"];
      store.dispatch("account/setIsAuthenticated", true);
      setToken(authToken);
      getCurrentUser();
      http.get("/auth/user/").then((response) => {
        store.dispatch("account/setRole", response.data.role);
      });
      router.push({ name: "Home core" });
    })
    .catch((error) => {
      unsetCurrentUser();
      if (error.response) {
        store.dispatch("account/setMessages", "Sai tài khoản hoặc mật khẩu");
        store.dispatch("account/setIsAuthenticated", false);
      } else if (error.message) {
        store.dispatch("account/setMessages", "Lỗi hệ thống");
      }
    });
}

function getCurrentUser() {
  return http
    .get("/auth/user/")
    .then((response) => {
      const user = {
        role: response.data.role,
        email: response.data.email,
      };
      setCurrentUser(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function setCurrentUser(user) {
  store.dispatch("account/setUser", user);
}

function setToken(token) {
  setAxiosAuthToken(token);
  localStorage.setItem("token", token);
  store.dispatch("account/setToken", token);
}

function unsetCurrentUser(router) {
  setAxiosAuthToken("");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  store.dispatch("account/unsetUser");
  store.dispatch("account/setIsAuthenticated", false);
  store.dispatch("account/setMessages", "");
  router.push({ name: "Signin" });
}

function logout(router) {
  http.post("/auth/logout/").then(unsetCurrentUser(router));
}
