import { ActionTree } from 'vuex'
import { StateInterface } from 'src/store'
import { AuthInterface } from 'src/store/module-auth/state'
import { User, UserData } from 'src/database/User'
import VueRouter from 'vue-router'

const actions: ActionTree<AuthInterface, StateInterface> = {
  async login ({ commit }, data: UserData) {
    const user = new User()
    await user.login(data).then(response => {
      commit('login', response.data)
      localStorage.setItem('auth_token', response.data)
      // window.self.location.replace('/products')
      // eslint-disable-next-line no-void
      // new VueRouter().push('/')
    })
  },

  async register ({ commit }, data: UserData) {
    const user = new User()
    await user.register(data).then(response => {
      commit('register', response.data)
    })
  },

  async logout ({ commit }) {
    const user = new User()
    await user.logout().then(response => {
      commit('logout', false)
    })
  },

  async getUser ({ commit }) {
    const user = new User()
    await user.getAuthUser().then(response => {
      commit('getUser', response.data)
    })
  },

  getToken ({ commit }) {
    commit('getToken', localStorage.getItem('auth_token'))
  }
}

export default actions
