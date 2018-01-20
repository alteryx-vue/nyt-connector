<template>

	<div>

    <h3 class="mb-3">{{ pages[page].name }}</h3>

    <div>

      <v-list v-show="!showAlert" class="transparent" dense>

        <v-switch 
          v-for="section in sections" 
          :label="section.name" 
          v-model="selections" 
          :value="section.key" 
          :key="section.key" 
          color="grey darken-4"
          hide-details
          class="mb-1">
        </v-switch>

      </v-list>

<!--       <v-alert outline :type="alertType" :value="showAlert" class="mb-3">
        {{ alertText }}
      </v-alert> -->

      <v-btn 
        small
        color="primary" 
        @click="goBack" 
        v-show="showAlert">
        <v-icon dark left>arrow_back</v-icon>
        Check connection
      </v-btn>

    </div>

  </div>

</template>

<script>
  export default {
  	name: 'nytSections',
    computed: {
      alertType() {
        return (this.$store.state.connectError && (this.$store.state.apiKey == this.$store.state.lastKey)) || !(this.$store.state.apiKey.length > 0) ? 'error' : (this.$store.state.apiKey !== this.$store.state.lastKey) ? 'warning' : 'success'
      },
      alertText() {
        const err = 'Please check your API key.  NYT provides free keys at https://developer.nytimes.com'
        const warn = 'New API key needs validation..'
        const runworthy = 'Connected'
        return (this.$store.state.connectError && (this.$store.state.apiKey == this.$store.state.lastKey)) || !(this.$store.state.apiKey.length > 0) ? err : (this.$store.state.apiKey !== this.$store.state.lastKey) ? warn : runworthy
      },
      showAlert() {
        return (this.$store.state.connects && this.$store.state.apiKey !== this.$store.state.lastKey) || this.$store.state.connectError && (this.$store.state.apiKey == this.$store.state.lastKey)
      },
      sections() {
        return this.$store.state.sections
      },
      page() {
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
      },
      selections: {
        get () {
          return this.$store.state.selections
        },
        set (value) {
          this.$store.commit('updateSelections', value)
        }
      },
    },
    methods: {
      goBack() {
        this.$store.commit('updatePage', 0)
      }
    }
  }
</script>

