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
    "1012799175557-pfjjej3r66gsv6as8cj0r0b55ihnuat4.apps.googleusercontent.com",
});

app.mount("#app");
