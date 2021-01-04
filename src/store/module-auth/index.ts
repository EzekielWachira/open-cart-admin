import { Module } from 'vuex'
import state, { AuthInterface } from 'src/store/module-auth/state'
import { StateInterface } from 'src/store'
import actions from 'src/store/module-auth/actions'
import getters from 'src/store/module-auth/getters'
import mutations from 'src/store/module-auth/mutations'

const authModule: Module<AuthInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default authModule
