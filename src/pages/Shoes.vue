<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs" v-if="shoes.length > 0">
      <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
           v-for="(item, index) in shoes" :key="index">
        <item :data="shoes[index]" @click="logClick" :index="index"/>
      </div>
    </div>
    <div v-else class="">
      <div class="fixed-center text-center">
        <q-icon name="mdi-database-off-outline" class="text-yellow-13" size="70px"></q-icon>
        <div class=" text-yellow-13 text-h5"> No Items Available</div>
      </div>
    </div>
<!--    <q-fab color="purple" icon="keyboard_arrow_up" direction="up"-->
<!--           class="absolute absolute-bottom-right"-->
<!--           style="bottom: 10px; right: 10px;"-->
<!--    >-->
<!--      <q-fab-action color="primary" icon="mail" />-->
<!--      <q-fab-action color="secondary" icon="alarm" />-->
<!--    </q-fab>-->
<!--    <q-btn icon="mdi-refresh-circle" class=" q-mr-sm absolute absolute-bottom-right q-mb-sm"  dense-->
<!--           @click="refreshCategories"-->
<!--           :loading="refreshLoading"-->
<!--           style="background: #37474f" />-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Item from 'components/Item.vue'
import { mapGetters, mapActions } from 'vuex'
import { Action, Getter } from 'vuex-class'
import {ProductItem} from "src/database/Product";
import {CategoryData} from "src/database/Category";

@Component({
  components: {
    Item
  }
})
export default class Shoes extends Vue {
  private productItems = []

  private shoes : Array<ProductItem> = []
  private refreshLoading: boolean = false

  @Getter('productModule/getAllProducts') products: any
  @Action('productModule/loggerClick') logClick: any
  @Action('productModule/getAllProducts') getProducts: any

  private async filterProducts () {
    this.shoes = await this.products.filter((shoe: ProductItem) => {
      return shoe.category?.name === "shoes"
    })
  }

  // private startLoading () : void {
  //   this.refreshLoading = true
  //   this.getCategories()
  //   this.options = []
  //   this.allCategories.forEach((data: CategoryData) => {
  //     this.options.push(data.name)
  //   })
  //   setTimeout(() => {
  //     this.refreshLoading = false
  //     console.log(this.allCategories)
  //   }, 2000)
  // }

  created () {
    this.getProducts()
    this.$root.$on('refreshClicked', () => {
      this.getProducts()
      this.filterProducts()
    })
  }

  private beforeMount() {
    this.filterProducts()
  }

  private mounted () {
    this.filterProducts()
    console.log(this.shoes)
  }
}
</script>
