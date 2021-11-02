import store from "../store/index";
import http from "../http-common";
import { setAxiosAuthToken } from "../helpers/auth-header";

export const userService = {
  login,
  logout,
};

function login(email, password) {
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
    })
    .catch((error) => {
      unsetCurrentUser();
      if (error.response) {
        store.dispatch(
          "account/setMessage",
          error.response.data["non_field_error"]
        );
        store.dispatch("account/setIsAuthenticated", false);
      } else if (error.message) {
        store.dispatch("account/setMessage", error.message);
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
  localStorage.setItem("user", JSON.stringify(user));
  store.dispatch("account/setUser", user);
}

function setToken(token) {
  setAxiosAuthToken(token);
  localStorage.setItem("token", token);
  store.dispatch("account/setToken", token);
}

function unsetCurrentUser() {
  setAxiosAuthToken("");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  store.dispatch("account/unsetUser");
}

function logout() {
  http.post("/auth/logout/").then(unsetCurrentUser);
}
