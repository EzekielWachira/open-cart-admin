<template>
  <q-layout>
    <q-page class="flex justify-center">
      <div class="flex flex-center" style="justify-items: center; align-content: center">
        <q-card style="width: 450px; margin-top: auto">
          <q-card-section class="text-center text-h5">
            Register
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input dense placeholder="name" color="positive" autofocus
                     hint="example: John Doe"
                     v-model="userData.name"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-clipboard-account-outline"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input dense placeholder="email address" color="positive"
                     hint="example@example.com"
                     v-model="userData.email"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-email-open-outline"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input dense placeholder="password" hint="Min 6 characters"
                     color="positive"
                     v-model="userData.password"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-form-textbox-password"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input dense placeholder="repeat password" hint="Min 6 characters"
                     color="positive"
                     v-model="userData.password_confirmation"
                     @keyup.enter="registerUser(userData)"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-form-textbox-password"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="positive" icon-right="login" label="Register" @click="registerUser(userData)"/>
          </q-card-actions>
          <q-card-section class="q-pt-none text-center text-positive text-subtitle1 text-white"
                          :class="darkModeStatus ? 'text-white' : 'text-blue-grey-10'"
          >
            Already have an account <strong class="text-bold text-positive cursor-pointer"
                                            @click="redirectToLogin">Login</strong>
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

@Component
export default class Register extends Vue {
  private context = this
  private userData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  @Getter('appModule/darkModeStatus') darkModeStatus: any
  @Action('authModule/register') register: any

  private redirectToLogin (): void{
    this.$router.push('login')
  }

  private registerUser (data: UserData) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.register(data)
    this.redirectToLogin()
  }
}

</script>

<style scoped>

</style>
