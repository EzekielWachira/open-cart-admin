import { MutationTree } from 'vuex'
import { ProductInterface } from './state'
import { ProductItem } from 'src/database/Product'
import { CategoryData } from 'src/database/Category'

const mutations: MutationTree<ProductInterface> = {
  getAllProducts (state: ProductInterface, products: ProductItem[]) {
    state.allProducts = products
  },

  getProduct (state: ProductInterface, productItem: ProductItem) {
    state.productItem = productItem
  },

  addProduct (state: ProductInterface, item: ProductItem) {
    state.allProducts.push(item)
  },

  deleteProduct (state: ProductInterface, index: number) {
    state.allProducts.splice(index, 1)
  },

  addCategory (state: ProductInterface, category: CategoryData) {
    state.categories.push(category)
  },

  deleteCategory (state: ProductInterface, index: number) {
    state.categories.splice(index, 1)
  },

  getAllCategories (state: ProductInterface, categoryData: Array<CategoryData>) {
    state.categories = categoryData
  }
  //
  // editCategory (state: ProductInterface, id: number) {
  //
  // }

  // updateProduct (state: ProductInterface, index: number) {
  //
  // }
}

export default mutations
