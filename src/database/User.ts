import Api from 'src/database/Api'
import getCookie from 'src/database/Csrf'

export interface UserData {
  name?: string
  email: string
  password: string
  // eslint-disable-next-line camelcase
  password_confirmation?: string
}

export class User {
  public async login (data: UserData) {
    await getCookie()
    return Api().post('/api/login', data)
  }

  public async register (data: UserData) {
    await getCookie()
    return Api().post('/register', data)
  }

  public async logout () {
    await getCookie()
    return Api().post('/logout')
  }

  public async getAuthUser () {
    await getCookie()
    return Api().get('/user')
  }
}
