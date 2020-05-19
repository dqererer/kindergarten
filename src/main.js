import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import axios from '../node_modules/axios'
import axios from 'axios'
import store from './vuex/index.js'
import router from './router/index'
import './assets/font_1589564_qgwysnzl6d/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
// Vue.use(axios);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
//配置BaseUrl
// axios.defaults.baseURL = '/api'
new Vue({
  render: h => h(App),
  router: router,
  store: store,
  axios: axios,
}).$mount('#app')
