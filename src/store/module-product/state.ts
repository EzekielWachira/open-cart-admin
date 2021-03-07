import { ProductItem } from 'src/database/Product'
import { CategoryData } from 'src/database/Category'

export interface ProductInterface {
  productItem: ProductItem
  allProducts: Array<ProductItem>
  categories: Array<CategoryData>
}

const state: ProductInterface = {
  productItem: {
    name: '',
// @ts-ignore
    image: null,
    description: '',
    price: 0
  },
  allProducts: [],
  categories: []
}

export default state
