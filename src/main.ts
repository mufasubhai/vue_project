import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";

// const vuetify = createVuetify()
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createVuetify())
app.use(createPinia());
app.use(router);

app.mount("#app");
