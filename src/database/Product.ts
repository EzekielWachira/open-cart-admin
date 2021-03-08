import Api from './Api'
import getCookie from './Csrf'
import { AxiosPromise } from 'axios'
import {CategoryData} from "src/database/Category";
export interface ProductItem {
  category_id?: number,
  name: string
  image: File
  description: string
  price: number,
  category?: CategoryData
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
  // 127.0.0.1:8000/api/product/category/Clothes

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
