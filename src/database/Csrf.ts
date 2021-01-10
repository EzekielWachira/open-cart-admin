import Api from './Api'
import Cookie from 'js-cookie'

export default function getCookie () {
  const token = Cookie.get('XSRF-TOKEN')
  if (token) {
    return new Promise(resolve => {
      resolve(token)
    })
  }
  return Api().get('/csrf-cookie')
}
