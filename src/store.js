import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		config: {
			appTitle: 'New York Times',
			icon: 'icon.png',
			page: 0,
			pages: [
			  { id: 0, name: 'Connection', icon: 'power_settings_new' },
			  { id: 1, name: 'Sections', icon: 'folder_open' },
			],
			sections: [
				{ name: 'Home', key: 'home' },
				{ name: 'World', key: 'world'},
				{ name: 'U.S.', key: 'national'},
				{ name: 'Politics', key: 'politics'},
				{ name: 'N.Y.', key: 'nyregion'},
				{ name: 'Business', key: 'business'},
				{ name: 'Opinion', key: 'opinion'},
				{ name: 'Tech', key: 'technology'},
				{ name: 'Science', key: 'science'},
				{ name: 'Health', key: 'health'},
				{ name: 'Sports', key: 'sports'},
				{ name: 'Arts', key: 'arts'},
				{ name: 'Books', key: 'books'},
				{ name: 'Food', key: 'food'},
				{ name: 'Travel', key: 'travel'},
				{ name: 'Movies', key: 'movies'},
				{ name: 'Theater', key: 'theater'},
				{ name: 'Sunday Review', key: 'sundayreview'},
				{ name: 'Fashion', key: 'fashion'},
				{ name: 'Magazine', key: 'magazine'},
				{ name: 'T Magazine', key: 'tmagazine'},
				{ name: 'Real Estate', key: 'realestate'},
				{ name: 'Automobiles', key: 'automobiles'},
				{ name: 'Obituaries', key: 'obituaries'},
				{ name: 'Insider', key: 'insider'}
			],
			selections: ['home','world','national','technology'],
			baseUrl: 'https://api.nytimes.com',
			url: 'https://api.nytimes.com/svc/topstories/v2/home.json',
			apiKey: '',
			lastKey: '',
			connected: 0,
			connects: 0,
			connectError: 0,
			apiError: '',
		}
	},
	mutations: {
	  updateKey (state, v) {
	    state.config.apiKey = v
	  },
	  updateConnected (state, v) {
	    state.config.connected = v
	  },
	  updateConnectError (state, v) {
	  	state.config.connectError = v
	  },
	  updateApiError (state, v) {
	  	state.config.apiError = v
	  },
	  updateSelections (state, v) {
	    state.config.selections = v
	  },
	  updatePage (state, v) {
	  	state.config.page = v
	  },
	  updateConnects (state) {
	  	state.config.connects ++
	  },
	  updateLastKey (state) {
	  	state.config.lastKey = state.config.apiKey
	  }
	}
})