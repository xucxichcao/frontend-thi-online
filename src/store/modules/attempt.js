const state = {
  attempt: {},
};
const getters = {
  getAttempt(state) {
    return state.attempt;
  },
};

const actions = {
  setAttempt(context, payload) {
    context.commit("SET_ATTEMPT", payload);
  },
};

const mutations = {
  SET_ATTEMPT(state, value) {
    state.attempt = value;
    // console.log(state.attempt.results);
    let noidung = [];
    for (let i = 0; i < state.attempt.results.length; i++) {
      noidung = state.attempt.results[i]["noiDung"];
      noidung = JSON.parse(noidung);
    }
    console.log(noidung);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
