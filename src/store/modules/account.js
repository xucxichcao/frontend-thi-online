const token = localStorage.getItem("token");

const state = token
  ? {
      user: {},
      isAuthenticated: true,
      token: token,
      message: "",
    }
  : {
      user: {},
      isAuthenticated: false,
      token: "",
      message: "",
    };
const getters = {
  getAuthen(state) {
    return state.isAuthenticated;
  },
  getUsername(state) {
    return state.user.username;
  },
  getMessage(state) {
    return state.message;
  },
};
const actions = {
  setIsAuthenticated(context, payload) {
    context.commit("SET_IS_AUTHENTICATED", payload);
  },
  setUser(context, payload) {
    context.commit("SET_CURRENT_USER", payload);
  },
  setToken(context, payload) {
    context.commit("SET_TOKEN", payload);
  },
  unsetUser(context) {
    context.commit("UNSET_CURRENT_USER");
  },
  setMessages(context, payload) {
    context.commit("SET_MESSAGE", payload);
  },
};
const mutations = {
  SET_IS_AUTHENTICATED(state, value) {
    state.isAuthenticated = value;
  },
  SET_CURRENT_USER(state, value) {
    state.user = value;
  },
  SET_TOKEN(state, value) {
    state.token = value;
  },
  UNSET_CURRENT_USER(state) {
    state.user = {};
    state.isAuthenticated = false;
    state.token = "";
  },
  SET_MESSAGE(state, value) {
    state.message = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
