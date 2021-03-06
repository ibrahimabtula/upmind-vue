import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import './assets/scss/app.scss'

Vue.use(Buefy, { defaultIconPack: 'fa' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
