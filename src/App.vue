<template>

  <v-app>

    <nyt-toolbar>
      <template slot="title">{{ title }}</template>
      <!-- <template slot="page">{{ page }}</template> -->
    </nyt-toolbar>

      <v-content app>
        <v-container>

          <nyt-connection v-show="page == 0"></nyt-connection>
          <nyt-categories v-show="page == 1"></nyt-categories>
          <nyt-filters v-show="page == 2"></nyt-filters>
          <nyt-fields v-show="page == 3"></nyt-fields>

        </v-container>
      </v-content>
    <nyt-nav></nyt-nav>
  </v-app>

</template>

<script>

  import nytToolbar from './components/nytToolbar.vue';
  import nytConnection from './components/nytConnection.vue';
  import nytCategories from './components/nytCategories.vue';
  import nytFilters from './components/nytFilters.vue';
  import nytFields from './components/nytFields.vue';
  import nytNav from './components/nytNav.vue';

  export default {
    components: {
        nytToolbar,
        nytConnection,
        nytCategories,
        nytFilters,
        nytFields,
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
