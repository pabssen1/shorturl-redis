import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Clipboard from "v-clipboard";
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
  render: h => h(App)
}).$mount("#app");
