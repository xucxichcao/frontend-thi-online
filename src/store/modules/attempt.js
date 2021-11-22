const state = {
  ctdt: {},
  tenPhongThi: "",
  thoiGianKetThuc: 0,
};
const getters = {
  getCTDT(state) {
    return state.ctdt;
  },
  getTenPhongThi(state) {
    return state.tenPhongThi;
  },
  getThoiGianKetThuc(state) {
    return state.thoiGianKetThuc;
  },
};

const actions = {
  setCTDT(context, payload) {
    context.commit("SET_CTDT", payload);
  },
  setTenPhongThi(context, payload) {
    context.commit("SET_TEN_PHONG_THI", payload);
  },
  setThoiGianKetThuc(context, payload) {
    context.commit("SET_THOI_GIAN_KET_THUC", payload);
  },
};

const mutations = {
  SET_CTDT(state, value) {
    state.ctdt = value;
  },
  SET_TEN_PHONG_THI(state, value) {
    state.tenPhongThi = value;
  },
  SET_THOI_GIAN_KET_THUC(state, value) {
    state.thoiGianKetThuc = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
