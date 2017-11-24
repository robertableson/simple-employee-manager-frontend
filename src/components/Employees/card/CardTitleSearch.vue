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
  export default {
    data () {
      return {
        search: ''
      }
    },
    methods: {
      searchChanged (event) {
        this.$emit('searchChanged', event.target.value)
      }
    }
  }
</script>
