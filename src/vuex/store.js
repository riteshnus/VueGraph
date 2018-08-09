import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'

Vue.use(Vuex)

const state = {
  label: [],
  values: []
}

export default new Vuex.Store({
  state,
  mutations
})
