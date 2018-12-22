import Vue from 'vue'
import Router from 'vue-router'
import Login from '../user/login'
import LoginM from '../user/login_master'
import Register from '../user/register'
import Header from '../components/Header'
import Home from '../user/home'

import AdSponsor from '../user/page/adSponsor'
import MyAd from '../user/page/myAd'
import AdPut from '../user/page/adPut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/adSponsor',
          component: AdSponsor
        },
        {
          path: '/myAd',
          component: MyAd
        },
        {
          path: '/adPut',
          component: AdPut
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/loginma',
      name: 'loginma',
      component: LoginM
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/head',
      component: Header
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
