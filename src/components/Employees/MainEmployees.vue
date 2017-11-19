<template>
  <div>
    <action-button v-on:addEmployee="addEmployee"></action-button>
    <card-contents></card-contents>
    <dialog-add-employee v-bind:dialogOpen="dialogOpen"></dialog-add-employee>
  </div>
</template>

<script>
  import ActionButton from './ActionButton.vue'
  import CardContents from './card/MainCardContents.vue'
  import DialogAddEmployee from './dialog/DialogAddEmployee.vue'

  export default {
    data () {
      return {
        dialogOpen: false
      }
    },
    components: {
      'action-button': ActionButton,
      'card-contents': CardContents,
      'dialog-add-employee': DialogAddEmployee
    },
    methods: {
      addEmployee: function () {
        this.dialogOpen = true
      }
    }
  }
</script>

<style lang="css">
</style>
