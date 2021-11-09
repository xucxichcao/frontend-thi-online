const state = {
  ctdt: {},
  tenPhongThi: "",
};
const getters = {
  getCTDT(state) {
    return state.ctdt;
  },
  getTenPhongThi(state) {
    return state.tenPhongThi;
  },
};

const actions = {
  setCTDT(context, payload) {
    context.commit("SET_CTDT", payload);
  },
  setTenPhongThi(context, payload) {
    context.commit("SET_TEN_PHONG_THI", payload);
  },
};

const mutations = {
  SET_CTDT(state, value) {
    state.ctdt = value;
  },
  SET_TEN_PHONG_THI(state, value) {
    state.tenPhongThi = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
