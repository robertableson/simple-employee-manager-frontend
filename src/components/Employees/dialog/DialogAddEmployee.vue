<template>
  <v-dialog persistent v-model="employeeDialogOpen" max-width="500px">
    <v-card>
      <v-card-title>
        Ajouter un employé
      </v-card-title>
      <v-card-text>

        <v-text-field
          v-model="employeeForm.firstName"
          label="Prénom"
          prepend-icon="person"
        ></v-text-field>

        <v-text-field
          v-model="employeeForm.lastName"
          label="Nom"
          prepend-icon="person"
        ></v-text-field>

        <v-menu
          lazy
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            label="Date de naissance"
            v-model="employeeForm.birthDate"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="employeeForm.birthDate" no-title scrollable actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>

        <v-menu
          lazy
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
        >
        <v-text-field
          slot="activator"
          label="Date d'embauche"
          v-model="employeeForm.hireDate"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="employeeForm.hireDate" no-title scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>

      <v-text-field
        v-model="employeeForm.hourlySalary"
        type="number"
        label="Salaire horaire"
        prepend-icon="attach_money"
      ></v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn flat color="primary" @click="closeAddEmployeeDialog">Fermer</v-btn>
      <v-btn flat color="primary" @click="addNewEmployee">Ajouter</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {bus} from '../../../main'

export default {
  data () {
    return {
      employeeDialogOpen: false,
      date: null,
      employeeForm: {
        firstName: 'a',
        lastName: 'a',
        birthDate: '2017-11-11',
        hireDate: '2017-11-11',
        hourlySalary: 10
      }
    }
  },
  methods: {
    closeAddEmployeeDialog: function () {
      this.employeeDialogOpen = false
    },
    addNewEmployee: function () {
      bus.$emit('addNewEmployee', this.employeeForm)
      this.closeAddEmployeeDialog()
      this.employeeForm.firstName = ''
      this.employeeForm.lastName = ''
      this.employeeForm.birthDate = ''
      this.employeeForm.hireDate = ''
      this.employeeForm.hourlySalary = 10
    }
  },
  created () {
    bus.$on('openAddEmployeeDialog', () => {
      this.employeeDialogOpen = true
    })
  }
}
</script>
