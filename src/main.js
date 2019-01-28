import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import routes from './routes'

// Vue Router configuration
const routerConfig = {
  routes,
  mode: 'history'
}
const router = new VueRouter(routerConfig)

// Vue configuration
Vue.config.productionTip = false

// Vue middleware
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
