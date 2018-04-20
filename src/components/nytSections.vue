<template>

	<div>

    <h3 class="mb-3">{{ pages[page].name }}
      <v-btn
        small
        flat
        right
        fixed
        color="primary"
        @click="goBack"
        v-show="!showAlert">
        <v-icon left>vpn_key</v-icon>
        api key
      </v-btn>
    </h3>

    <div>

      <v-list v-show="!showAlert" class="transparent" dense>

        <v-switch 
          v-for="section in sections" 
          :label="section.name" 
          v-model="selections" 
          :value="section.key" 
          :key="section.key" 
          @change="updateSelections()"
          color="grey darken-4"
          hide-details
          class="mb-1">
        </v-switch>

      </v-list>

      <v-alert outline :type="alertType" :value="showAlert" class="mb-3">
        {{ alertText }}
      </v-alert>

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
    data() {
      return {
        selections: this.$store.state.ui.selections,
        sections: this.$store.state.config.sections,
        page: this.$store.state.config.page,
        pages: this.$store.state.config.pages
      }
    },
    computed: {
      showAlert() {
        if (this.$store.state.ui.connected < 1) {
          return true
        } else if (this.$store.state.ui.apiKey === this.$store.state.ui.lastKey && this.$store.state.ui.connectError > 0 ) {
          return true
        } else if (this.$store.state.ui.apiKey !== this.$store.state.ui.lastKey && this.$store.state.ui.connects > 0) {
          return true
        } else {
          return false
        }
      },
      alertType() {
        if (this.$store.state.ui.connected < 1) {
          return 'info'
        } else if (this.$store.state.ui.apiKey === this.$store.state.ui.lastKey && this.$store.state.ui.connectError > 0 ) {
          return 'error'
        } else if (this.$store.state.ui.apiKey !== this.$store.state.ui.lastKey && this.$store.state.ui.connects > 0) {
          return 'warning'
        } else {
          return 'success'
        }
      },
      alertText() {

        const alert = 'Currently disconnected, please check API key'
        const warn = 'New API key needs validation..'
        const runworthy = 'Connected'
        if (this.$store.state.ui.connected < 1) {
          return alert
        } else if (this.$store.state.ui.apiKey === this.$store.state.ui.lastKey && this.$store.state.ui.connectError > 0 ) {
          return err
        } else if (this.$store.state.ui.apiKey !== this.$store.state.ui.lastKey && this.$store.state.ui.connects > 0) {
          return warn
        } else {
          return runworthy
        }
      }
    },
    methods: {
      goBack() {
        this.$store.commit('updatePage', 0)
      },
      updateSelections() {
          this.$store.commit('updateSelections',this.selections)
      }
    }
  }
</script>

