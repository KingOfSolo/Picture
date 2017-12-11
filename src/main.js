// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import './theme.css'
import axiosService from '../axiosService'
import VueCookie from 'vue-cookie'

// import $ from 'jquery'
Vue.config.productionTip = false
Vue.prototype.$http = axiosService

Vue.use(Element)
Vue.use(VueCookie)
// Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
