import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales/i18n.js";
import 'vuetify/styles';
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueMask from "@devindex/vue-mask";

const app = createApp({
  render: () => h(App)
});

app.config.productionTip = false;
app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(VueMask);

app.mount("#wis2box-admin");