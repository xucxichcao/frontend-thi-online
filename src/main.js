import Vue from "vue";
import App from "./App.vue";
import "heyui/themes/index.less";
import HeyUI from "heyui";
import en from "heyui/dist/locale/en-US";
import router from "./router";
import store from "./store";

Vue.use(HeyUI, { locale: en });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
