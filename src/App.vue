<template>

  <v-app>

    <nyt-toolbar app></nyt-toolbar>

      <v-content>
        <v-container>

          <nyt-connection v-if="page == 0"></nyt-connection>
          <nyt-sections v-if="page == 1"></nyt-sections>

            <v-snackbar
              :timeout="timeout"
              v-model="updateAvail"
            >
              UPDATE AVAILABLE
              <v-btn 
                flat 
                color="yellow lighten-1"
                @click.native="showInfo"
                >
                More Info
              </v-btn>
              <v-btn flat icon dark @click.native="updateAvail = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-snackbar>

            <v-dialog v-model="moreInfo" persistent fullscreen>
              <v-card>
                <v-card-title class="headline">
                  Update Available<span class="grey--text ml-2">{{ curVersion }}<v-icon>arrow_right</v-icon>{{ updateVersion }}</span>
                </v-card-title>
                <v-card-text>
                  <span class="subheading">Open a web browser and visit the following address to download the latest installer version:
                  <code>{{ updateUrl }}</code></span><br><br>
                  <span class="subheading">
                  Save your work and close Alteryx before running the installer.
                  </span>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" flat @click.native="moreInfo = false">
                    <v-icon left>close</v-icon>
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

        </v-container>
      </v-content>
    
  </v-app>

</template>

<script>

  import nytToolbar from './components/nytToolbar.vue';
  import nytConnection from './components/nytConnection.vue';
  import nytSections from './components/nytSections.vue';

  export default {
    components: {
        nytToolbar,
        nytConnection,
        nytSections
    },
    data () {
      return {
        timeout: 20000,
        moreInfo: false,
        updateUrl: this.$store.state.config.updateUrl
      }
    },
    computed: {
      page() {
        return this.$store.state.config.page
      },
      updateAvail: {
        get () {
          return this.$store.state.config.updateAvail
        },
        set (value) {
          this.$store.commit('dismissUpdate')
        }
      },
      curVersion: {
        get () {
          return this.$store.state.config.appVersion
        },
        set (value) {
        }
      },
      updateVersion: {
        get () {
          return this.$store.state.config.updateVersion
        },
        set (value) {
        }
      }
    },
    methods: {
      showInfo() {
        this.updateAvail = false
        this.moreInfo = true
      }
    }
  }

</script>
