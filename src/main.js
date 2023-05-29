import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 引入element-ui样式
Vue.use(ElementUI); // 全局使用element-ui

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
