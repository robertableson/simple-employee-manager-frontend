<template>
  <div>
    <v-btn
       fixed
       dark
       fab
       bottom
       right
       color="primary"
       @click="addEmployee"
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
    addEmployee: function () {
      this.$emit('addEmployee')
    }
  }
}
</script>
