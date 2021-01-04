import Api from './Api'

export default function getCookie () {
  return Api().get('/csrf-cookie')
}
