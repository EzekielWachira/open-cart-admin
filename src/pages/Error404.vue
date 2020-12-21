<template>
  <div class="fullscreen bg-blue-grey-10 text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh" class="text-positive">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="positive"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Error404 extends Vue {}
</script>
