<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs" v-if="clothes.length > 0">
        <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
             v-for="(item, index) in clothes" :key="index">
          <item :data="clothes[index]" @click="logClick" :index="index"/>
        </div>
    </div>
    <div v-else class="">
      <div class="fixed-center text-center">
        <q-icon name="mdi-database-off-outline" class="text-yellow-13" size="70px"></q-icon>
        <div class=" text-yellow-13 text-h5"> No Items Available</div>
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

  private clothes : Array<ProductItem> = []

  @Getter('productModule/getAllProducts') products: any
  @Action('productsModule/loggerClick') logClick: any
  @Action('productModule/getAllProducts') getProducts: any
  created () {
    this.getProducts()
    this.$root.$on('refreshClicked', () => {
      this.getProducts()
      this.filterProducts()
      console.log("Refreshing the page")
    })
  }

  private filterProducts () : void {
    this.clothes = this.products.filter((product: ProductItem) => {
      return product.category?.name === "clothes"
    })
  }

  private beforeMount() {
    // this.filterProducts()
  }

  private mounted () {
    this.getProducts()
    this.filterProducts()
  }
}
</script>
