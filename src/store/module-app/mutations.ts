import { MutationTree } from 'vuex'
import { AppInterface } from 'src/store/module-app/state'

const mutations: MutationTree<AppInterface> = {
  toggleDarkMode (state: AppInterface, value: boolean) {
    state.isDarkThemeEnabled = value
  }
}

export default mutations
