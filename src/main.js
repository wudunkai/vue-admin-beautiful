import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins";

if (process.env.NODE_ENV === "staging") {
  const { mockXHR } = require("../mock/static");
  mockXHR();
}

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.performance = true;
new Vue({
  el: "#BYUI_APP",
  router,
  store,
  render: (h) => h(App),
});
