<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card color="green lighten-3" class="white--text elevation-3" id="cardEmployeeSalaryOverview">
          <v-card-text class="childOfPseudo">
            <p class="display-1 text-xs-right mb-0 pt-3">{{ formatNumber(this.employeesStats.hourlyTotalWage) }} $</p>
            <p class="text-xs-right">Coût horaire</p>
            <p class="display-1 text-xs-right mb-0 pt-3">{{ formatNumber(this.employeesStats.dailyTotalWage) }} $</p>
            <p class="text-xs-right">Coût journalier</p>
            <p class="display-1 text-xs-right mb-0 pt-3">{{ formatNumber(this.employeesStats.monthlyTotalWage) }} $</p>
            <p class="text-xs-right">Coût mensuel</p>
            <p class="display-1 text-xs-right mb-0 pt-3">{{ formatNumber(this.employeesStats.yearlyTotalWage) }} $</p>
            <p class="text-xs-right">Coût annuel</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card fill-height color="indigo lighten-3" class="white--text elevation-3" id="cardEmployeeCountOverview">
              <v-card-text class="childOfPseudo">
                <p class="display-1 text-xs-right mb-0 pt-3">{{this.employeeList.length}}</p>
                <p class="text-xs-right">Employés</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card raised color="red lighten-3" class="white--text elevation-3" id="cardEmployeeDurationOverview">
              <v-card-text class="childOfPseudo">
                <p class="display-1 text-xs-right mb-0 pt-3">{{ formatNumber(this.employeesStats.averageHireDaysCount) }} jours</p>
                <p class="text-xs-right">Durée moyenne d'emploiement</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {testEmployeeList} from '../../main'

export default {
  data () {
    return {
      employeeList: testEmployeeList,
      employeesStats: {
        hourlyTotalWage: 0,
        dailyTotalWage: 0,
        monthlyTotalWage: 0,
        yearlyTotalWage: 0,
        averageHireDaysCount: 0
      }
    }
  },
  methods: {
    calculateHourlyTotalWage: function () {
      var totalAmount = 0

      this.employeeList.forEach((e) => {
        totalAmount += e.hourlySalary
      })

      this.employeesStats.hourlyTotalWage = totalAmount.toFixed(2)
    },
    calculateDailyTotalWage: function () {
      this.employeesStats.dailyTotalWage = (this.employeesStats.hourlyTotalWage * 8).toFixed(2)
    },
    calculateMonthlyTotalWage: function () {
      this.employeesStats.monthlyTotalWage = (this.employeesStats.dailyTotalWage * 22).toFixed(2)
    },
    calculateYearlyTotalWage: function () {
      this.employeesStats.yearlyTotalWage = (this.employeesStats.monthlyTotalWage * 12).toFixed(2)
    },
    calculateAverageHireTime: function () {
      var totalDays = 0

      this.employeeList.forEach((e) => {
        var timeSinceHireInMs = new Date().getTime() - this.toDate(e.hireDate).getTime()
        var daysCount = Math.ceil(timeSinceHireInMs / (1000 * 3600 * 24))
        totalDays += daysCount
      })

      this.employeesStats.averageHireDaysCount = (totalDays / this.employeeList.length).toFixed(1)
    },
    toDate: function (dateStr) {
      var parts = dateStr.split('-')
      return new Date(parts[0], parts[1] - 1, parts[2])
    },
    formatNumber: function (num) {
      var formattedNum = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      return formattedNum
    }
  },
  mounted () {
    this.calculateHourlyTotalWage()
    this.calculateDailyTotalWage()
    this.calculateMonthlyTotalWage()
    this.calculateYearlyTotalWage()
    this.calculateAverageHireTime()
  }
}
</script>

<style scoped>
  #cardEmployeeSalaryOverview, #cardEmployeeCountOverview, #cardEmployeeDurationOverview{
    position: relative;
    z-index: 0;
  }
  #cardEmployeeSalaryOverview .childOfPseudo, #cardEmployeeCountOverview .childOfPseudo, #cardEmployeeDurationOverview .childOfPseudo{
    z-index: 1;
  }
  #cardEmployeeSalaryOverview:after, #cardEmployeeCountOverview:after, #cardEmployeeDurationOverview:after{
    z-index: -1;
    font-family: FontAwesome;
    position: absolute;
    top: 50%;
    left: 20%;
    margin-right: -80%;
    transform: translate(-20%, -50%)
  }
  #cardEmployeeSalaryOverview:after{
    content: "\f155";
    font-size: 20rem;
    color: #81C784;
  }
  #cardEmployeeCountOverview:after{
    content: "\f0c0";
    font-size: 5rem;
    color: #7986CB;
  }
  #cardEmployeeDurationOverview:after{
    content: "\f017";
    font-size: 5rem;
    color: #E57373;
  }
</style>
