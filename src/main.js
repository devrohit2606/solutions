import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/monokai.css";
import "../public/css/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import Markdown from "vue3-markdown-it";

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.use(Markdown);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
