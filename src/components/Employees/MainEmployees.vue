<template>
  <div>
    <action-button v-on:openAddEmployeeDialog="openAddEmployeeDialog"></action-button>
    <card-contents></card-contents>
    <dialog-add-employee v-bind:employeeDialogOpen="employeeDialogOpen" v-on:closeAddEmployeeDialog="closeAddEmployeeDialog"></dialog-add-employee>
  </div>
</template>

<script>
  import ActionButton from './ActionButton.vue'
  import CardContents from './card/MainCardContents.vue'
  import DialogAddEmployee from './dialog/DialogAddEmployee.vue'

  export default {
    data () {
      return {
        employeeDialogOpen: false
      }
    },
    components: {
      'action-button': ActionButton,
      'card-contents': CardContents,
      'dialog-add-employee': DialogAddEmployee
    },
    methods: {
      openAddEmployeeDialog: function () {
        this.employeeDialogOpen = true
      },
      closeAddEmployeeDialog: function () {
        this.employeeDialogOpen = false
      }
    }
  }
</script>

<style lang="css">
</style>
