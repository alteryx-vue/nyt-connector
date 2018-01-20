<template>

  <div>

    <h3 class="mb-3">{{ pages[page].name }}</h3>

      <v-alert outline :type="alertType" :value="showAlert" class="mb-3">
        {{ alertText }}
      </v-alert>

    <form>
      <v-text-field
        label="API Key"
        v-model="apiKey"
        :error-messages="apiKeyErrors">
      </v-text-field>
      <v-btn
        small
        color="primary"
        @click="connect"
        :loading="loading"
        :disabled="!checkable">
        check connection
      </v-btn>
      <v-btn
        small
        flat
        color="primary"
        @click="moveOn"
        :disabled="!canMoveOn">
        sections
        <v-icon right dark>arrow_forward</v-icon>
      </v-btn>
    </form>

  </div>

</template>

<script>

  import { required } from 'vuelidate/lib/validators';
  import axios from 'axios';

  export default {
  	name: 'nytConnection',
    validations: {
      apiKey: { required }
    },
    data () {
      return {
        loading: false,
      }
    },
    computed: {
      showAlert() {
        if (this.$store.state.config.apiKey === this.$store.state.config.lastKey && this.$store.state.config.connectError > 0 ) {
          return true
        } else if (this.$store.state.config.apiKey !== this.$store.state.config.lastKey && this.$store.state.config.connects > 0) {
          return true
        } else {
          return false
        }
      },
      alertType() {
        if (this.$store.state.config.apiKey === this.$store.state.config.lastKey && this.$store.state.config.connectError > 0 ) {
          return 'error'
        } else if (this.$store.state.config.apiKey !== this.$store.state.config.lastKey && this.$store.state.config.connects > 0) {
          return 'warning'
        } else {
          return 'success'
        }
      },
      alertText() {
        const err = 'Please check your API key.  NYT provides free keys at https://developer.nytimes.com'
        const warn = 'New API key needs validation..'
        const runworthy = 'Connected'
        if (this.$store.state.config.apiKey === this.$store.state.config.lastKey && this.$store.state.config.connectError > 0 ) {
          return err
        } else if (this.$store.state.config.apiKey !== this.$store.state.config.lastKey && this.$store.state.config.connects > 0) {
          return warn
        } else {
          return runworthy
        }
      },
      checkable() {
        return this.$store.state.config.apiKey.length > 0
      },
      canMoveOn() {
        return this.$store.state.config.apiKey === this.$store.state.config.lastKey && this.$store.state.config.connected > 0
      },
      page() {
        return this.$store.state.config.page
      },
      pages() {
        return this.$store.state.config.pages
      },
      apiKey: {
        get () {
          return this.$store.state.config.apiKey
        },
        set (value) {
          this.$store.commit('updateKey', value)
        }
      },
      apiKeyErrors () {
        const errors = []
        if (!this.$v.apiKey.$dirty) return errors
        !this.$v.apiKey.required && errors.push('API Key is required.')
        return errors
      }
    },
    methods: {
      connect () {
      
        this.$v.$touch()
        this.loading = true

        // GET Top Stories to check API Key
        axios.get(this.$store.state.config.url  + "?api-key=" + this.$store.state.config.apiKey)
        .then(response => {
                            this.$store.commit('updateConnected',1)
                            this.$store.commit('updateConnectError',0)
                            this.$store.commit('updateApiError',null)
                            this.$store.commit('updateLastKey')
                            this.$store.commit('updateConnects')
                            this.loading = false
                           }
        )
        .catch(response => {
                              this.$store.commit('updateConnected',0)
                              this.$store.commit('updateConnectError',1)
                              this.$store.commit('updateApiError',response.message)
                              this.$store.commit('updateLastKey')
                              this.$store.commit('updateConnects')
                              this.loading = false
                            }
        )
      },
      moveOn() {
        this.$store.commit('updatePage', 1)
      },
      updateUrl (e) {
        this.$store.commit('updateUrl', e.target.value)
      },
      updateKey (e) {
        this.$store.commit('updateKey', e.target.value)
      },
    },
  }
</script>
