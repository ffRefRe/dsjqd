import Vue from 'vue'
import Router from 'vue-router'
import Login from '../user/login'
import Register from '../user/register'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },


  ]
})
