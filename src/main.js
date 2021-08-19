import Vue from 'vue'
import App from './App.vue'
import "./styles/gloable.less"
import router from './router'
import showMessage from '@/utils/showMessage'
import '@/mock'
import loading from './directives/loading'

Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false
Vue.directive('loading', loading)
import './api/banner';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//测试
import * as blogApi from './api/blog'
blogApi.getBlogTypes().then(r => {
  console.log('博客分类', r);
})
blogApi.getBlogs(1, 5, 3).then(r => {
  console.log('博客列表', r)
})