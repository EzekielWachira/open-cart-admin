import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { AppInterface } from 'src/store/module-app/state'

const action: ActionTree<AppInterface, StateInterface> = {
  toggleDarkMode ({ commit }, value: boolean): void {
    commit('toggleDarkMode', value)
  }
}

export default action
