<template>
  <q-layout>
    <q-page class="flex justify-center">
      <div class="flex flex-center" style="justify-items: center; align-content: center">
        <q-card style="width: 450px; margin-top: auto">
          <q-card-section class="text-center text-h5">
            Login
          </q-card-section>
          <q-card-section>
            <q-input dense placeholder="email address" color="positive" autofocus hint="example@example.com">
              <template v-slot:prepend>
                <q-icon name="mdi-email-open-outline"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input dense placeholder="password" hint="Min 6 characters" color="positive">
              <template v-slot:prepend>
                <q-icon name="mdi-form-textbox-password"/>
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="positive" icon-right="login" label="Login"/>
          </q-card-actions>
        </q-card>
      </div>
    </q-page>
  </q-layout>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {

}

</script>

<style scoped>

</style>
