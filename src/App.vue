<template>

  <v-app>

    <nyt-toolbar app></nyt-toolbar>

      <v-content>
        <v-container>

          <nyt-connection v-if="page == 0"></nyt-connection>
          <nyt-sections v-if="page == 1"></nyt-sections>
          
          <nyt-update></nyt-update>

        </v-container>
      </v-content>
    
  </v-app>

</template>

<script>

  import nytToolbar from './components/nytToolbar.vue';
  import nytConnection from './components/nytConnection.vue';
  import nytSections from './components/nytSections.vue';
  import nytUpdate from './components/nytUpdate.vue';

  export default {
    components: {
        nytToolbar,
        nytConnection,
        nytSections,
        nytUpdate
    },
    computed: {
      page() {
        return this.$store.state.config.page
      }
    }
  }

</script>
