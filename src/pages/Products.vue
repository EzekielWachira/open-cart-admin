<template>
  <q-page>
    <div class="q-pa-md">
      <q-toolbar>
        <q-toolbar-title>Products</q-toolbar-title>
        <q-space />
        <q-btn icon-right="mdi-tag-plus" class="text-white q-mr-sm" label="New Category"
               @click="newCategoryPrompt = true"
               style="background: #37474f" />
        <q-btn icon-right="mdi-playlist-plus" class="text-white" label="New Product"
               @click="newProductPrompt = true"
               style="background: #37474f"/>
      </q-toolbar>
      <q-tabs
        v-model="tab"
        class="text-white q-mt-md"
        align="justify" dense style="background: #37474f"
        active-color="positive"
      >
        <q-route-tab name="clothes" icon="mdi-tshirt-crew-outline" label="Clothes" to="/products/clothes"/>
        <q-tab name="shoes" icon="mdi-shoe-cleat" label="Shoes"/>
        <q-tab name="beauty" icon="mdi-face-shimmer-outline" label="Beauty" />
        <q-tab name="electronics" icon="mdi-television" label="Electronics" />
        <q-tab name="phones" icon="mdi-cellphone-android" label="Phones" />
        <q-tab name="laptops_computers" icon="mdi-laptop" label="Laptops & Computers" />
      </q-tabs>
      <div>
        <router-view />
      </div>
      <q-dialog v-model="newProductPrompt" persistent>
        <q-card style="min-width: 350px; width: 450px">
          <q-card-section>
            <div class="text-h6">New Product</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense color="positive"
                     placeholder="Product name" outlined
                     v-model="product.name"
                     autofocus @keyup.enter="newProductPrompt = false" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense color="positive"
                     placeholder="Product description" type="textarea" outlined
                     v-model="product.description"
                     />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-file label="Product Image" outlined dense value="">
              <template v-slot:prepend>
                <q-icon name="image"/>
              </template>
            </q-file>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-select :options="options" label="Category" dense outlined value="">
              <template v-slot:prepend>
                <q-icon name="mdi-shape-outline" />
              </template>
            </q-select>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense color="positive" outlined prefix="$"
                     placeholder="Price" type="number"
                     style="max-width: 200px"
                     v-model="product.price"
                     />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel"
                   color="red"
                   :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
                   v-close-popup />
            <q-btn flat label="Add Product"
                   color="positive"
                   :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
                   @click="addProductItem"
                   v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="newCategoryPrompt" persistent>
        <q-card style="min-width: 350px; width: 450px">
          <q-card-section>
            <div class="text-h6">New Category</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense color="positive"
                     placeholder="Category name" outlined
                     autofocus @keyup.enter="newCategory = false" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel"
                   color="red"
                   :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
                   v-close-popup />
            <q-btn flat label="Add Category"
                   color="positive"
                   :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
                   v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import { ProductItemInterface } from 'src/store/module-products/state'
import {Action, Getter} from 'vuex-class'

@Component
export default class Products extends Vue {
  private tab = 'clothes'
  private newProductPrompt = false
  private newCategoryPrompt = false
  private options = ['Clothes', 'Shoes', 'Electronics', 'Laptops & Computers']
  private product = {
    name: '',
    description: '',
    image: '../images/nike.png',
    price: 99.99
  }

  @Action('productModule/addProduct') addProduct: any
  @Getter('productModule/getProduct') getProduct: any

  private addProductItem () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.addProduct(this.product)
    this.product = {
      name: '',
      description: '',
      image: '../images/nike.png',
      price: 0
    }
  }

  created () {
    this.$on('ItemClicked', (item: ProductItemInterface) => {
      console.log(item)
    })
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
