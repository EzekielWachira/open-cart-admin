import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store'
import { AuthInterface } from 'src/store/module-auth/state'
import { UserData } from 'src/database/User'

const getters: GetterTree<AuthInterface, StateInterface> = {
  getAuthenticatedUser (state: AuthInterface): UserData {
    return state.user
  },
  getToken (state: AuthInterface): string {
    return state.accessToken
  },
  getLoginStatus (state: AuthInterface): boolean {
    return state.isLoggedIn
  },
  getAllUsers (state : AuthInterface) : Array<UserData> {
    return state.users
  },
  getUsersCount (state : AuthInterface) : number {
    return state.users.length
  }
}

export default getters
