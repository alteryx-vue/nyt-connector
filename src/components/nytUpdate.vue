<template>

	<div>

        <v-snackbar
          :timeout="timeout"
          v-model="updatePrompt"
        >
          UPDATE AVAILABLE
          <v-btn 
            flat 
            color="yellow lighten-1"
            @click.native="showInfo"
            >
            More Info
          </v-btn>
          <v-btn flat icon dark @click.native="updatePrompt = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-snackbar>

        <v-dialog v-model="moreInfo" persistent fullscreen>
          <v-card>
            <div class="headline pl-3 pt-3">
              Update Available<small class="grey--text ml-2">{{ curVersion }}<v-icon>arrow_right</v-icon>{{ updateVersion }}</small>
              <v-btn 
                dark 
                fab 
                fixed
                small
                top 
                right 
                color="red darken-1" 
                @click.native="moreInfo = false">
                  <v-icon>close</v-icon>
              </v-btn>                  
            </div>
            <v-card-text>

              <code>{{ updateUrl }}</code><br>
              <div class="subheading mt-3">
              Download the latest installer from the address above.  Save your work and close Alteryx before running the installer.
              </div>
              <v-divider class="my-3"></v-divider>
              <div class="grey--text headline mb-3">{{ updateVersion }} Release Notes</div>
              <div class="pl-3">
                <vue-markdown :source="releaseNotes"></vue-markdown>
              </div>

            </v-card-text>
          </v-card>
        </v-dialog>

    </div>

</template>

<script>

  import VueMarkdown from 'vue-markdown';

  export default {
  	name: 'nytUpdate',
    components: {
        VueMarkdown
    },
    data () {
      return {
        timeout: 20000,
        updateUrl: this.$store.state.config.updateUrl
      }
    },
    computed: {
      updatePrompt: {
        get () {
          return this.$store.state.config.updatePrompt
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
      },
      releaseNotes: {
        get () {
          return this.$store.state.config.updateNotes
        },
        set (value) {
        }
      }
    },
    methods: {
      showInfo() {
        this.updatePrompt = false
        this.moreInfo = true
      }
    }
  }

</script>