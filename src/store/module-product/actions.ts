import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ProductInterface } from './state'
import { ProductItem } from 'src/database/Product'
import { Product } from "src/database/Product";

const actions: ActionTree<ProductInterface, StateInterface> = {
  getAllProducts ({ commit }): void {
    let allProducts: ProductItem[] = []
    const product = new Product()
    product.getAllProducts().then(response => {
        allProducts = response.data
        commit('')
      }
    )
  },
}

export default actions
