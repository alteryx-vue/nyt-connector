<template>

    <v-bottom-nav fixed value="true" color="white" :active="page">

      <v-btn flat color="blue darken-2" v-for="p in pages" :key="p.id" :value="page.id" @click="setPage(p.id)">
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
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
      }
    },
    methods: {
      setPage(p) {
        this.$store.state.page = p
      }
    }
  }
</script>

