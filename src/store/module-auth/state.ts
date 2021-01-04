import { UserData } from 'src/database/User'

export interface AuthInterface {
  user: UserData
  isLoggedIn: boolean
}
const state: AuthInterface = {
  user: {
    name: '',
    email: '',
    password: ''
  },
  isLoggedIn: false
}

export default state
