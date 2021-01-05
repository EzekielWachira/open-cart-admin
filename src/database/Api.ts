import axios from 'axios'
const BaseUrl = axios.create({
  baseURL: 'http://localhost:8000/admin'
})

const Api = () => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    BaseUrl.defaults.headers.common.authorization = `Bearer ${token}`
  }
  return BaseUrl
}

Api().defaults.withCredentials = true

export default Api
