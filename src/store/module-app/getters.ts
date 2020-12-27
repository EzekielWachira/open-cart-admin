import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { AppInterface } from 'src/store/module-app/state'

const getters: GetterTree<AppInterface, StateInterface> = {
  darkModeStatus (state: AppInterface): boolean {
    return state.isDarkThemeEnabled
  }
}

export default getters
