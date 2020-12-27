<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {Action, Getter} from "vuex-class";

@Component
export default class App extends Vue {
  private context = this
  private darkModeStatus = localStorage.getItem('dark_mode') === 'true'

  @Getter('appModule/darkModeStatus') darkThemeStatus: any
  @Action('appModule/toggleDarkMode') toggleDarkMode: any

  private getAppTheme (): void {
    if (this.darkModeStatus) {
      this.context.$q.dark.set(true)
    }
  }

  created () {
    this.getAppTheme()
    this.toggleDarkMode(this.darkModeStatus)
  }
}
</script>
