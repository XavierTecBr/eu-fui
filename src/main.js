import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
//AIzaSyDntMq2BSCBkmA-aJWa3CNP_wOisEOtLpU
