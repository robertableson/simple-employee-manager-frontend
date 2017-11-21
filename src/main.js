// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

export const bus = new Vue()
export var testEmployeeList = [
  {
    value: false,
    id: 1,
    firstName: 'Billy1',
    lastName: 'Bong1',
    birthDate: '2017-01-01',
    hireDate: '2017-01-01',
    hourlySalary: 11
  },
  {
    value: false,
    id: 2,
    firstName: 'Billy2',
    lastName: 'Bong2',
    birthDate: '2017-02-0',
    hireDate: '2017-02-02',
    hourlySalary: 12
  }
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
