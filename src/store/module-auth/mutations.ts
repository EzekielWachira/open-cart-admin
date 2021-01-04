import { MutationTree } from 'vuex'
import { AuthInterface } from 'src/store/module-auth/state'
import { UserData } from 'src/database/User'

const mutations: MutationTree<AuthInterface> = {
  login (state: AuthInterface, token: string) {
    state.accessToken = token
    state.isLoggedIn = true
  },

  register (state: AuthInterface, data: UserData) {
    state.user = data
  },

  logout (state: AuthInterface, value: boolean) {
    state.isLoggedIn = value
  },

  getUser (state: AuthInterface, user: UserData) {
    state.user = user
  }
}

export default mutations
