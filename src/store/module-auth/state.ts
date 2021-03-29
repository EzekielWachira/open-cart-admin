import { UserData } from 'src/database/User'

export interface AuthInterface {
  user: UserData
  isLoggedIn: boolean
  accessToken: string
  users : Array<UserData>
}
const state: AuthInterface = {
  user: {
    name: '',
    email: '',
    password: ''
  },
  isLoggedIn: false,
  accessToken: '',
  users: []
}

export default state
