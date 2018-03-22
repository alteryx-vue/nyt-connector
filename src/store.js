import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		config: {
			appTitle: 'New York Times',
			appVersion: 'v0.0.9',
			releasesUrl: 'https://api.github.com/repos/alteryx-vue/nyt-connector/releases',
			updateAvail: false,
			updateVersion: 'v0.0.0',
			updateUrl: 'https://raw.githubusercontent.com/alteryx-vue/installers/master/nyt-connector.yxi',
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
			url: 'https://api.nytimes.com/svc/topstories/v2/home.json'
		},
		ui: {
			baseUrl: 'https://api.nytimes.com',
			selections: ['home','world','national','technology'],
			apiKey: '',
			lastKey: '',
			connected: 0,
			connects: 0,
			connectError: 0,
			apiError: '',
			stopCheck: false
		}
	},
	mutations: {
	  updateKey (state, v) {
	    state.ui.apiKey = v
	  },
	  updateConnected (state, v) {
	    state.ui.connected = v
	  },
	  updateConnectError (state, v) {
	  	state.ui.connectError = v
	  },
	  updateApiError (state, v) {
	  	state.ui.apiError = v
	  },
	  updateSelections (state, v) {
	    state.ui.selections = v
	  },
	  updatePage (state, v) {
	  	state.config.page = v
	  },
	  updateConnects (state) {
	  	state.ui.connects ++
	  },
	  updateLastKey (state) {
	  	state.ui.lastKey = state.ui.apiKey
	  },
	  dismissUpdate (state) {
	  	state.config.updateAvail = false
	  }
	}
})