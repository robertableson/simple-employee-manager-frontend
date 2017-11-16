<template>
  <v-card>
    <v-card-title>
      Employés
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="table.search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="table.headers"
        v-bind:items="table.items"
        v-bind:search="table.search"
        rows-per-page-text="Résultats par page"
      >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          <v-edit-dialog
            @open="table.tmp = props.item.firstName"
            @save="props.item.firstName = table.tmp || props.item.firstName"
            large
            lazy
            cancel-text="allo"
          >
            <div>{{ props.item.firstName }}</div>
            <div slot="input" class="mt-3 title">Modifier prénom</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="table.tmp"
              single-line
              counter
              autofocus
              :rules="[table.max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="table.tmp = props.item.lastName"
            @save="props.item.lastName = table.tmp || props.item.lastName"
            large
            lazy
          >
            <div>{{ props.item.lastName }}</div>
            <div slot="input" class="mt-3 title">Modifier nom</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="table.tmp"
              single-line
              counter
              autofocus
              :rules="[table.max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="table.tmp = props.item.birthDate"
            @save="props.item.birthDate = table.tmp || props.item.birthDate"
            large
            lazy
          >
            <div>{{ props.item.birthDate }}</div>
            <div slot="input" class="mt-3 title">Modifier date de naissance</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="table.tmp"
              single-line
              counter
              autofocus
              :rules="[table.max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="table.tmp = props.item.hireDate"
            @save="props.item.hireDate = table.tmp || props.item.hireDate"
            large
            lazy
          >
            <div>{{ props.item.hireDate }}</div>
            <div slot="input" class="mt-3 title">Modifier date d'embauche</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="table.tmp"
              single-line
              counter
              autofocus
              :rules="[table.max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="table.tmp = props.item.hourlySalary"
            @save="props.item.hourlySalary = table.tmp || props.item.hourlySalary"
            large
            lazy
          >
            <div>{{ props.item.hourlySalary }}</div>
            <div slot="input" class="mt-3 title">Modifier salaire horaire</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="table.tmp"
              single-line
              counter
              autofocus
              :rules="[table.max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        De {{ pageStart }} à {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        table: {
          max25chars: (v) => v.length <= 25 || 'Input too long!',
          tmp: '',
          search: '',
          pagination: {},
          headers: [
            {text: 'Prénom', align: 'left', value: 'firstName'},
            {text: 'Nom', value: 'lastName'},
            {text: 'Date de naissance', value: 'birthDate'},
            {text: 'Date d\'embauche', value: 'hireDate'},
            {text: 'Salaire horaire', value: 'hourlySalary'}
          ],
          items: [
            {
              value: false,
              firstName: 'Fernand',
              lastName: 'Lacasse',
              birthDate: '1111-11-11',
              hireDate: '1111-11-11',
              hourlySalary: 25
            }
          ]
        }
      }
    }
  }
</script>

<style lang="css">
</style>
