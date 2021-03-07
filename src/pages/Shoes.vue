<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs">
      <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
           v-for="(item, index) in shoes" :key="index">
        <item :data="shoes[index]" @click="logClick" :index="index"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Item from 'components/Item.vue'
import { mapGetters, mapActions } from 'vuex'
import { Action, Getter } from 'vuex-class'
import {ProductItem} from "src/database/Product";

@Component({
  components: {
    Item
  }
})
export default class Shoes extends Vue {
  private productItems = []

  private shoes : Array<ProductItem> = []

  @Getter('productModule/getAllProducts') products: any
  @Action('productModule/loggerClick') logClick: any
  @Action('productModule/getAllProducts') getProducts: any

  private async filterProducts () {
    this.shoes = await this.products.filter((shoe: ProductItem) => {
      return shoe.category_id === 1
    })
  }

  created () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.getProducts()
    this.$on('ProductAdded', () => {
      this.getProducts()
    })
  }


  private mounted () {
    this.filterProducts()
  }
}
</script>
