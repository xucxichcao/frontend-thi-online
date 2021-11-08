const state = {
  ctdt: {},
};
const getters = {
  getCTDT(state) {
    return state.ctdt;
  },
};

const actions = {
  setCTDT(context, payload) {
    context.commit("SET_CTDT", payload);
  },
};

const mutations = {
  SET_CTDT(state, value) {
    state.ctdt = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
