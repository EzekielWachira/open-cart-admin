<template>
  <q-page>
    <div class="q-pa-md">

    </div>
  </q-page>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import customers from "src/utils/Customers";

@Component
export default class Settings extends Vue {
  private darkTheme = true
  private allowBackUp = true
  private showNotification = false
}

</script>

<style scoped>

</style>
