<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs">
        <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
             v-for="(item, index) in clothes" :key="index">
          <item :data="clothes[index]" @click="logClick" :index="index"/>
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
export default class Clothes extends Vue {
  private productItems = []
  private thumbStyle = {
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#027be3',
    width: '5px',
    opacity: 0.75
  }

  private barStyle = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#027be3',
    width: '9px',
    opacity: 0.2
  }
  private clothes : Array<ProductItem> = []

  @Getter('productModule/getAllProducts') products: any
  @Action('productsModule/loggerClick') logClick: any
  @Action('productModule/getAllProducts') getProducts: any
  created () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.getProducts()
    // this.productItems = this.$store.getters['productModule/allProducts']
  }

  private filterProducts () : void {
    this.clothes = this.products.filter((product: ProductItem) => {
      return product.category_id === 2
    })
  }

  private mounted () {
    this.getProducts()
    this.filterProducts()
    console.log(`Clothes: =>>>> ${this.clothes}`)
  }
}
</script>
