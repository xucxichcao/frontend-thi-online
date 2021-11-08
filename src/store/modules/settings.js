const state = {
  personal: {},
};

const getters = {
  getPersonal(state) {
    return state.personal;
  },
};

const actions = {
  setPersonal(context, payload) {
    context.commit("SET_PERSONAL", payload);
  },
};

const mutations = {
  SET_PERSONAL(state, value) {
    state.personal = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
