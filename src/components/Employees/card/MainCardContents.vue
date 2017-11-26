<template>
  <v-card>
    <card-title-search v-on:searchChanged="searchChanged($event)"></card-title-search>
    <card-table v-bind:search="search"></card-table>
  </v-card>
</template>

<script>
  import CardTitleSearch from './CardTitleSearch.vue'
  import CardTable from './CardTable.vue'
  import {bus} from '../../../main'

  export default {
    components: {
      'card-title-search': CardTitleSearch,
      'card-table': CardTable
    },
    data () {
      return {
        search: ''
      }
    },
    methods: {
      searchChanged (newSearch) {
        this.search = newSearch
      }
    },
    created () {
      bus.$on('searchChanged', (searchQuery) => {
        this.search = searchQuery
      })
    },
    beforeDestroy () {
      bus.$off('searchChanged')
    }
  }
</script>
