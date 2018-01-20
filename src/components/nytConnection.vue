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
        :disabled="!showAlert">
        sections
        <v-icon right dark>arrow_forward</v-icon>
      </v-btn>
    </form>
    <p>Show an alert: {{ showAlert }}<br>
      because "Connects" = {{ connects }}</p>
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
      connects() {
        return this.$store.state.connects
      },
      alertType() {
        return this.$store.state.connectError && (this.$store.state.apiKey == this.$store.state.lastKey) ? 'error' : (this.$store.state.apiKey !== this.$store.state.lastKey) ? 'warning' : 'success'
      },
      showAlert() {

        return this.$store.state.connects

      },
      alertText() {
        const err = 'Please check your API key.  NYT provides free keys at https://developer.nytimes.com'
        const warn = 'New API key needs validation..'
        const runworthy = 'Connected'
        return this.$store.state.connectError && (this.$store.state.apiKey == this.$store.state.lastKey) ? err : (this.$store.state.apiKey !== this.$store.state.lastKey) ? warn : runworthy
      },
      checkable() {
        return this.$store.state.apiKey.length > 0
      },
      page() {
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
      },
      apiKey: {
        get () {
          return this.$store.state.apiKey
        },
        set (value) {
          this.$store.commit('updateKey', value)
          this.$store.commit('updateKeyChange', true)
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
        axios.get(this.$store.state.url  + "?api-key=" + this.$store.state.apiKey)
        .then(response => {
                            this.$store.commit('updateConnected',true)
                            this.$store.commit('updateConnectError',false)
                            this.$store.commit('updateApiError',null)
                            this.$store.commit('updateLastKey')
                            this.$store.commit('updateConnects')
                            this.$store.commit('updateKeyChange', false)
                            this.loading = false
                           }
        )
        .catch(response => {
                              this.$store.commit('updateConnected',false)
                              this.$store.commit('updateConnectError',true)
                              this.$store.commit('updateApiError',response.message)
                              this.$store.commit('updateLastKey')
                              this.$store.commit('updateConnects')
                              this.$store.commit('updateKeyChange', false)
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
