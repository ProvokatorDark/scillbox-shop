import Vue from 'vue';
import App from './App.vue';

import {text,text2} from "./data";
import print from "./functions";

print(text)
print(text2)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
