<template>
  <v-card-title>
    Employés
    <v-spacer></v-spacer>
    <v-text-field
      append-icon="search"
      label="Search"
      single-line
      hide-details
      v-model="search"
       @keyup="searchChanged"
    ></v-text-field>
  </v-card-title>
</template>

<script>
import {bus} from '../../../main'

export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchChanged (event) {
      bus.$emit('searchChanged', event.target.value)
    }
  }
}
</script>
