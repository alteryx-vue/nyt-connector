<template>

	<div>

        <v-snackbar
          :timeout="timeout"
          v-model="updatePrompt"
          multi-line
        >
          UPDATE AVAILABLE
          <v-btn 
            flat 
            color="yellow"
            @click.native="showInfo"
            >
            MORE INFO
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
            <v-card-text class="pt-1">
              <code>{{ updateUrl }}</code><br>
              <div class="mt-3">
                <p class="subheading">
                Download and run the latest installer from the address above.  Then, simply reload the tool via deselect/select. You can verify that you're using the updated version by either the lack of update prompts or by checking the current version number in the info popover in the tool.</p>
                <v-divider class="my-2"></v-divider>
                <p class="subheading mb-1">Alteryx will typically install tools in one the following locations:</p>
                <code>C:\Users\{user}\AppData\Roaming\Alteryx\Tools</code><br>
                <code>C:\Program Files\Alteryx\bin\HtmlPlugins</code><br>
                <code>C:\ProgramData\Alteryx\Tools</code>
                <p class="subheading mt-2">If you end up with duplicate/multiple installations, find/delete the older one from one of the above locations.</p>
              </div>
              <v-divider class="my-3"></v-divider>
              <v-btn outline color="blue" :href="releaseNotes" target="_blank">{{ updateVersion }} Release Notes</v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>

    </div>

</template>

<script>

  export default {
  	name: 'nytUpdate',
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
      curVersion() {
          return this.$store.state.config.appVersion
      },
      updateVersion() {
          return this.$store.state.config.updateVersion
      },
      releaseNotes() {
        return 'https://github.com/alteryx-vue/nyt-connector/releases/tag/' + this.$store.state.config.updateVersion
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