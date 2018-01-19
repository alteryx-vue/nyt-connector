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
		  { id: 1, name: 'Sections', icon: 'folder_open' },
		],
		sections: [
			'home',
			'opinion',
			'world',
			'national',
			'politics',
			'upshot',
			'nyregion',
			'business',
			'technology',
			'science',
			'health',
			'sports',
			'arts',
			'books',
			'movies',
			'theater',
			'sundayreview',
			'fashion',
			'tmagazine',
			'food',
			'travel',
			'magazine',
			'realestate',
			'automobiles',
			'obituaries',
			'insider'
		],
		selections: [],
		baseUrl: 'https://api.nytimes.com',
		url: 'https://api.nytimes.com/svc/topstories/v2/home.json',
		apiKey: 'b49fd883e0e34eb88d5089930814e0be',
		connected: false,
		connectError: false,
		apiError: []
	},
	mutations: {
	  updateKey (state, v) {
	    state.apiKey = v
	  },
	  updateConnected (state, v) {
	    state.connected = v
	  },
	  updateConnectError (state, v) {
	  	state.connectError = v
	  },
	  updateApiError (state, v) {
	  	state.apiError = v
	  },
	  updateSelections (state, v) {
	    state.selections = v
	  },
	  updatePage (state, v) {
	  	state.page = v
	  }
	}
})

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
