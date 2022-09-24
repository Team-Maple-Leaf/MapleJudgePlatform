import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import "vuetify/styles";

loadFonts();

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
