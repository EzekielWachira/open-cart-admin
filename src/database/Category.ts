import Api from 'src/database/Api'
import getCookie from 'src/database/Csrf'

export interface CategoryData {
  id? : number,
  name: string,
  created_at? : string,
  updated_at? : string
}

export class Category {
  public async addCategory (data: CategoryData) {
    await getCookie()
    console.log(data)
    return Api().post('/category', data)
  }

  public async editCategory (id: number, data: CategoryData) {
    await getCookie()
    return Api().put(`/category/${id}`, data)
  }

  public async deleteCategory (id: number) {
    await getCookie()
    return Api().delete(`/category/${id}`)
  }

  public async getAllCategories () {
    await getCookie()
    return Api().get('/categories')
  }

  public async getCategory (name: string) {
    await getCookie()
    return Api().get(`/category/${name}`)
  }
}
