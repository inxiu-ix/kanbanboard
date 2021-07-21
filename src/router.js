import Vue from "vue";
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registration from './views/Registration.vue'
import Auth from './views/Auth.vue'
import AppBoard from '@/views/AppBoard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/board',
      component: AppBoard
    }
  ]
})