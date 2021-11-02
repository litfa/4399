import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/main.less'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
