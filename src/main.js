import Vue from 'vue'
import Vuex from 'vuex';
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import axios from 'axios'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(Vuelidate)

const store = new Vuex.Store({
	state: {
		title: 'NYT',
		icon: 'nyt.png',
		page: 0,
		pages: [
		  { id: 0, name: 'Connection', icon: 'power_settings_new' },
		  { id: 1, name: 'Categories', icon: 'folder_open' },
		  { id: 2, name: 'Filters', icon: 'filter_list' },
		  { id: 3, name: 'Fields', icon: 'check' }
		],
		url: 'https://api.nytimes.com/svc/topstories/v2/home.json',
		apiKey: 'b49fd883e0e34eb88d5089930814e0be',
		stories: [],
		apiError: []
	},
	mutations: {
	  updateKey (state, v) {
	    state.apiKey = v
	  },
	  updateStories (state, v) {
	    state.stories = v
	  }
	}
})

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
