<template>
  <v-card-title>
    <v-layout row wrap>
      <v-flex md6>
        Employés
      </v-flex>
      <v-flex md6>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
          @keyup="searchChanged"
          class="searchField"
        ></v-text-field>
      </v-flex>
    </v-layout>
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

<style>
  .searchField{
    padding-top: 0;
  }
  .searchField label{
    top: auto;
  }
</style>
