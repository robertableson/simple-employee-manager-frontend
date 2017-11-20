import Vue from 'vue'
import Router from 'vue-router'
import Employees from '@/components/Employees/MainEmployees'
import Dashboard from '@/components/Dashboard/MainDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/employes',
      name: 'Employees',
      component: Employees
    }
  ]
})
