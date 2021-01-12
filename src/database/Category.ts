import Api from 'src/database/Api'
import getCookie from 'src/database/Csrf'

export interface CategoryData {
  name: string
}

export class Category {
  public async addCategory (data: CategoryData) {
    await getCookie()
    return Api().post('/category', data)
  }

  public async editCategory (id: number, data: CategoryData) {
    await getCookie()
    return Api().put(`/category/${id}`, data)
  }

  public async deleteCategory (id: number) {
    return Api().delete(`/category/${id}`)
  }
}
