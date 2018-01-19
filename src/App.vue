<template>

  <v-app>

    <nyt-toolbar>
      <template slot="title">{{ title }}</template>
      <!-- <template slot="page">{{ page }}</template> -->
    </nyt-toolbar>

      <v-content app>
        <v-container>

          <nyt-connection v-show="page == 0"></nyt-connection>
          <nyt-sections v-show="page == 1"></nyt-sections>

        </v-container>
      </v-content>
    <nyt-nav></nyt-nav>
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
      title() {
        return this.$store.state.title
      },
      page() {
        return this.$store.state.page
      }
    }
  }

</script>
