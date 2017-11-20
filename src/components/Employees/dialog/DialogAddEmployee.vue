<template>
  <v-dialog persistent v-model="employeeDialogOpen" max-width="500px">
    <v-card>
      <v-card-title>
        Ajouter
      </v-card-title>
      <v-card-text>

        <v-text-field
          v-model="employee.firstName"
          name="input-1"
          label="Prénom"
          id="testing"
          prepend-icon="person"
        ></v-text-field>

        <v-text-field
          name="input-1"
          label="Nom"
          id="testing"
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
            v-model="date"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable actions>
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
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable actions>
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
        type="number"
        name="input-1"
        label="Salaire"
        id="testing"
        prepend-icon="attach_money"
      ></v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" flat @click="closeAddEmployeeDialog">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    'employeeDialogOpen'
  ],
  data () {
    return {
      date: null,
      employee: {
        firstName: 'Billy',
        lastName: 'Bong',
        birthDate: '1111-11-11',
        hireDate: '1111-11-11',
        hourlySalary: 25
      },
      items: [
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        }
      ],
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ]
    }
  },
  methods: {
    closeAddEmployeeDialog: function () {
      this.$emit('closeAddEmployeeDialog')
    }
  }
}
</script>
