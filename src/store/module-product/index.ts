import { Module } from 'vuex'
import state, { ProductInterface } from 'src/store/module-product/state'
import { StateInterface } from 'src/store'
import actions from 'src/store/module-product/actions'
import mutations from 'src/store/module-product/mutations'
import getters from 'src/store/module-product/getters'

const productModule: Module<ProductInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default productModule
