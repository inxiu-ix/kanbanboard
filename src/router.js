import Vue from "vue";
import Router from 'vue-router'
import Home from './components/Home.vue'
import Registration from './components/Registration.vue'
import Auth from './components/Auth.vue'
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