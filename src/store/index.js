import Vue from "vue";
import Vuex from "vuex";

import account from "./modules/account";
import attempt from "./modules/attempt";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    attempt,
  },
});
