// import { ActionTree } from 'vuex'
// import { StateInterface } from '../index'
// import { ProductInterface, ProductItemInterface } from './state'
// import product from 'src/utils/Products'
//
// const actions: ActionTree<ProductInterface, StateInterface> = {
//   getAllProducts ({ commit }): void {
//     const allProducts: { name: string; image: string; description: string; price: number }[] = []
//     product.forEach((item) => {
//       allProducts.push(item)
//     })
//     commit('getAllProducts', allProducts)
//   },
//
//   loggerClick () {
//     console.log('Logger was clicked')
//   },
//
//   toggleDarkMode ({ commit }, value: boolean): void {
//     commit('toggleDarkMode', value)
//   },
//
//   addProduct ({ commit }, item: ProductItemInterface) {
//     commit('addProduct', item)
//   },
//
//   getProduct ({ commit }, index: number) {
//     commit('getProduct', index)
//   }
// }
//
// export default actions
