<template>
  <div>
    <employee-salary-overview></employee-salary-overview>
  </div>
</template>

<script>
import EmployeeSalaryOverview from './EmployeeSalaryOverview.vue'

export default {
  components: {
    'employee-salary-overview': EmployeeSalaryOverview
  },
  data () {
    return {
    }
  }
}
</script>
