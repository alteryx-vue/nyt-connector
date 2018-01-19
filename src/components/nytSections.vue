<template>

	<div>

    <h2 class="mb-3">{{ pages[page].name }}</h2>

    <div class="pb-2 mb-2">

      <v-list v-show="connected" class="transparent">

        <v-switch 
          v-for="section in sections" 
          :label="section" 
          v-model="selections" 
          :value="section" 
          :key="section" 
          color="black">
        </v-switch>

      </v-list>

      <v-alert type="error" :value="!connected">
        Can't connect to {{ baseUrl }}.  Please update/check your API key or get a new one @  https://developer.nytimes.com
      </v-alert>

      <v-btn 
        color="primary" 
        @click="goBack" 
        v-show="!connected">
        <v-icon dark left>arrow_back</v-icon>
        Update API Key
      </v-btn>

    </div>

  </div>

</template>

<script>
  export default {
  	name: 'nytSections',
    computed: {
      sections() {
        return this.$store.state.sections
      },
      page() {
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
      },
      connected() {
        return this.$store.state.connected
      },
      baseUrl() {
        return this.$store.state.baseUrl
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

