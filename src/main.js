import Vue from 'vue'
import App from './App.vue'
import "./styles/gloable.less"
import router from './router'
import showMessage from '@/utils/showMessage'
import '@/mock'

Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false

import './api/banner';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
