import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

library.add(fas);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
