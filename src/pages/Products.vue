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
            <q-input type="file" @change="selectImage" @select="selectImage" outlined />
          </q-card-section>
          <q-card-section v-if="previewImage !== ''">
<!--            <img :src="image">-->
            <q-img :src="previewImage" height="150px" width="100%" contain/>
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

  @Action('productModule/addProduct') addProduct: any
  @Getter('productModule/getProduct') getProduct: any
  @Action('productModule/addCategory') addCategory:any
  @Getter('productModule/getAllCategories') allCategories: any
  @Action('productModule/getAllCategories') getCategories: any

  private selectImage(event: any) : void {
    console.log(event.target.files)
    let image = event.target.files[0]
    this.product.image = image
    let reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = (e) => {
      try {
        this.previewImage = e.target.result
        console.log("Image is" + this.image)
        // this.product.image = this.image
      } catch (err) {
        console.log(err)
      }
    }
  }

  private handleFileChange (e: any) {
    this.product.image = e.target.files[0]
    console.log(e.target.files[0])
    console.log("Product image: " + this.product.image)
    // if (!e.target.files.length) return
    // let file = e.target.files[0]
    // console.log("HELLLLO" + e.target.files[0])
    // let reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onload = e => {
    //   let src = e.target.result
    //   console.log(src)
    // }
  }

  private logToConsole () {
    console.log(this.product.image)
  }

  private saveCategory () : void{
    console.log(this.category)
    this.addCategory(this.category)
    this.getCategories()
    this.newCategoryPrompt = false
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

  private addProductItem () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    let formData = new FormData()
    formData.append("name", this.product.name)
    formData.append("description", this.product.description)
    if (this.product.image !== null){
      formData.append("image", this.product.image)
    }
    formData.append("category_id", this.product.category_id.toString())
    formData.append("price", this.product.price.toString())
    console.log(`Form data ${formData}`)
    this.addProduct(formData)
    this.product = {
      name: '',
      description: '',
      image: null,
      category_id: 0,
      price: 0
    }
    this.previewImage = ""
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
