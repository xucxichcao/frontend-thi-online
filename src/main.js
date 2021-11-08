import Vue from "vue";
import App from "./App.vue";
import "heyui/themes/index.less";
import HeyUI from "heyui";
import en from "heyui/dist/locale/en-US";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faEyeSlash,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store";
import VueBreadcrumbs from "vue-2-breadcrumbs";

library.add(faEye, faEyeSlash, faSignOutAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(HeyUI, { locale: en });
Vue.use(VueBreadcrumbs);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
