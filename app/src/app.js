import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'

import App from '~page/app.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios

const router = new VueRouter({
  mode: 'history',
  routes: [
  ],
})

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
})

const app = new Vue({
  el: '#v-app',
  router: router,
  store: store,
  render: h => h(App),
})
