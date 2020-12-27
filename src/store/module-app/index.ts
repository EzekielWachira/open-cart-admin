import { Module } from 'vuex'
import state, { AppInterface } from './state'
import { StateInterface } from 'src/store'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const appModule: Module<AppInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default appModule
