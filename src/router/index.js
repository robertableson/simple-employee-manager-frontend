import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Employees from '@/components/Employees/MainEmployees'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main
    },
    {
      path: '/employes',
      name: 'Employees',
      component: Employees
    }
  ]
})
