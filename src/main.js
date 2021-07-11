import Vue from 'vue';
import App from './App.vue';

import {text2 as data2,text3,data4} from "./data";
import text from "./data";
import {print} from "./functions";


print(text)
print(data2)
print(text3)
print(data4)


//Решение по секретке мне не очень нравится, так как можно нажимать так много что браузер повиснет
//Можно было очищать secret="" каждые пару минут через setInterval
var secret = '';
document.addEventListener('keydown', function(event) {
  secret = secret + event.key
  var pattern = "шпион";
  if(secret.indexOf(pattern) !== -1) {
    alert("Секретное задание: Отжаться от пола 20 раз. JS разработчик должен быть в форме.");
  }
});




Vue.config.productionTip = false;

var webstore = new Vue({
  render: (h) => h(App),
}).$mount('#app');
