<template>
    <q-card class="text-white sales row">
      <q-card-section>
        <q-icon name="mdi-account-group-outline" size="50px"/>
      </q-card-section>
      <q-card-section class="column">
        <div class="text-subtitle1">CUSTOMERS</div>
        <div class="text-h5">{{ usersCount }}</div>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ClassComponent extends Vue {
  @Prop({default : 0}) readonly usersCount!: any
}
</script>
<style lang="scss" scoped>
.sales{
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
}
</style>
