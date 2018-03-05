# New York Times Alteryx Connector

> An Alteryx Connector built with Vue.js and Vuetify

This connector was developed using the increasingly popular Vue.js JavaScript framework alongside it's niche UI framework known as Vuetify - which was built specifically for Vue.js and features the Material Design guidelines.  

The result is a beautiful, responsive, performant example of the first Alteryx tool developed using the progressive Vue.js library.  If you're familiar with React, then I almost insist that you give Vue.js a try.  Subjectively, I beleive Vue.js is the perfect lightweight framework for use with the Alteryx HTML/JavaScript SDK - especially when performance remains a top priority.  Throw in a lightweight UI and axios (a modern, promise-based HTTP client) and building beautiful, fast connectors in Alteryx is a breeze!


### Requirements
- [NodeJS/npm](https://nodejs.org)


## Install/Download
---

### clone to the Alteryx HTML plugins directory

``` bash
# typically the following location
cd "c:/Program Files/Alteryx/bin/HtmlPlugins"

# clone repo
git clone https://github.com/alteryx-vue/nyt-connector

# change directory to project
cd nyt-connector
```

## Build Setup & Testing
---

### install dependencies

`npm install`

Default production dependencies:

``` bash
  "dependencies": {
    "axios": "^0.17.1",
    "vue": "^2.5.3",
    "vuelidate": "^0.6.1",
    "vuetify": "^0.17.4",
    "vuex": "^3.0.1"
  }
```

### Dev Environment Testing

You can use `npm run dev` to serve the project with hot reload for testing in a browser.

__Note__: When using Chrome, be sure to make use of the [Vue.js Devtools Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

### Build Production

Webpack and such..

``` bash
# build & compile
npm run build
```

Webpack [vue-loader](http://vuejs.github.io/vue-loader) is used for compiling `.vue` files.
