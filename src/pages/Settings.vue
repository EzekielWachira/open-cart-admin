<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered padding class="q-pa-md">
        <q-item-label class="text-grey-5">Account</q-item-label>
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-avatar color="positive">
              <strong>E</strong>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            Signed in as <strong class="text-positive">{{ authUser.email }}</strong>
          </q-item-section>
          <q-item-section side class="text-positive">
            Sign in with a different account <q-icon name="mdi-open-in-new" />
          </q-item-section>
        </q-item>
        <q-separator spaced/>
        <q-item-label class="text-grey-5">Appearance</q-item-label>
        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Dark theme</q-item-label>
            <q-item-label caption>Change App theme</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-toggle color="positive" v-model="darkTheme" val="friend" />
          </q-item-section>
        </q-item>
        <q-separator spaced/>
        <q-item-label class="text-grey-5">General</q-item-label>
        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox color="positive" v-model="allowBackUp" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Auto Backup data</q-item-label>
            <q-item-label caption>
              Auto-Backup your data at anytime. Data charges may apply
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox color="positive" v-model="showNotification" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Show notifications</q-item-label>
            <q-item-label caption>
              Notify me about updates to the apps
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class Settings extends Vue {
  private darkTheme = true
  private allowBackUp = true
  private showNotification = false

  @Getter('authModule/getAuthenticatedUser') authUser: any
}

</script>

<style scoped>

</style>
