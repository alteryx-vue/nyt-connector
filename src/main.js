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

// b49fd883e0e34eb88d5089930814e0be

const store = new Vuex.Store({
	state: {
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
		keyChange: false,
		connected: false,
		connects: false,
		connectError: false,
		apiError: '',
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
	  },
	  updateConnects (state) {
	  	state.connects = true
	  },
	  updateKeyChange (state, v) {
	  	state.keyChange = v
	  },
	  updateLastKey (state) {
	  	state.lastKey = state.apiKey
	  }
	}
})

Alteryx.Gui.BeforeLoad = function (manager, AlteryxDataItems, json) {

	// give persisted data to Vuex for state management during app use
	store.state.apiKey = json.Configuration ? json.Configuration.apiKey : store.state.apiKey
	store.state.lastKey = json.Configuration ? json.Configuration.lastKey : store.state.lastKey
	store.state.keyChange = json.Configuration ? json.Configuration.keyChange : store.state.keyChange
	store.state.connected = json.Configuration ? json.Configuration.connected : store.state.connected
	store.state.connects = json.Configuration ? json.Configuration.connects : store.state.connects
	store.state.connectError = json.Configuration ? json.Configuration.connectError : store.state.connectError
	store.state.apiError = json.Configuration ? json.Configuration.apiError : store.state.apiError
	store.state.page = json.Configuration ? json.Configuration.page : store.state.page
	store.state.selections = json.Configuration ? json.Configuration.sections : store.state.selections

}

Alteryx.Gui.AfterLoad = function (manager, AlteryxDataItems, json) {
}

window.Alteryx.Gui.BeforeGetConfiguration = function(configObj) {

  	// give (part of) Vuex store's state back to Alteryx xml config
	configObj.Configuration.apiKey = store.state.apiKey
	configObj.Configuration.lastKey = store.state.lastKey
	configObj.Configuration.keyChange = store.state.keyChange
	configObj.Configuration.connected = store.state.connected
	configObj.Configuration.connects = store.state.connects
	configObj.Configuration.connectError = store.state.connectError
	configObj.Configuration.apiError = store.state.apiError
	configObj.Configuration.page = store.state.page
	configObj.Configuration.selections = store.state.selections
	return configObj;

}

window.Alteryx.Gui.AfertGetConfiguration = function(configObj) {
}

window.Alteryx.Gui.Annotation = function (manager) {
	return 'NYT Connector'
}

// render app
const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
