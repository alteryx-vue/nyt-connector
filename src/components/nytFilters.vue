<template>

  <div>

    <h2>{{ pages[page].name }}</h2>

  </div>

</template>

<script>
  export default {
  	name: 'JiraFilters',
    computed: {
      page() {
        return this.$store.state.page
      },
      pages() {
        return this.$store.state.pages
      }
    }
  }
</script>

