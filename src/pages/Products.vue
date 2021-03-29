<template>
  <q-page>
    <div class="q-pa-md">
      <q-toolbar>
        <q-toolbar-title>Products</q-toolbar-title>
        <q-space />
<!--        <q-btn icon="mdi-refresh-circle" class=" q-mr-sm" round dense-->
<!--               @click="loadRefresh" color="positive"-->
<!--               :loading="isDataRefreshed"-->
<!--               style="background: #37474f" />-->
        <q-btn icon="mdi-refresh-circle" class=" q-mr-sm"  dense
               @click="refreshCategories"
               :loading="refreshLoading" color="positive"
               style="background: #37474f" />
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
        <q-route-tab name="shoes" icon="mdi-shoe-cleat" label="Shoes" to="/products/shoes"/>
        <q-route-tab name="beauty" icon="mdi-face-shimmer-outline" label="Beauty" to="/products/beauty"/>
        <q-route-tab name="electronics" icon="mdi-television" label="Electronics" to="/products/electronics"/>
        <q-route-tab name="phones" icon="mdi-cellphone-android" label="Phones" to="/products/phones"/>
        <q-route-tab name="laptops_computers" icon="mdi-laptop" label="Laptops & Computers" to="/products/computers"/>
      </q-tabs>
      <div>
        <router-view />
      </div>
      <q-dialog v-model="newProductPrompt" persistent>
        <q-card style="min-width: 350px; width: 450px">
          <q-card-section class="row">
            <div class="text-h6">New Product</div>
            <q-space />
            <q-btn icon="mdi-refresh-circle" class="text-white q-mr-sm"  dense flat
                   @click="refreshCategories"
                   :loading="refreshLoading"
                   style="background: #37474f" />
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
<!--          <q-card-section class="q-pt-none">-->
<!--              <div class="col"></div>-->
<!--              <q-file label="Product Image" outlined dense value=""-->
<!--                      v-model="product.image"-->
<!--                      @change="selectImage"-->

<!--                      type="file"-->
<!--                      accept="image/*"-->
<!--              >-->
<!--                <template v-slot:prepend>-->
<!--                  <q-icon name="image"/>-->
<!--                </template>-->
<!--              </q-file>-->
<!--          </q-card-section>-->
          <q-card-section>
            <q-input type="file" @change="selectImage" @select="selectImage" outlined accept="image/*" />
          </q-card-section>
          <q-card-section v-if="previewImage !== ''">
<!--            <img :src="image">-->
            <q-img :src="previewImage" width="100%" contain/>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-select :options="options" label="Category" dense outlined value="" v-model="categoryName"
              @input="getCategoryId"
            >
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
                     v-model="category.name"
                     autofocus @keyup.enter="newCategory = false" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel"
                   color="red"
                   :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
                   v-close-popup
                    />
            <q-btn flat label="Add Category"
                   color="positive"
                   :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
                   @click="saveCategory"
            />
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
import {CategoryData} from "src/database/Category"
import Api from 'src/database/Api'
import { Category } from "src/database/Category"
import { Notification } from "src/utils/Utilities";
import showNotification from "src/utils/Utilities";

@Component
export default class Products extends Vue {
  private tab = 'clothes'
  private newProductPrompt = false
  private newCategoryPrompt = false
  private options: string[] = []
  private product = {
    category_id: 0,
    name: '',
    description: '',
    image: null,
    price: 99.99
  }
  private category : CategoryData = {name: ""}
  private categoryName: string = ""
  private image: any = ""
  private previewImage: any = ""
  private refreshLoading: boolean = false
  private loadingPercentage: number = 0
  private isDataRefreshed : boolean = false

  @Action('productModule/addProduct') addProduct: any
  @Getter('productModule/getProduct') getProduct: any
  @Action('productModule/addCategory') addCategory:any
  @Getter('productModule/getAllCategories') allCategories: any
  @Action('productModule/getAllCategories') getCategories: an

  private loadRefresh () : void{
    this.$root.$emit('refreshClicked')
  }

  private selectImage(event: any) : void {
    console.log(event.target.files)
    let image = event.target.files[0]
    this.product.image = image
    let reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = (e) => {
      try {
        //@ts-ignore
        this.previewImage = e.target.result
        console.log("Image is" + this.image)
      } catch (err) {
        console.log(err)
      }
    }
  }

  private saveCategory () : void{
    console.log(this.category)
    this.addCategory(this.category)
    this.getCategories()
    this.newCategoryPrompt = false
    this.getCategories()

    this.showNotification(
      {
        message: 'Category added successfully',
        type: 'positive',
        color: 'positive',
        icon: 'mdi-check-circle'}
    )
    // this.clear()
  }

  private clear () : void {
    this.category.name = ""
  }

  private async getCategoryId (value: any) {
    console.log(value)
    const category = new Category()

      const response = await category.getCategory(value)
      console.log(response.data.data.id)
      this.product.category_id = response.data.data.id
  }

  private showNotification (this: any, notification : Notification) {
    this.$q.notify({
      message: notification.message,
      color: notification.color,
      icon: notification.icon,
      multiLine: notification.multiline,
      avatar: notification.avatar,
      actions: notification.action
    })
  }

  private addProductItem () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    let formData = new FormData()
    formData.append("name", this.product.name)
    formData.append("description", this.product.description)
    if (this.product.image !== null){
      //@ts-ignore
      formData.append("image", this.product.image)
    }
    formData.append("category_id", this.product.category_id.toString())
    formData.append("price", this.product.price.toString())
    console.log(`Form data ${formData}`)
    this.addProduct(formData)

    this.showNotification(
      {
        message: 'Product added successfully',
        type: 'positive',
        color: 'positive',
        icon: 'mdi-check-circle'
      }
    )

    this.loadRefresh()

    this.product = {
      name: '',
      description: '',
      image: null,
      category_id: 0,
      price: 0
    }
    this.previewImage = ""
  }

  private startLoading () : void {
    this.refreshLoading = true
    this.isDataRefreshed = true
    this.getCategories()
    this.loadRefresh()
    this.options = []
    this.allCategories.forEach((data: CategoryData) => {
      this.options.push(data.name)
    })
    setTimeout(() => {
      this.refreshLoading = false
      this.isDataRefreshed = false
      console.log(this.allCategories)
    }, 2000)
  }

  private refreshCategories () : void {
    this.startLoading()
    // this.getCategories()
  }

  created () {
    this.getCategories()
    this.allCategories.forEach((data: CategoryData) => {
      console.log(data)
      this.options.push(data.name)
      console.log(this.options)
    })

  }


  mounted () {
    this.getCategories()
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
