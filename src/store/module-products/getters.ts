import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store'
import { ProductInterface, ProductItemInterface } from './state'

const getters: GetterTree<ProductInterface, StateInterface> = {
  allProducts (state: ProductInterface): Array<ProductItemInterface> {
    return state.allProducts
  },
  darkThemeStatus (state: ProductInterface): boolean {
    return state.isDarkModeEnabled
  },
  getProduct (state: ProductInterface, index: number): ProductItemInterface {
    console.log(state.allProducts[index])
    return state.allProducts[index]
  }
}

export default getters
