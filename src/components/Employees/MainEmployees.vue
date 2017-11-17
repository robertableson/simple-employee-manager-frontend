<template>
  <div>
    <v-btn
       fixed
       dark
       fab
       bottom
       right
       color="primary"
     >
       <v-icon>add</v-icon>
     </v-btn>
  <v-card>

    <v-card-title>
      Employés
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:search="search"
      v-model="selected"
      item-key="id"
      select-all
      class="elevation-1"
    >
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
  </v-card>
</div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        selected: [],
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        headers: [
          { text: 'Prénom', value: 'firstName' },
          { text: 'Nom', value: 'lastName' },
          { text: 'Date de naissance', value: 'birthDate' },
          { text: 'Date d\'embauche', value: 'hireDate' },
          { text: 'Salaire horaire', value: 'hourlySalary' }
        ],
        items: [
          {
            value: false,
            id: 1,
            firstName: 'Raq',
            lastName: 'Zik',
            birthDate: '1111-11-11',
            hireDate: '1111-11-11',
            hourlySalary: 24
          },
          {
            value: false,
            id: 2,
            firstName: 'Billy',
            lastName: 'Bong',
            birthDate: '1111-11-11',
            hireDate: '1111-11-11',
            hourlySalary: 244
          },
          {
            value: false,
            id: 3,
            firstName: 'Raq',
            lastName: 'Zik',
            birthDate: '1111-11-11',
            hireDate: '1111-11-11',
            hourlySalary: 24
          },
          {
            value: false,
            id: 4,
            firstName: 'Raq',
            lastName: 'Zik',
            birthDate: '1111-11-11',
            hireDate: '1111-11-11',
            hourlySalary: 24
          },
          {
            value: false,
            id: 5,
            firstName: 'Raq',
            lastName: 'Zik',
            birthDate: '1111-11-11',
            hireDate: '1111-11-11',
            hourlySalary: 24
          }
        ]
      }
    },
    methods: {
      onCheckboxChange (newValue, oldValue) {
        console.log(this.selected)
        this.title = 'VALUE: ' + (newValue ? 'TRUE' : 'FALSE')
      }
    }
  }
</script>

<style lang="css">
</style>
