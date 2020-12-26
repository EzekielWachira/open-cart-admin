import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ProductInterface } from './state'
import product from 'src/utils/Products'

const actions: ActionTree<ProductInterface, StateInterface> = {
  getAllProducts ({ commit }): void {
    const allProducts: { name: string; image: string; description: string; price: number }[] = []
    product.forEach((item) => {
      allProducts.push(item)
    })
    commit('getAllProducts', allProducts)
  },

  loggerClick () {
    console.log('Logger was clicked')
  },

  toggleDarkMode ({ commit }, value: boolean): void {
    commit('toggleDarkMode', value)
  }
}

export default actions
