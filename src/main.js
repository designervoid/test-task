import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from "buefy";

import "./main.scss";

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faGlobe, faHome, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGlobe, faHome, faArrowRight);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
