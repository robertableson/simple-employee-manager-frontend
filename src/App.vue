<template>
  <v-app>
    <v-navigation-drawer dark
      :mobile-break-point="navDrawer.breakpoint"
      :fixed="navDrawer.fixed"
      :mini-variant="navDrawer.miniVariant"
      v-model="navDrawer.drawer"
      app
    >
      <v-list>
        <v-list-tile
          avatar
          v-for="item in navDrawer.items"
          v-bind:key="item.title"
          :to="item.link"
          exact
        >
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
          <router-view></router-view>
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
          drawer: false,
          breakpoint: 960,
          items: [
            {icon: 'apps', title: 'Tableau de bord', link: '/'},
            {icon: 'people', title: 'Employés', link: '/employes'}
          ],
          miniVariant: false
        },
        header: {
          title: 'Gestion 2000'
        },
        employeesTestList: [
          {
            value: false,
            id: 1,
            firstName: 'Billy1',
            lastName: 'Bong1',
            birthDate: '2017-01-01',
            hireDate: '2017-01-01',
            hourlySalary: 1
          },
          {
            value: false,
            id: 2,
            firstName: 'Billy2',
            lastName: 'Bong2',
            birthDate: '2017-02-02',
            hireDate: '2017-02-02',
            hourlySalary: 2
          }
        ]
      }
    }
  }

</script>
