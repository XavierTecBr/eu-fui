import Vue from 'vue'
import Vuex from 'vuex'
import placeModule  from './places'

Vue.use(Vuex)

export const namespaced = true

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    place: placeModule
  }
})
