<template>

  <div>

    <h2 class="mb-3">{{ pages[page].name }}</h2>

      <v-alert type="error" :value="connectError">
        Error connecting to {{ baseUrl }}.  Please update/check your API key or get a new one @  https://developer.nytimes.com.<br>
        API Response: {{ apiError }}
      </v-alert>

    <form>
      <v-text-field
        label="API Key"
        v-model="apiKey"
        :error-messages="apiKeyErrors">
      </v-text-field>
      <v-btn
        color="primary"
        @click="connect"
        :loading="loading"
        :disabled="loading">
        connect
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
      page() {
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
      },
      connectError() {
        return this.$store.state.connectError
      },
      apiError() {
        return this.$store.state.apiError
      },
      baseUrl() {
        return this.$store.state.baseUrl
      },
      url: {
        get () {
          return this.$store.state.url
        },
        set (value) {
          this.$store.commit('updateUrl', value)
        }
      },
      apiKey: {
        get () {
          return this.$store.state.apiKey
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
        this.loading = true
        this.$v.$touch()

        // GET Top Stories to check API Key
        axios.get(this.$store.state.url  + "?api-key=" + this.$store.state.apiKey)
        .then(response => {
                            this.$store.commit('updateConnected',true)
                            this.$store.commit('updateConnectError',false)
                            this.$store.commit('updateApiError',null)
                            this.$store.commit('updatePage', 1)
                            this.loading = false
                           }
        )
        .catch(response => {
                              this.$store.commit('updateConnected',false)
                              this.$store.commit('updateConnectError',true)
                              this.$store.commit('updateApiError',response.message)
                              this.loading = false
                            }
        )
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
