<template>

  <v-toolbar app dense>
    <img :src="icon" :alt="title" width="18">
    <v-toolbar-title :class="toolbarClass">
      <slot name="title"></slot>
<!--       <v-icon :class="toolbarClass">chevron_right</v-icon>
      <slot name="page"></slot> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-bottom-sheet>
      <v-btn icon class="grey--text text--darken-1" slot="activator">
        <v-icon>fa-code</v-icon>
      </v-btn>
      <v-card tile>
        <v-list two-line>
          <v-subheader>Development Sources</v-subheader>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <v-icon class="black--text">fa-github</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>View project on GitHub</v-list-tile-title>
                <v-list-tile-sub-title>github.com/alteryx-vue/nyt</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/vuejs.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Powered by Vue.js</v-list-tile-title>
                <v-list-tile-sub-title>Progressive JavaScript Framework</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/vuetify.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Built using Vuetify</v-list-tile-title>
                <v-list-tile-sub-title>Semantic Material Design Component Framework for Vue.js</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-subheader>Dependencies</v-subheader>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <v-icon class="black--text">fa-github</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Axios</v-list-tile-title>
                <v-list-tile-sub-title>Promise based HTTP client</v-list-tile-sub-title>
                  <v-list-tile-sub-title>github.com/axios/axios</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-card>
    </v-bottom-sheet>


  </v-toolbar>

</template>

<script>
  export default {
    data () {
      return {
        toolbarClass: 'grey--text'
      }
    },
    computed: {
      icon() {
        return this.$store.state.icon
      },
      title() {
        return this.$store.state.title
      },
    }
  }
</script>

