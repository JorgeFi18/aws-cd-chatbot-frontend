import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRobot, faUser, faPaperPlane, faGear } from '@fortawesome/free-solid-svg-icons';

library.add(faRobot);
library.add(faUser);
library.add(faPaperPlane);
library.add(faGear);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
