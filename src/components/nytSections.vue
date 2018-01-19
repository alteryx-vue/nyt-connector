<template>

	<div>

    <h2 class="mb-3">{{ pages[page].name }}</h2>

    <div class="pb-2 mb-2">
          <v-list>

            <v-switch 
              v-for="section in sections" 
              :label="section" 
              v-model="selections" 
              :value="section" 
              :key="section" 
              color="black">
            </v-switch>

          </v-list>
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
      selections: {
        get () {
          return this.$store.state.selections
        },
        set (value) {
          this.$store.commit('updateSelections', value)
        }
      },
    }
  }
</script>

