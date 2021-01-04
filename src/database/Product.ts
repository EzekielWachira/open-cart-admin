import Api from './Api'
import getCookie from './Csrf'
import { AxiosPromise } from 'axios'
export interface ProductItem {
  name: string
  image: string
  description: string
  price: number
}

interface ProductTransactions {
  addProduct (product: ProductItem): void
  deleteProduct (index: number): void
  getProduct (index: number): ProductItem
  getAllProducts (): Array<ProductItem>
}

export class Product {
  async addProduct (product: ProductItem) {
    await getCookie()
    return Api().post('/product', product)
  }

  async deleteProduct (index: number) {
    await getCookie()
    return Api().delete(`/product/${index}`)
  }

  async getAllProducts () {
    await getCookie()
    return Api().get('/products')
  }

  async getProduct (index: number) {
    await getCookie()
    return Api().get(`/product/${index}`)
  }
}
