import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSimpleAlert from 'vue-simple-alert'

Vue.use(VueSimpleAlert)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
