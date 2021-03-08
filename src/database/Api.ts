import Axios from 'axios'
import { LocalStorage } from "quasar";

const BaseUrl = Axios.create({
  baseURL: 'http://localhost:8000/api'
})

const Api = () => {
  let token: string = ""
  if (LocalStorage.has('auth_token')) {
    //@ts-ignore
    token = LocalStorage.getItem('auth_token')
  }

  if (token) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    BaseUrl.defaults.headers.common.authorization = `Bearer ${token}`
  }
  return BaseUrl
}

Api().defaults.withCredentials = true

export default Api
