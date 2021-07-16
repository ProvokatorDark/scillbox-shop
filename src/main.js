import Vue from 'vue';
import App from './App.vue';




//Решение по секретке мне не очень нравится, так как можно нажимать так много что браузер повиснет
//Можно было очищать secret="" каждые пару минут через setInterval
var secret = '';
document.addEventListener('keydown', function(event) {
  secret = secret + event.key
  var pattern = "шпион";
  if(secret.indexOf(pattern) !== -1) {
    alert("Секретное задание: Отжаться от пола 20 раз. JS разработчик должен быть в форме.");
    secret='';
  }
});
let timerId = setInterval(() => secret='', 60000);




Vue.config.productionTip = false;

var webstore = new Vue({
  render: (h) => h(App),
}).$mount('#app');
