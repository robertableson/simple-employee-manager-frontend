<template>
  <v-dialog persistent v-model="employeeDialogOpen" max-width="500px">
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card>
        <v-card-title>
          Ajouter un employé
        </v-card-title>
        <v-card-text>

          <v-text-field
            validate-on-blur
            v-model="employeeForm.firstName"
            label="Prénom"
            prepend-icon="person"
            :rules="nameRules"
            required
          ></v-text-field>

          <v-text-field
            validate-on-blur
            v-model="employeeForm.lastName"
            label="Nom"
            prepend-icon="person"
            :rules="nameRules"
            required
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
              validate-on-blur
              slot="activator"
              label="Date de naissance"
              v-model="employeeForm.birthDate"
              prepend-icon="event"
              readonly
              :rules="dateRules"
              required
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
            validate-on-blur
            slot="activator"
            label="Date d'embauche"
            v-model="employeeForm.hireDate"
            prepend-icon="event"
            readonly
            :rules="dateRules"
            required
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
          validate-on-blur
          v-model="employeeForm.hourlySalary"
          type="number"
          label="Salaire horaire"
          prepend-icon="attach_money"
          :rules="wageRules"
          required
        ></v-text-field>

      </v-card-text>
      <v-card-actions>
        <v-btn flat color="primary" @click="closeAddEmployeeDialog">Fermer</v-btn>
        <v-btn flat color="primary" @click="submit">Ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
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
        id: 'eesafa4e6df46awd546',
        firstName: 'Raymond',
        lastName: 'Cormier',
        birthDate: '2017-11-11',
        hireDate: '2017-11-11',
        hourlySalary: 10
      },
      valid: true,
      nameRules: [
        (v) => !!v || 'Champ obligatoire'
      ],
      dateRules: [
        (v) => !!v || 'Champ obligatoire'
      ],
      wageRules: [
        (v) => !!v || 'Champ obligatoire'
      ],
      select: null
    }
  },
  methods: {
    closeAddEmployeeDialog () {
      this.employeeDialogOpen = false
    },
    s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    },
    guid () {
      return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
        this.s4() + '-' + this.s4() + this.s4() + this.s4()
    },

    submit () {
      if (this.$refs.form.validate()) {
        bus.$emit('addNewEmployee', this.employeeForm)
        this.closeAddEmployeeDialog()
        this.employeeForm.id = this.guid()
        /* this.employeeForm.firstName = ''
        this.employeeForm.lastName = ''
        this.employeeForm.birthDate = ''
        this.employeeForm.hireDate = ''
        this.employeeForm.hourlySalary = '' */
      }
    }
  },
  created () {
    bus.$on('openAddEmployeeDialog', () => {
      this.employeeDialogOpen = true
    })
  }
}
</script>
