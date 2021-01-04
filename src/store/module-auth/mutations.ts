import { MutationTree } from 'vuex'
import { AuthInterface } from 'src/store/module-auth/state'
import { UserData } from 'src/database/User'

const mutations: MutationTree<AuthInterface> = {
  login (state: AuthInterface, data: UserData) {
    state.user = data
    state.isLoggedIn = true
  },

  register (state: AuthInterface, data: UserData) {
    state.user = data
  },

  logout (state: AuthInterface, value: boolean) {
    state.isLoggedIn = value
  }
}

export default mutations
