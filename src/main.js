import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './router';
import store from '@/store/store';
import './plugins/httpClient';

Vue.config.productionTip = false;
Vue.use(Vuelidate)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
