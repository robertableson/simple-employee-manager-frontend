<template>
  <div>
    <action-button></action-button>
    <card-contents></card-contents>
    <dialog-add-employee></dialog-add-employee>
  </div>
</template>

<script>
  import ActionButton from './ActionButton.vue'
  import CardContents from './card/MainCardContents.vue'
  import DialogAddEmployee from './dialog/DialogAddEmployee.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      'action-button': ActionButton,
      'card-contents': CardContents,
      'dialog-add-employee': DialogAddEmployee
    },
    methods: {
    }
  }
</script>

<style lang="css">
</style>
