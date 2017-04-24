// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import App from './App'

import Manone from './components/manone'
import Mantwo from './components/mantwo'
import Manthree from './components/manthree'
import Manfour from './components/manfour'
import Manfive from './components/manfive'

import Girlone from './components/girlone'
import Girltwo from './components/girltwo'
import Girlthree from './components/girlthree'
import Girlfour from './components/girlfour'

import Win from './components/win'
import Lose from './components/lose'

import Home from './components/home'

Vue.use(VueFire)
Vue.use(VueRouter)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
      routes: [
      { path: '/', component: Home },
      { path: '/manone',component: Manone},
      { path: '/manone',component: Manone},
      { path: '/mantwo',component: Mantwo},
      { path: '/manthree',component: Manthree},
      { path: '/manfour',component: Manfour},
      { path: '/manfive',component: Manfive},
      { path: '/girlone',component: Girlone},
      { path: '/girltwo',component: Girltwo},
      { path: '/girlthree',component: Girlthree},
      { path: '/girlfour',component: Girlfour},
      { path: '/win',component: Win},
      { path: '/lose',component: Lose},
      ],
  })
})
