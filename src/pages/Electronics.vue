<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs" v-if="electronics.length > 0">
        <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
             v-for="(item, index) in electronics" :key="index">
          <item :data="electronics[index]" @click="logClick" :index="index"/>
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
export default class Electronics extends Vue {

  private electronics : Array<ProductItem> = []

  @Getter('productModule/getAllProducts') products: any
  @Action('productModule/loggerClick') logClick: any
  @Action('productModule/getAllProducts') getProducts: any

  private async filterProducts () : void {
    this.electronics = await this.products.filter(
      (electronic : ProductItem) => {
        return electronic.category?.name === "Electronics"
      }
    )
  }

  created () {
    this.getProducts()
  }

  private beforeMount() {
    this.filterProducts()
  }
}
</script>
