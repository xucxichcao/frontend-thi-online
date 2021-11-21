const state = {
  ctdt: {},
  tenPhongThi: "",
  diem: {},
};
const getters = {
  getCTDT(state) {
    return state.ctdt;
  },
  getTenPhongThi(state) {
    return state.tenPhongThi;
  },
  getDiem(state) {
    return state.diem;
  },
};

const actions = {
  setCTDT(context, payload) {
    context.commit("SET_CTDT", payload);
  },
  setTenPhongThi(context, payload) {
    context.commit("SET_TEN_PHONG_THI", payload);
  },
  setDiem(context, payload) {
    context.commit("SET_DIEM", payload);
  },
};

const mutations = {
  SET_CTDT(state, value) {
    state.ctdt = value;
  },
  SET_TEN_PHONG_THI(state, value) {
    state.tenPhongThi = value;
  },
  SET_DIEM(state, value) {
    state.diem = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
