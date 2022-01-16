const state = {
  ctdt: {},
  tenPhongThi: "",
  thoiGianKetThuc: 0,
  diem: {},
  key: "",
  kieuThi: null,
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
  getDiem(state) {
    return state.diem;
  },
  getKey(state) {
    return state.key;
  },
  getKieuThi(state) {
    return state.kieuThi;
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
  setDiem(context, payload) {
    context.commit("SET_DIEM", payload);
  },
  setKey(context, payload) {
    context.commit("SET_KEY", payload);
  },
  setKieuThi(context, payload) {
    context.commit("SET_KIEU_THI", payload);
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
  SET_DIEM(state, value) {
    state.diem = value;
  },
  SET_KEY(state, value) {
    state.key = value;
  },
  SET_KIEU_THI(state, value) {
    state.kieuThi = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
