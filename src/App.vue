<template>

  <v-app>

    <nyt-toolbar app></nyt-toolbar>

      <v-content>
        <v-container>

          <nyt-connection v-show="page == 0"></nyt-connection>
          <nyt-sections v-show="page == 1"></nyt-sections>

        </v-container>
      </v-content>

    <nyt-nav app></nyt-nav>
    
  </v-app>

</template>

<script>

  import nytToolbar from './components/nytToolbar.vue';
  import nytConnection from './components/nytConnection.vue';
  import nytSections from './components/nytSections.vue';
  import nytNav from './components/nytNav.vue';

  export default {
    components: {
        nytToolbar,
        nytConnection,
        nytSections,
        nytNav
    },
    computed: {
      page() {
        return this.$store.state.config.page
      }
    }
  }

</script>
