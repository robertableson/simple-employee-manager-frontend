<template>
  <div>
    <v-fab-transition>
    <v-btn
       fixed
       dark
       fab
       bottom
       right
       :color="button.color"
       :key="button.color"
       @click="button.clickEvent"
     >
       <v-icon>{{button.icon}}</v-icon>
     </v-btn>
     </v-fab-transition>
  </div>
</template>

<script>
import {bus} from '../../main'

export default {
  methods: {
    openAddEmployeeDialog () {
      bus.$emit('openAddEmployeeDialog')
    },
    deleteSelectedEmployees () {
      bus.$emit('deleteSelectedEmployees')
      this.button.color = 'blue'
      this.button.icon = 'add'
      this.button.clickEvent = this.openAddEmployeeDialog
    }
  },
  data () {
    return {
      button: {
        color: 'primary',
        icon: 'add',
        clickEvent: this.openAddEmployeeDialog
      }
    }
  },
  created () {
    bus.$on('onEmployeesSelected', (selectedEmployees) => {
      if (selectedEmployees.length > 0) {
        this.button.color = 'red'
        this.button.icon = 'close'
        this.button.clickEvent = this.deleteSelectedEmployees
      } else {
        this.button.color = 'blue'
        this.button.icon = 'add'
        this.button.clickEvent = this.openAddEmployeeDialog
      }
    })
    bus.$on('undoEmployeesDelete', (selectedEmployees) => {
      this.button.color = 'red'
      this.button.icon = 'close'
      this.button.clickEvent = this.deleteSelectedEmployees
    })
  }
}
</script>
