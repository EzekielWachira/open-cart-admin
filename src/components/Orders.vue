<template>
    <q-card class="text-white sales row">
      <q-card-section>
        <q-icon name="mdi-truck-delivery-outline" size="50px"/>
      </q-card-section>
      <q-card-section class="column">
        <div class="text-subtitle1">ORDERS</div>
        <div class="text-h5">113</div>
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
  background-color: #FFE53B;
  background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
}
</style>
