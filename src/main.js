// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/base.css'
Vue.config.productionTip = false

import $ from "jquery"

import Vuetree from 'vue-simple-tree'
 
Vue.use(Vuetree)

import print from 'vue-print-nb'
Vue.use(print)

import ModuleLibrary from '@coreui/vue';
// Install this library
Vue.use(ModuleLibrary);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
