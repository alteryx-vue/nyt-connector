# nyt (New York Times)
### Alteryx NYT Connector built with Vue.js

> Alteryx HTML SDK template built with Vue.js and Vuetify

Alteryx NYT Connecter - bottom navigation w/ top toolbar for page/tab titles and developer options icon. 

### Requirements
- [NodeJS/npm](https://nodejs.org)


## Install/Download
---

### clone to the Alteryx HTML plugins directory

``` bash
# usually in the following location
cd .../HtmlPlugins

# clone repo
git clone https://github.com/alteryx-vue/nyt

# change directory to project
cd nyt
```

## Build Setup & Testing
---

### install dependencies

`npm install`

Default production dependencies:

``` bash
  "dependencies": {
    "vue": "^2.5.3",
    "vuelidate": "^0.6.1",
    "vuetify": "^0.17.4",
    "vuex": "^3.0.1",
    "axios": "^0.17.1",
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
