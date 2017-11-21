<template>

  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card color="green" class="white--text elevation-3">
          <v-card-text>
            <p class="display-1 text-xs-right mb-0 pt-3">{{this.employeesStats.hourlyAverageWage}} $</p>
            <p class="text-xs-right">Coût horaire</p>
            <p class="display-1 text-xs-right mb-0 pt-3">{{this.employeesStats.dailyAverageWage}} $</p>
            <p class="text-xs-right">Coût journalier</p>
            <p class="display-1 text-xs-right mb-0 pt-3">{{this.employeesStats.monthlyAverageWage}} $</p>
            <p class="text-xs-right">Coût mensuel</p>
            <p class="display-1 text-xs-right mb-0 pt-3">{{this.employeesStats.yearlyAverageWage}} $</p>
            <p class="text-xs-right">Coût annuel</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card fill-height color="indigo" class="white--text elevation-3">
              <v-card-text>
                <p class="display-1 text-xs-right mb-0 pt-3">{{this.employeeList.length}}</p>
                <p class="text-xs-right">Employés</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card raised color="red lighten-2" class="white--text elevation-3">
              <v-card-text>
                <p class="display-1 text-xs-right mb-0 pt-3">2 ans 3 mois et 21 jours</p>
                <p class="text-xs-right">Moyenne de durée en fonction</p>
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
        hourlyAverageWage: 0,
        dailyAverageWage: 0,
        monthlyAverageWage: 0,
        yearlyAverageWage: 0
      }
    }
  },
  methods: {
    calculateHourlyAverageWage: function () {
      var totalAmount = 0

      this.employeeList.forEach((e) => {
        totalAmount += e.hourlySalary
      })

      this.employeesStats.hourlyAverageWage = (totalAmount / this.employeeList.length).toFixed(2)
    },
    calculateDailyAverageWage: function () {
      this.employeesStats.dailyAverageWage = (this.employeesStats.hourlyAverageWage * 8).toFixed(2)
    },
    calculateMonthlyAverageWage: function () {
      this.employeesStats.monthlyAverageWage = (this.employeesStats.dailyAverageWage * 22).toFixed(2)
    },
    calculateYearlyAverageWage: function () {
      this.employeesStats.yearlyAverageWage = (this.employeesStats.monthlyAverageWage * 12).toFixed(2)
    }
  },
  mounted () {
    console.log(
      this.employeesStats.hourlyAverageWage + ' ' +
      this.employeesStats.dailyAverageWage + ' ' +
      this.employeesStats.monthlyAverageWage + ' ' +
      this.employeesStats.yearlyAverageWage
    )
    this.calculateHourlyAverageWage()
    this.calculateDailyAverageWage()
    this.calculateMonthlyAverageWage()
    this.calculateYearlyAverageWage()
    console.log(
      this.employeesStats.hourlyAverageWage + ' ' +
      this.employeesStats.dailyAverageWage + ' ' +
      this.employeesStats.monthlyAverageWage + ' ' +
      this.employeesStats.yearlyAverageWage
    )
  }
}
</script>
