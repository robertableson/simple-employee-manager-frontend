<template>
  <v-dialog v-model="test" max-width="500px">
    <v-card>
      <v-card-title>
        Dialog 2
      </v-card-title>
      <v-card-text>
        <v-select
          v-bind:items="select"
          label="A Select List"
          item-value="text"
        ></v-select>
      </v-card-text>
    <v-card-actions>
      <v-btn color="primary" flat @click.stop="test=false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    'dialogOpen'
  ],
  data () {
    return {
      test: this.dialogOpen,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        }
      ],
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ]
    }
  },
  methods: {

  }
}
</script>
