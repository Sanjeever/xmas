import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/dot-loader.css";
import "aplayer/dist/APlayer.min.css";

const app = createApp(App);

app.use(router);

setTimeout(() => {
  app.mount("#app");
}, 1500);
