// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import indexPage from './pages/index.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
var  router =new VueRouter({
    // mode:"history",
    routes:[
      {
        path:"/",
        component:indexPage
      }
    ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
