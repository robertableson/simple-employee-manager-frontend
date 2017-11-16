<template>
  <v-app>

    <v-navigation-drawer dark
      :fixed="navDrawer.fixed"
      :mini-variant="navDrawer.miniVariant"
      v-model="navDrawer.drawer"
      app
    >
      <v-list>
        <v-list-tile avatar v-for="item in navDrawer.items" v-bind:key="item.title" @click="">
          <v-list-tile-action>
            <v-icon v-if="item.icon" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>

      <v-btn icon @click.stop="navDrawer.drawer = !navDrawer.drawer">
        <v-icon v-html="navDrawer.drawer ? 'chevron_left' : 'menu'"></v-icon>
      </v-btn>

      <v-toolbar-title v-text="header.title"></v-toolbar-title>

    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        navDrawer: {
          fixed: true,
          drawer: true,
          items: [
            {icon: 'dashboard', title: 'Tableau de bord'},
            {icon: 'people', title: 'Employés'}
          ],
          miniVariant: false
        },
        header: {
          title: 'Vous inc.'
        }
      }
    }
  }

</script>
