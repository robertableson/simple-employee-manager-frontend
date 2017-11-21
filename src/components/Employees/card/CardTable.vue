<template>
  <div>
  <v-data-table
      v-model="selected"
      v-bind:headers="headers"
      v-bind:items="items"
      select-all
      v-bind:pagination.sync="pagination"
      item-key="birthDate"
      class="elevation-1"
    >
    <template slot="headers" slot-scope="props">
      <tr>
        <th>
          <v-checkbox
            primary
            hide-details
            @click="toggleAll"
            :input-value="props.all"
            :indeterminate="props.indeterminate"
          ></v-checkbox>
        </th>
        <th v-for="header in props.headers" :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          primary
          hide-details
          v-model="props.selected"
          @change="onCheckboxChange"
        ></v-checkbox>
      </td>
      <td class="text-xs-right">
        <v-edit-dialog
          @open="tmp = props.item.firstName"
          @save="props.item.firstName = tmp || props.item.firstName"
          large
          lazy
        >
          <div>{{ props.item.firstName }}</div>
          <div slot="input" class="mt-3 title">Modifier le prénom</div>
          <v-text-field
            slot="input"
            label="Edit"
            v-model="tmp"
            single-line
            counter
            autofocus
            :rules="[max25chars]"
          ></v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-right">
        <v-edit-dialog
          @open="tmp = props.item.lastName"
          @save="props.item.lastName = tmp || props.item.lastName"
          large
          lazy
        >
          <div>{{ props.item.lastName }}</div>
          <div slot="input" class="mt-3 title">Modifier le nom</div>
          <v-text-field
            slot="input"
            label="Edit"
            v-model="tmp"
            single-line
            counter
            autofocus
            :rules="[max25chars]"
          ></v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-right">
        <v-edit-dialog
          @open="tmp = props.item.birthDate"
          @save="props.item.birthDate = tmp || props.item.birthDate"
          large
          lazy
        >
          <div>{{ props.item.birthDate }}</div>
          <div slot="input" class="mt-3 title">Modifier la date de naissance</div>
          <v-text-field
            slot="input"
            label="Edit"
            v-model="tmp"
            single-line
            counter
            autofocus
            :rules="[max25chars]"
          ></v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-right">
        <v-edit-dialog
          @open="tmp = props.item.hireDate"
          @save="props.item.hireDate = tmp || props.item.hireDate"
          large
          lazy
        >
          <div>{{ props.item.hireDate }}</div>
          <div slot="input" class="mt-3 title">Modifier la date d'embauche</div>
          <v-text-field
            slot="input"
            label="Edit"
            v-model="tmp"
            single-line
            counter
            autofocus
            :rules="[max25chars]"
          ></v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-right">
        <v-edit-dialog
          @open="tmp = props.item.hourlySalary"
          @save="props.item.hourlySalary = tmp || props.item.hourlySalary"
          large
          lazy
        >
          <div>{{ props.item.hourlySalary }}</div>
          <div slot="input" class="mt-3 title">Modifier salaire horaire</div>
          <v-text-field
            slot="input"
            label="Edit"
            v-model="tmp"
            single-line
            counter
            autofocus
            :rules="[max25chars]"
          ></v-text-field>
        </v-edit-dialog>
      </td>
    </template>
  </v-data-table>

  <v-snackbar
     :timeout="timeout"
     :color="color"
     :multi-line="mode === 'multi-line'"
     :vertical="mode === 'vertical'"
     v-model="snackbar"
   >
     {{ text }}
     <v-btn color="primary" @click="undoEmployeesDelete">Annuler</v-btn>
     <v-btn dark flat @click="snackbar = false">Ok</v-btn>
   </v-snackbar>
</div>
</template>

<script>
import {bus, testEmployeeList} from '../../../main'

export default {
  props: [
    'search'
  ],
  data () {
    return {
      items: testEmployeeList,
      snackbar: false,
      color: '',
      mode: '',
      timeout: 10000,
      text: 'Suppression réussie.',
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      undoSelected: [],
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      headers: [
        { text: 'Prénom', value: 'firstName' },
        { text: 'Nom', value: 'lastName' },
        { text: 'Date de naissance', value: 'birthDate' },
        { text: 'Date d\'embauche', value: 'hireDate' },
        { text: 'Salaire horaire', value: 'hourlySalary' }
      ]
    }
  },
  methods: {
    onCheckboxChange () {
      bus.$emit('onEmployeesSelected', this.selected)
    },
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()

      this.onCheckboxChange()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    undoEmployeesDelete () {
      this.selected = this.undoSelected
      this.selected.forEach((s) => {
        this.items.push(s)
      })
      this.snackbar = false
      bus.$emit('undoEmployeesDelete')
    }
  },
  created () {
    bus.$on('addNewEmployee', (newEmployee) => {
      var emp = Object.assign({}, newEmployee)
      this.items.push(emp)
    })
    bus.$on('deleteSelectedEmployees', () => {
      if (this.selected.length > 0) {
        this.selected.forEach((s) => {
          const indexInTable = this.items.indexOf(s)
          this.items.splice(indexInTable, 1)
        })

        this.snackbar = true
        this.undoSelected = this.selected
        this.selected = []
      }
    })
  }
}
</script>
