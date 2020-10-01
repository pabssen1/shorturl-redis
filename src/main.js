import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Clipboard from "v-clipboard";
import { auth } from "./firebase";
import store from "./store";

import {
  IconsPlugin,
  ButtonPlugin,
  LayoutPlugin,
  FormPlugin,
  InputGroupPlugin,
  FormInputPlugin
} from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(IconsPlugin);
Vue.use(ButtonPlugin);
Vue.use(LayoutPlugin);
Vue.use(FormPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(Clipboard);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");

auth.onAuthStateChanged(function(user) {
  if (user) {
    store.state.isAnonymous = user.isAnonymous;
    store.state.user = { uid: user.uid };
  } else {
    auth.signInAnonymously().catch(function(error) {
      console.log(error.message);
    });
  }
});
