<template>

  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card color="green" class="white--text elevation-3">
          <v-card-text>
            <p class="display-1 text-xs-right mb-0 pt-3">76 $</p>
            <p class="text-xs-right">Coût horaire</p>
            <p class="display-1 text-xs-right mb-0 pt-3">7687 $</p>
            <p class="text-xs-right">Coût mensuel</p>
            <p class="display-1 text-xs-right mb-0 pt-3">768765 $</p>
            <p class="text-xs-right">Coût annuel</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card fill-height color="indigo" class="white--text elevation-3">
              <v-card-text>
                <p class="display-1 text-xs-right mb-0 pt-3">5</p>
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
      EmployeeList: testEmployeeList
    }
  },
  mounted () {
    console.log(this.items)
  }
}
</script>
