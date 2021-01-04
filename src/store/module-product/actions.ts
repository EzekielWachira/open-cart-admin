import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ProductInterface } from './state'
import { ProductItem, Product } from 'src/database/Product'

const actions: ActionTree<ProductInterface, StateInterface> = {
  async getAllProducts ({ commit }) {
    const product = new Product()
    await product.getAllProducts().then(response => {
      commit('getAllProducts', response.data)
    })
  },

  async addProduct ({ commit }, productItem: ProductItem) {
    const product = new Product()
    await product.addProduct(productItem).then(response => {
      commit('addProduct', response.data)
    })
  },

  async getProduct ({ commit }, index: number) {
    const product = new Product()
    await product.getProduct(index).then(response => {
      commit('getProduct', response.data)
    })
  },

  async deleteProduct ({ commit }, index: number) {
    const product = new Product()
    await product.deleteProduct(index).then(response => {
      commit('deleteProduct', index)
    })
  }
}

export default actions
