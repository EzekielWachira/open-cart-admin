import { ProductItem } from 'src/database/Product'

export interface ProductInterface {
  productItem: ProductItem
  allProducts: Array<ProductItem>
}

const state: ProductInterface = {
  productItem: {
    name: '',
    image: '',
    description: '',
    price: 0
  },
  allProducts: []
}

export default state
