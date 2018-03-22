<template>

  <v-toolbar app dense fixed color="grey lighten-2">
    <img src="public/banner.png" :alt="appTitle" height="24">
    <v-spacer></v-spacer>

    <v-tooltip left>
      <v-btn 
        icon 
        class="blue--text text--darken-1" 
        :disabled="!updateAvail" 
        slot="activator"
        @click.native="showInfo">
        <v-icon>cloud_download</v-icon>
      </v-btn>
      <span>{{ updateBlurb }}</span>
    </v-tooltip>

    <v-bottom-sheet>

      <v-btn icon slot="activator">
          <v-icon medium>code</v-icon>
      </v-btn>

      <v-card tile>
        <v-list two-line dark>
          <v-subheader>Development Sources</v-subheader>

          <v-list-tile href="https://github.com/alteryx-vue/nyt-connector" target="_blank">
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <v-icon>code</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>View project on GitHub</v-list-tile-title>
                <v-list-tile-sub-title>github.com/alteryx-vue/nyt-connector</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile href="https://vuejs.org" target="_blank">
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

          <v-list-tile href="https://next.vuetifyjs.com" target="_blank">
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

        <v-divider></v-divider>
        <v-subheader>API Keys are free!</v-subheader>

          <v-list-tile href="https://developer.nytimes.com" target="_blank">
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="icon.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>developer.nytimes.com</v-list-tile-title>
                <v-list-tile-sub-title>API Key obtained with a valid email address</v-list-tile-sub-title>
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
      updateAvail: {
        get () {
          return this.$store.state.config.updateAvail
        },
        set (value) {
          this.$store.commit('dismissUpdate')
        }
      },
      moreInfo: {
        get () {
          return this.$store.state.config.moreInfo
        },
        set (value) {
          this.$store.commit('updateMoreInfo', value)
        }
      },
      updateBlurb() {
        if (this.$store.state.config.updateAvail) {
          return 'Update available!'
        } else {
          return 'No updates available'
        }
      }
    },
    methods: {
      showInfo() {
        this.moreInfo = true
      }
    }
  }
</script>

