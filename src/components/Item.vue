<template>
  <q-card>
    <q-card-section>
      <q-img :src="data.image" contain width="100%" height="200px"/>
    </q-card-section>
    <q-card-section class="q-pt-none text-h6">
      {{ trimText(data.name, 25) }}
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ trimText(data.description, 100) }}
    </q-card-section>
    <q-card-section class="q-pt-none text-positive text-h6">&dollar;{{ data.price }}</q-card-section>
    <q-card-actions class="absolute-bottom-right">
      <q-btn icon="mdi-pencil-outline" dense flat
        :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
             :style="$q.dark.isActive? 'color: #ffffff': 'color: #37474f'"
             @click="getProductItem"
      />
      <q-btn icon="mdi-delete-outline" class="text-red" dense flat
        :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue, Prop } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'
import {trimLongText} from "src/utils/Utilities";
// import { ProductItemInterface } from 'src/store/module-products/state'

@Component
export default class Item extends Vue {
  @Prop({ default: {} }) readonly data!: Object
  @Prop({ default: -1 }) readonly index!: number
  @Action('productModule/getProduct') getProduct: any
  @Getter('productModule/getProduct') product: any
  @State('productModule/productItem') productItem: any

  private getProductItem () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    this.getProduct(this.index)
    this.$emit('ItemClicked', this.productItem)
  }

  private trimText(textToTrim: string, length: number) : string {
    return trimLongText(textToTrim, length)
  }
}
</script>

<style scoped lang="scss">
.dark-enabled-btn{
  box-shadow: 5px 5px 10px #29353a, -5px -5px 10px #455964;
}
.dark-disabled-btn{
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
  color: #37474f;
}
</style>
