import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import axios from 'axios'
import {store} from './store.js'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(Vuelidate)

// free key for testing
// b49fd883e0e34eb88d5089930814e0be

// render app
const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

window.Alteryx.Gui = {

	SetConfiguration: j => {

		// update Vuex store with Alteryx Designer XML config, if exists
		store.state.config = j.Configuration.Configuration ? j.Configuration.Configuration : store.state.config
		window.Alteryx.JsEvent(JSON.stringify({Event: 'SetConfiguration'}))

	},
	GetConfiguration: () => {

		// give Vuex store to the Alteryx Designer XML config
		window.Alteryx.JsEvent(JSON.stringify({
			Event: 'GetConfiguration',
			Configuration: {
				Configuration: store.state.config,
				Annotation: store.state.config.appTitle
			}
		}))
	}

}
