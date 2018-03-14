<img src='./public/banner.png' height='48'>

[![GitHub release](https://img.shields.io/github/release/alteryx-vue/nyt-connector.svg)](https://github.com/alteryx-vue/nyt-connector) [![Build Status](https://travis-ci.org/alteryx-vue/nyt-connector.svg?branch=master)](https://travis-ci.org/alteryx-vue/nyt-connector) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
> An Alteryx Connector built with Vue.js and Vuetify

This connector was developed using the increasingly popular [Vue.js](https://vuejs.org) JavaScript framework alongside a UI framework known as [Vuetify](https://vuetifyjs.com) - which was built specifically for Vue.js and follows [Material Design](https://material.io/) guidelines.  

The result is a beautiful, responsive, performant example of the first Alteryx tool developed using the progressive Vue.js library.

Vue.js is the perfect lightweight JavaScript framework for use within the Alteryx HTML/JavaScript SDK - especially when performance is a  priority and you're interested in a simple GetConfiguration/SetConfiguration setup.  Vue.js also has excellent state-management package integration, making data persistence completely painless.  Throw in a lightweight UI and [axios](https://github.com/axios/axios) (promise-based HTTP client) and building sleek, agile connectors in Alteryx is a cinch!

![NYT Connector](https://github.com/coxta/embed-content/raw/master/nyt-connector.gif)

### Requirements
- [NodeJS/npm](https://nodejs.org)


## Install/Download

A compiled build can be installed with the [.YXI installer here](https://github.com/alteryx-vue/installers/raw/master/nyt-connector.yxi) or by downloading from the [Alteryx Gallery](https://gallery.alteryx.com/#!app/New-York-Times/5aa5908a0462d716e8cb1e63).  Use the instructions below for installing from source.

### clone to HtmlPlugins or Roaming directory

``` bash
# typically in this location - use this option if you have admin rights on your machine
cd "c:/Program Files/Alteryx/bin/HtmlPlugins"

# or if you don't have admin rights...
# cd "c:/Users/{user}/AppData/Roaming/Alteryx/Tools"

# clone this repository
git clone https://github.com/alteryx-vue/nyt-connector

# cd to project
cd nyt-connector
```

## Build Setup & Testing

### install dependencies

`npm install`

### Dev Environment Testing

You can use `npm run dev` to serve the project with hot reload for testing in a browser.  
>limited functionality in browser - use for Vue component and/or state management debugging, etc.

__Note__: When using Chrome, be sure to make use of the [Vue.js Devtools Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

### Build Production

Webpack and such..

``` bash
# build & compile
npm run build
```

Webpack [vue-loader](http://vuejs.github.io/vue-loader) is used for compiling `.vue` files.
