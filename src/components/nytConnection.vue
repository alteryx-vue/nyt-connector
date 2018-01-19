<template>

  <div>

    <h2 class="mb-3">{{ pages[page].name }}</h2>

    <form>
      <v-text-field
        type="password"
        label="NYT API Key"
        v-model="apiKey"
        :error-messages="apiKeyErrors">
      </v-text-field>
      <v-btn 
        color="primary" 
        @click="connect" 
        :disabled="$v.$invalid">
        connect
      </v-btn>
    </form>

  </div>

</template>

<script>

  import { required } from 'vuelidate/lib/validators';
  import axios from 'axios';

  export default {
  	name: 'JiraConnection',
    validations: {
      apiKey: { required }
    },
    computed: {
      page() {
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
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
      urlErrors () {
        const errors = []
        if (!this.$v.url.$dirty) return errors
        !this.$v.url.required && errors.push('Site URL is required.')
        return errors
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

        // GET Jira Projects
        axios.get(this.$store.state.url  + "?api-key=" + this.$store.state.apiKey)
        .then(response => {
                            this.$store.commit('updateStories', response.data.results) 
                            this.$store.state.page = 1
                           }
        )
        .catch(response => {alert('Failure')})

        // this.$store.state.page = 1
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

