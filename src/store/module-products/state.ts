export interface ProductInterface {
  productItem: ProductItemInterface
  allProducts: Array<ProductItemInterface>
  isDarkModeEnabled: boolean
}

export interface ProductItemInterface {
  name: string,
  image: string,
  description: string,
  price: number
}

const state: ProductInterface = {
  productItem: {
    name: 'Example name',
    image: 'Exampe image',
    description: 'Example description',
    price: 47.33
  },
  allProducts: [],
  isDarkModeEnabled: false
}

export default state
