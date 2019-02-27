import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Index'
import Index from '@/components/Index/Index'
import Nav from '@/components/Index/Nav'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [{
      path: '/',
      name: 'Nav',
      component: Nav
    }]
  }]
})
