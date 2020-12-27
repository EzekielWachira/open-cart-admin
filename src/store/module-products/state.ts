export interface ProductInterface {
  productItem: ProductItemInterface
  allProducts: Array<ProductItemInterface>
  isDarkModeEnabled: boolean
  productIndex: number
}

export interface ProductItemInterface {
  name: string,
  description: string,
  image: string,
  price: number
}

const state: ProductInterface = {
  productItem: {
    name: '',
    description: '',
    image: '',
    price: 0
  },
  allProducts: [],
  isDarkModeEnabled: false,
  productIndex: -1
}

export default state
