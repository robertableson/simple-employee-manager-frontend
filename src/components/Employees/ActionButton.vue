<template>
  <div>
    <v-btn
       fixed
       dark
       fab
       bottom
       right
       :color="button.color"
       @click="button.clickEvent"
     >
       <v-icon>add</v-icon>
     </v-btn>
     <v-fab-transition>
      <v-btn
        color="red"
        dark
        fab
        fixed
        bottom
        left
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import {bus} from '../../main'

export default {
  methods: {
    openAddEmployeeDialog: function () {
      bus.$emit('openAddEmployeeDialog')
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
  }
}
</script>
