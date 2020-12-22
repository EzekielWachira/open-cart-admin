<template>
    <q-card class="text-white sales row">
      <q-card-section>
        <q-icon name="mdi-cash-multiple" size="50px"/>
      </q-card-section>
      <q-card-section class="column">
        <div class="text-subtitle1">TOTAL SALES</div>
        <div class="text-h5">&dollar;3892</div>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ClassComponent extends Vue {
}
</script>
<style lang="scss" scoped>
.sales{
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}
</style>
