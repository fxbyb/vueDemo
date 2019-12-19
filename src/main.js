// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/main.css';
import sharedComponents from '@/components/shared/services/componentInstall.service';
import apiService from '@/components/shared/services/api.service';
import store from './store/index'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(sharedComponents)
Vue.prototype.$axios = Axios;
Vue.prototype.$apiService = apiService;

/* eslint-disable no-new */
new Vue({
  el: '#new-car-project',
  router,
  components: {
    App
  },
  store,
  template: '<App/>'
})
