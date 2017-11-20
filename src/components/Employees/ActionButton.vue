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
import {bus} from '../../main'

export default {
  data () {
    return {}
  },
  methods: {
    openAddEmployeeDialog: function () {
      bus.$emit('openAddEmployeeDialog')
    }
  }
}
</script>
