<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs">
        <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
             v-for="(item, index) in beautyItems" :key="index">
          <item :data="beautyItems[index]" @click="logClick" :index="index"/>
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
export default class Beauty extends Vue {

  private beautyItems : Array<ProductItem> = []

  @Getter('productModule/getAllProducts') products: any
  @Action('productsModule/loggerClick') logClick: any
  @Action('productModule/getAllProducts') getProducts: any

  private async filterProducts () : void {
    this.beautyItems = await this.products.filter((item : ProductItem) => {
      return item.category_id === 5
    })
  }

  created () {
    this.getProducts()
  }

  private beforeMount() {
    this.filterProducts()
  }
}
</script>
