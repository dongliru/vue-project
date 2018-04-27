// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import indexPage from './pages/index.vue'
import detailPage from './pages/detail.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import advertising from './components/advertising.vue'
import analysic from './components/analysic.vue'
import forecast from './components/forecast.vue'
import statistics from './components/statistics.vue'
// 控制台不打印提示信息
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(elementUI)
// 配置前端路由
var  router =new VueRouter({
    mode:"history",
    routes:[
      {
        path:"/",
        component:indexPage,
      },
      {
        path:'/detail',
        component:detailPage,
        children:[
           {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path:'advertising',
          component:advertising
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path:'analysic',
          component:analysic
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path:'forecast',
          component:forecast
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path:'statistics',
          component:statistics
        }
        ]
      },
     
    ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
