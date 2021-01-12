import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store'
import { ProductInterface } from 'src/store/module-product/state'
import { ProductItem } from 'src/database/Product'
import {CategoryData} from "src/database/Category";

const getters: GetterTree<ProductInterface, StateInterface> = {
  getProduct (state: ProductInterface): ProductItem {
    return state.productItem
  },
  getAllProducts (state: ProductInterface): Array<ProductItem> {
    return state.allProducts
  },
  getAllCategories (state: ProductInterface): Array<CategoryData> {
    return state.categories
  }
}

export default getters
