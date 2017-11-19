<template>
  <div>
    <action-button></action-button>
    <card-contents></card-contents>
  </div>
</template>

<script>
  import ActionButton from './ActionButton.vue'
  import CardContents from './card/MainCardContents.vue'

  export default {
    components: {
      'action-button': ActionButton,
      'card-contents': CardContents
    }
  }
</script>

<style lang="css">
</style>
