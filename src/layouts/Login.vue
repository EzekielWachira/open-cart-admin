<template>
  <q-layout>
    <q-page class="flex justify-center">
      <div class="flex flex-center" style="justify-items: center; align-content: center">
        <q-card style="width: 450px; margin-top: auto">
          <q-card-section class="text-center text-h5">
            Login
          </q-card-section>
          <q-card-section>
            <q-input dense placeholder="email address" color="positive"
                     autofocus hint="example@example.com"
                     v-model="userData.email"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-email-open-outline"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input dense placeholder="password" hint="Min 6 characters"
                     color="positive"
                     v-model="userData.password"
                     @keyup.enter="loginUser(userData)"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-form-textbox-password"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="positive" icon-right="login" label="Login" @click="loginUser(userData)"/>
          </q-card-actions>
          <q-card-section class="q-pt-none text-center text-positive text-subtitle1 text-white"
                          :class="darkModeStatus ? 'text-white' : 'text-blue-grey-10'"
          >
            Don't have an account? <strong class="text-bold text-positive cursor-pointer" @click="redirectToRegister">Register</strong>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </q-layout>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import { UserData } from 'src/database/User'

@Component({
  meta () {
    return {
      title: 'login',
      titleTemplate: (title: string) => `opencartadmin | ${title}`
    }
  }
})
export default class Login extends Vue {
  private context = this
  private userData = {
    email: '',
    password: ''
  }

  @Getter('appModule/darkModeStatus') darkModeStatus: any
  @Action('authModule/login') login: any
  @Action('authModule/getUser') getAuthUser: any

  private async redirectToRegister () {
    await this.$router.push('register')
  }

  private async loginUser (data: UserData) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.login(data)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.getAuthUser()
    await this.$router.push('/')
  }
}

</script>

<style scoped>
.hello{
  color: red;
}
</style>
