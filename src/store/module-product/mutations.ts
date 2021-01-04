import { MutationTree } from 'vuex'
import { ProductInterface } from './state'
import { ProductItem } from 'src/database/Product'

const mutations: MutationTree<ProductInterface> = {
  getAllProducts (state: ProductInterface, products: ProductItem[]) {
    state.allProducts = products
  },

  getProduct (state: ProductInterface, index: number) {
    state.productItem = state.allProducts[index]
  },

  addProduct (state: ProductInterface, item: ProductItem) {
    state.allProducts.push(item)
  },

  deleteProduct (state: ProductInterface, index: number) {
    state.allProducts.splice(index, 1)
  }

  // updateProduct (state: ProductInterface, index: number) {
  //
  // }
}

export default mutations
