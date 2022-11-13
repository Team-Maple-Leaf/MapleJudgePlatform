import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
import mitt from "mitt";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

loadFonts();

const pinia = createPinia();
const emitter = mitt();
const app = createApp(App);

app.provide("emitter", emitter);
app.use(pinia);
app.use(vuetify);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    "978071542851-hfj4tss7cbf8g2a80r5ad3ictrksqh1j.apps.googleusercontent.com",
});

app.mount("#app");
