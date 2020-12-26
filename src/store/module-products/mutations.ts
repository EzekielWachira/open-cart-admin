import { MutationTree } from 'vuex'
import { ProductInterface, ProductItemInterface } from './state'

const mutations: MutationTree<ProductInterface> = {
  getAllProducts (state: ProductInterface, products: Array<ProductItemInterface>) {
    state.allProducts = products
  },
  toggleDarkMode (state: ProductInterface, value: boolean) {
    state.isDarkModeEnabled = value
  }
}

export default mutations
