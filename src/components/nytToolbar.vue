<template>

  <v-toolbar app dense fixed color="grey lighten-2">
    <img src="public/banner.png" :alt="appTitle" height="24">
    <v-spacer></v-spacer>

    <v-bottom-sheet>
      <v-btn icon class="grey--text text--darken-1" slot="activator">
        <v-icon>fa-code</v-icon>
      </v-btn>
      <v-card tile>
        <v-list two-line dark>
          <v-subheader>Development Sources</v-subheader>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <v-icon>fa-github</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>View project on GitHub</v-list-tile-title>
                <v-list-tile-sub-title>github.com/alteryx-vue/nyt-connector</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/vuejs.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Powered by Vue.js</v-list-tile-title>
                <v-list-tile-sub-title>Progressive JavaScript Framework</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/vuetify.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Built using Vuetify</v-list-tile-title>
                <v-list-tile-sub-title>Semantic Material Design Component Framework for Vue.js</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-subheader>Dependencies</v-subheader>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <v-icon>fa-github</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Axios</v-list-tile-title>
                <v-list-tile-sub-title>Promise based HTTP client</v-list-tile-sub-title>
                  <v-list-tile-sub-title>github.com/axios/axios</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-card>
    </v-bottom-sheet>


  </v-toolbar>

</template>

<script>
  export default {
    name: 'nytToolbar',
    data () {
      return {
        toolbarClass: 'grey--text'
      }
    },
    computed: {
      appTitle() {
        return this.$store.state.config.title
      },
    }
  }
</script>

