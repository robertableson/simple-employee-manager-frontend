<template>
  <div>
    <v-btn
       fixed
       dark
       fab
       bottom
       right
       color="primary"
       @click="openAddEmployeeDialog"
     >
       <v-icon>add</v-icon>
     </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    openAddEmployeeDialog: function () {
      this.$emit('openAddEmployeeDialog')
    }
  }
}
</script>
