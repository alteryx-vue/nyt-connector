<template>

    <v-bottom-nav app dense fixed value="true" color="grey lighten-2" :active="page">

      <v-btn flat color="grey darken-4" v-for="p in pages" :key="p.id" :value="page.id" @click="setPage(p.id)">
        <span>{{ p.name }}</span>
        <v-icon>{{ p.icon }}</v-icon>
      </v-btn>

    </v-bottom-nav>

</template>

<script>

  export default {
    name: 'nytNav',
    computed: {
      page() {
        return this.$store.state.config.page
      },
      pages() {
        return this.$store.state.config.pages
      }
    },
    methods: {
      setPage(p) {
        this.$store.state.config.page = p
      }
    }
  }
</script>

