import { UserData } from 'src/database/User'

export interface AuthInterface {
  user: UserData
  isLoggedIn: boolean
  accessToken: string
}
const state: AuthInterface = {
  user: {
    name: '',
    email: '',
    password: ''
  },
  isLoggedIn: false,
  accessToken: ''
}

export default state
