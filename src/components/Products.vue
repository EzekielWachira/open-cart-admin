<template>
    <q-card class="text-white sales row">
      <q-card-section>
        <q-icon name="mdi-tshirt-crew-outline" size="50px"/>
      </q-card-section>
      <q-card-section class="column">
        <div class="text-subtitle1">PRODUCTS</div>
        <div class="text-h5">589</div>
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
  background-color: #F4D03F;
  background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
}
</style>
