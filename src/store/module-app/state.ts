export interface AppInterface {
  isDarkThemeEnabled: boolean,
  isUserLoggedIn: boolean
}

const state: AppInterface = {
  isDarkThemeEnabled: false,
  isUserLoggedIn: false
}

export default state
